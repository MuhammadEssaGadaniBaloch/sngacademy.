'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { createClient } from '@/lib/client';
import Link from 'next/link';

const AdmissionForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [submittedCNIC, setSubmittedCNIC] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const timeOptionsBySlot: Record<string, string[]> = {
    Morning: ['08:30 AM - 10:30 AM', '10:35 AM - 11:35 AM'],
    Evening: ['02:30 PM - 4:30 PM', '4:40 PM - 6:00 PM'],
  };

  const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSlot(e.target.value);
    setSelectedTime('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());

    const {
      Name,
      Father,
      Email,
      Number,
      Address,
      CNIC,
      Birth,
      Campus,
      Course,
      Slot,
      Qualification,
      TimeTable,
    } = formEntries;

    try {
      const { data: existingUser, error: userError } = await supabase
        .from("Admission_Table")
        .select("*")
        .eq("CNIC", CNIC);

      if (userError) throw new Error("Error checking existing CNIC");
      if (existingUser && existingUser.length > 0)
        throw new Error("A user with this CNIC already exists");

      const { error: insertError } = await supabase
        .from("Admission_Table")
        .insert([{
          Name,
          Father,
          Email,
          Number,
          Address,
          CNIC,
          Birth,
          Campus,
          Course,
          Slot,
          TimeTable,
          Qualification,
        }]);

      if (insertError) throw new Error("Failed to submit form");

      toast.success("Application submitted successfully!");
      setSubmittedCNIC(CNIC as string);
      formRef.current?.reset();
      setSelectedSlot('');
      setSelectedTime('');
    } catch (err) {
      console.error('Error processing form:', err);
      toast.error(err instanceof Error ? err.message : "Form submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
    

    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Image
            src="/logo1.jpg"
            alt="School Logo"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900">Admission Form</h1>
        </div>

        {submittedCNIC ? (
          <div className="text-center space-y-6 py-12">
            <h2 className="text-2xl font-semibold text-green-600">🎉 Form Submitted Successfully!</h2>
            <p className="text-gray-700">Thank you for applying. You can now download or print your admit card.</p>
            <Link
              href={"/main/generateCard"}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Admit Card
            </Link>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <fieldset className="border p-6 rounded-lg">
              <legend className="text-xl font-semibold mb-4">Personal Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'Name', label: "Full Name*", placeholder: 'Your full name', type: 'text' },
                  { id: 'Father', label: "Father's Name*", placeholder: "Father's full name", type: 'text' },
                  { id: 'Email', label: "Email*", placeholder: 'example@mail.com', type: 'email' },
                  { id: 'Number', label: "Phone Number*", placeholder: '+92 300 1234567', type: 'tel' },
                  { id: 'Address', label: "Address*", placeholder: 'Your home address', type: 'text' },
                  { id: 'CNIC', label: "CNIC*", placeholder: 'xxxxx-xxxxxxx-x', type: 'text' },
                  { id: 'Birth', label: "Date of Birth*", placeholder: '', type: 'date' },
                  { id: 'Qualification', label: "Qualification*", placeholder: 'Your highest qualification', type: 'text' },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                    <input
                      type={type}
                      name={id}
                      id={id}
                      required
                      placeholder={placeholder}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                    />
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Academic Details */}
            <fieldset className="border p-6 rounded-lg">
              <legend className="text-xl font-semibold mb-4">Schedule Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="Campus" className="block text-sm font-medium text-gray-700">Campus*</label>
                  <select
                    name="Campus"
                    id="Campus"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Campus</option>
                    <option value="Village Qabool Khan Gadani">Village Qabool Khan Gadani</option>
                    <option value="Village Khud Bux Gadani">Village Khud Bux Gadani</option>
                    <option value="Village Ghul Beg Gadani">Village Ghul Beg Gadani</option>
                    <option value="Village Murad Bux Gadani">Village Murad Bux Gadani</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Course" className="block text-sm font-medium text-gray-700">Course*</label>
                  <select
                    name="Course"
                    id="Course"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Course</option>
                    <option value="English Grammar">English Grammar</option>
                    <option value="Basic Mathematics">Basic Mathematics</option>
                    <option value="Basic Science">Basic Science</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="Slot" className="block text-sm font-medium text-gray-700">Slot*</label>
                  <select
                    name="Slot"
                    id="Slot"
                    required
                    value={selectedSlot}
                    onChange={handleSlotChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                  >
                    <option value="">Select Slot</option>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
                {selectedSlot && timeOptionsBySlot[selectedSlot] && (
                  <div>
                    <label htmlFor="TimeTable" className="block text-sm font-medium text-gray-700">Time*</label>
                    <select
                      name="TimeTable"
                      id="TimeTable"
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2"
                    >
                      <option value="">Select Time</option>
                      {timeOptionsBySlot[selectedSlot].map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </fieldset>
            

      


            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-3 sm:space-y-0">
  <Link
    href={"/main/generateCard"}
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
  >
    View Admit Card
  </Link>

  <button
    type="submit"
    disabled={loading}
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
  >
    {loading ? 'Submitting...' : 'Submit Application'}
  </button>
</div>

          </form>
        )}
      </div>
    </div>
    </main>
  );
};

export default AdmissionForm;
