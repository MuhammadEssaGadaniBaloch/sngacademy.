"use client";

import { useRouter } from "next/navigation";

export default function HelpErrorPage() {
  const router = useRouter();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <section>
      <br />
      <br />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="text-center max-w-xl p-6 bg-white rounded-2xl shadow-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">Need Assistance?</h1>

          <div className="text-left text-gray-700 text-lg space-y-4 mb-6">
            <p>🔌 <span className="font-semibold">Internet Issue:</span> Please make sure you are connected to the internet.</p>
            <p>🔐 <span className="font-semibold">Login Error:</span> Double-check your username and password. If the issue persists, contact the admin.</p>

            {/* Email Confirmation Message */}
            <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-md">
              📧 <strong>Email Sent:</strong> If you&apos;ve contacted us via email, please check your inbox for a confirmation message. Don&apos;t forget to look in your spam or junk folder too.
            </div>

            <p>📞 <span className="font-semibold">Still need help?</span> Contact <strong>Eng Muhammad Essa Gadani</strong> directly:</p>
            <ul className="ml-4 list-disc">
              <li><span className="font-medium">Phone:</span> <a href="tel:+923128140592" className="text-blue-600 underline">+92 312 8140592</a></li>
              <li><span className="font-medium">Email:</span> <a href="mailto:essagadani036@gmail.com" className="text-blue-600 underline">essagadani036@gmail.com</a></li>
            </ul>

            <p className="text-gray-600">
              An error occurred. Please try again later or contact support if the problem persists.
            </p>

            <p>This is an example with &apos;single quotes&apos;</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={refreshPage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Refresh Page
            </button>
            <button
              onClick={() => router.push("/")}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Go to Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
