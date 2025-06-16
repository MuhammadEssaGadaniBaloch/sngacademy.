'use client';

import { createClient } from '@/lib/client';
import React, { useState, useCallback } from 'react';
import { QrReader } from 'react-qr-reader';
import toast from 'react-hot-toast';

const QrScanner = () => {
  const [data, setData] = useState('No result');
  const [loading, setLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState<{name: string, cnic: string, course: string} | null>(null);

  const saveToDatabase = useCallback(async (scannedData: string) => {
    if (!scannedData) return;

    setLoading(true);
    const supabase = createClient();

    try {
      const today = new Date();
      const dateOnly = today.toISOString().split('T')[0]; // YYYY-MM-DD

      // Parse the JSON string from QR code
      let studentId;
      try {
        const parsedData = JSON.parse(scannedData);
        studentId = parsedData.id;
      } catch (parseError) {
        toast.error('Invalid QR code');
        return;
      }

      // Step 1: Match ID in Admission Table
      const { data: student, error: matchError } = await supabase
        .from('Admission_Table')
        .select('id,Name,CNIC,Course')
        .eq('id', studentId)
        .maybeSingle();

      if (matchError) {
        console.error('Match Error:', matchError.message);
        toast.error('Student not found in admission records');
        return;
      }

      if (!student) {
        toast.error('Student not found in the admission records');
        return;
      }

      // Update student info for display
      setStudentInfo({
        name: student.Name,
        cnic: student.CNIC,
        course: student.Course
      });

      // Step 2: Check if already marked today
      const { data: existing, error: checkError } = await supabase
        .from('Attendance_table')
        .select('code_data')
        .eq('code_data', scannedData)
        .eq('date', dateOnly)
        .maybeSingle();

      if (checkError) {
        console.error('Check Error:', checkError.message);
        toast.error('Error checking attendance. Please try again.');
        return;
      }

      if (existing) {
        toast.error('Attendance already marked for today. Please try again tomorrow.');
        return;
      }

      // Step 3: Insert attendance with upsert to handle duplicates
      const { error: insertError } = await supabase
        .from('Attendance_table')
        .upsert([
          {
            code_data: scannedData,
            date: dateOnly,
            time: today.toLocaleTimeString(),
            scanned_at: today.toISOString(),
          },
        ], {
          onConflict: 'code_data,date'
        });

      if (insertError) {
        console.error('Insert Error:', insertError);
        throw insertError;
      }
      toast.success(`Attendance marked successfully for ${student.Name}!`);
    } catch (err: any) {
      console.error('Unexpected Error:', err.message);
      if (err.message.includes('duplicate key value')) {
        toast.error('Attendance already marked for today. Please try again tomorrow.');
      } else {
        toast.error('Failed to save attendance. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleScan = useCallback((result: any, error: any) => {
    if (result?.getText()) {
      const scannedData = result.getText();
      console.log('Scanned Data:', scannedData);
      setData(scannedData);
      saveToDatabase(scannedData);
    }

    if (error) {
      console.warn('QR Error:', error);
    }
  }, [saveToDatabase]);

  return (
    <section>
      <br/>
      <br/>

         
    <div className="min-h-xl  flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 ">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Student Online Attendance System
        </h2>

        <div className="border border-dashed border-gray-300 rounded-lg overflow-hidden">
          <QrReader
            constraints={{ facingMode: 'environment' }}
            onResult={handleScan}
            className="w-full"
          />
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-lg font-semibold text-center text-red-800 mb-3">Scanned Information</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Student Name:</span>
                <span className="text-sm font-medium text-gray-800">{studentInfo?.name || 'No recod'}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">CNIC:</span>
                <span className="text-sm font-medium text-gray-800">{studentInfo?.cnic || 'No recod'}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Course:</span>
                <span className="text-sm font-medium text-gray-800">{studentInfo?.course || 'No recod'}</span>
              </div>
            </div>
          </div>

          {loading && (
            <div className="flex items-center justify-center space-x-2 text-blue-600">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Saving attendance...</span>
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default QrScanner;