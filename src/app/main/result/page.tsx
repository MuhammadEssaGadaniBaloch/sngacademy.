"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/client";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface Result {
  rollNumber: string;
  cnic: string;
  name: string;
  course: string;
  slot: string;
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  position: string;
  test: string;
  campus: string;
}

export default function ResultPage() {
  const [rollNumber, setRollNumber] = useState("");
  const [cnic, setCnic] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };
    fetchUser();
  }, []);

  const fetchResult = async () => {
    if (!cnic || !rollNumber) {
      toast.error("Please enter both CNIC and Roll Number.");
      return;
    }

    if (cnic.length !== 13 || !/^\d+$/.test(cnic)) {
      toast.error("CNIC must be 13 numeric digits.");
      return;
    }

    const supabase = createClient();
    setLoading(true);
    setResult(null);
    setImageUrl(null);

    try {
      const { data, error } = await supabase
        .from("Result_Table")
        .select("*")
        .eq("rollNumber", rollNumber)
        .eq("cnic", cnic)
        .single();

      if (error || !data) {
        toast.error("Result not found.");
      } else {
        setResult(data as Result);
        toast.success("Result found successfully.");

        // Fetch profile picture from profiles table using auth.user().id
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            const { data: profileData, error: profileError } = await supabase
              .from('profiles')
              .select('avatar_path')
              .eq('id', user.id)
              .single();

            if (!profileError && profileData?.avatar_path) {
              const { data: imageData, error: imageError } = await supabase.storage
                .from('avatars')
                .createSignedUrl(profileData.avatar_path, 3600);

              if (!imageError && imageData?.signedUrl) {
                setImageUrl(imageData.signedUrl);
              }
            }
          }
        } catch (err) {
          console.warn("No profile picture found");
        }
      }
    } catch (err) {
      toast.error("An error occurred while fetching the result.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <br />
      <br />
      <div className="min-h-100 bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
          {!result ? (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Check Result</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 font-semibold">CNIC/B-Form:</label>
                  <Input
                    placeholder="Enter CNIC (13 digits)"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    maxLength={13}
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold">Roll Number:</label>
                  <Input
                    placeholder="Enter Roll Number"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                  />
                </div>
                <Button
                  onClick={fetchResult}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    "Check Result"
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <Card className="mt-6">
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center mb-4">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Student"
                      className="h-32 w-32 object-cover rounded-full border mb-4"
                      onError={(e) => {
                        e.currentTarget.src = '/Profile2.jpg';
                      }}
                    />
                  ) : (
                    <div className="h-32 w-32 flex items-center justify-center border rounded-full text-sm text-gray-400 mb-4">
                      No Picture
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold text-center text-green-700 mb-2">Result Sheet</h2>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Roll Number:</strong> {result.rollNumber}</p>
                <p><strong>Test:</strong> {result.test}</p>
                <p><strong>Slot:</strong> {result.slot}</p>
                <p><strong>Obtained Marks:</strong> {result.obtainedMarks}</p>
                <p><strong>Total Marks:</strong> {result.totalMarks}</p>
                <p><strong>Position:</strong> {result.position}</p>
                <p><strong>Percentage:</strong> {result.percentage}%</p>
                <p><strong>Course:</strong> {result.course}</p>
                <p><strong>Campus:</strong> {result.campus}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
