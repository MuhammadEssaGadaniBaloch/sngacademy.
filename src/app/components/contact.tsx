"use client";

import { Suspense, useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image'
import { createClient } from '@/lib/client';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const supabase = createClient();
    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());
    const { Name, Email, Message } = formEntries as { Name: string; Email: string; Message: string };

    // Log the form values for debugging purposes
    console.log({ Name, Email, Message });

    const { data, error } = await supabase.from('Message_Form').insert([
      {
        Name,
        Email,
        Message,
      },
    ]);

    if (error) {
      toast.error('Failed to submit the message. Please try again.');
      console.error(error);
    } else {
      toast.success('Message submitted successfully!');
      console.log(data);
    }
    setIsLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-100 py-30">
        <div className="flex justify-center my-4">
          <Image
            src="/Logo1.jpg"
            alt="Contact Us"
            width={90}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <div className="mt-4 text-gray-600">
              Have questions? We&rsquo;d love to hear from you. Send us a message or use our contact information below.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600">Village Qabool Khan Gadani Mirpur Mathelo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Email</p>
                    <a href="mailto:info@gadaniacademy.edu.pk" className="text-blue-600 hover:text-blue-700">
                      essagadani036@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-600">+92 304 8912423</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;
