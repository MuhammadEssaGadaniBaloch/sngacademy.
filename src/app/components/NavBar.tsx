'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Avatar from './avatar';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/main', label: 'Home' },
    { href: '/main/admission', label: 'Admissions' },
    { href: '/main/result', label: 'Results' },
    { href: '/main/lectures', label: 'Lectures' },
    { href: '/main/about', label: 'About' },
    { href: '/main/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo1.jpg"
                alt="School Logo"
                width={100}
                height={100}
                className="w-auto h-14"
              />
            </Link>
            <div className="ml-4 hidden md:block">
              <h1 className="text-md font-bold text-gray-900">Shaheed Nasrullah Gadani Academy</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-2 py-2 rounded-md text-md font-medium ${
                    pathname === href ? 'text-blue-800' : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="hidden md:block">
                <Avatar/>
              </div>
            </div>
          </div>

          {/* Mobile menu button and avatar */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="block md:hidden">
              <Avatar/>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
            <div className="h-full flex flex-col">
              <div className="px-4 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu();
                    }}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <nav className="px-2 py-4 space-y-1">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu();
                      }}
                      className={`flex items-center px-4 py-3 text-base font-medium rounded-lg ${
                        pathname === href 
                          ? 'bg-blue-50 text-blue-800' 
                          : 'text-gray-900 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
