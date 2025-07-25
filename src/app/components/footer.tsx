
'use client';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo1.jpg"
                alt="School Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="ml-2 text-lg font-bold">Shaheed Nasrullah Academy</h3>
            </div>
            <p className="text-gray-400">
              Providing quality education and building future leaders in Mirpur Mathelo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/main/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/main/admission" className="text-gray-400 hover:text-white transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/main/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/main/lectures" className="text-gray-400 hover:text-white transition">
                  Lectures
                </Link>
              </li>
              
              <li>
                <Link href="/main/result" className="text-gray-400 hover:text-white transition">
                  Result
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Village Soomar Malik near village Qabool Khan Gadani</li>
              <li>Mirpour Mathelo</li>
              <li>Phone: +92 304 8912423</li>
              <li>Email: essagadani036@gmail.com</li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Developer Details</h4>
            <div className="text-gray-400">
              <p className="mb-2">Developed by:</p>
              <p className="font-medium">Agentic AI & Robotic AI Engineer Muhammad Essa Gadani</p>
              <p className="text-sm mb-2">Full Stack Developer</p>
              <div className="flex space-x-4 mt-3">
                <a href="https://github.com/MuhammadEssaGadaniBaloch" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
         
          <p>&copy; {new Date().getFullYear()} Shaheed Nasrullah Academy. All rights reserved.</p>
          <p className="mt-1">
          Developed by <span className="font-medium text-white-700">Muhammad Essa Gadani</span>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
