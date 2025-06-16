'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
    <br/>
    <br/>
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Journalist-Nasrullah-Gadani.jpg"
          alt="Shaheed Nasrullah Gadani Academy"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mt-20 flex flex-col justify-center items-center h-full text-white px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to<br />Shaheed Nasrullah Gadani Academy
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl drop-shadow-md">
          Empowering students with quality education, strong values, and leadership for tomorrow.
        </p>
        <Link
          href="/main/admission"
          className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
