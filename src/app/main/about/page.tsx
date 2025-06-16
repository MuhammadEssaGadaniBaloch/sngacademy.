"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | Shaheed Nasrullah Gadani Academy</title>
        <meta
          name="description"
          content="Learn about our mission, faculty, and tribute to Shaheed Nasrullah Gadani."
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl animate-fade-in-delay">
            Discover our inspiring faculty and the enduring legacy of Shaheed Nasrullah Gadani.
          </p>
        </div>
      </section>

      {/* Tribute Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-6">
            <Image
              src="/Journalist-Nasrullah-Gadani.jpg"
              alt="Shaheed Nasrullah Gadani"
              className="rounded-lg object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              width={500}
              height={300}
              priority
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Tribute to Shaheed Nasrullah Gadani
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg">
              Shaheed Nasrullah Gadani was a visionary leader whose dedication and sacrifice continue
              to inspire our community. His commitment to education, social justice, and community
              service has left an indelible mark on our institution. Today, his legacy guides our
              pursuit of excellence and our commitment to nurturing future leaders.
            </p>
          </div>
        </div>
      </section>

     {/* Faculty Members Section */}
<section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
    Meet Our Faculty
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Faculty Card 1 */}
    <div className="group relative bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-64 w-full relative">
        <Image
          src="/Director.jpg"
          alt="Mr Abdul Manan Gadani"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Mr. Abdul Manan Gadani</h3>
        <p className={`mt-2 text-gray-600 text-sm leading-relaxed ${!showMore ? 'line-clamp-5' : ''}`}>
          Mr. Abdul Manan Gadani is currently serving as Primary School Teacher (BPS-14) in School Education & Literacy Department, Government of Sindh, in District Ghotki @ Mirpur Mathelo Division Sukkur. Sir Abdul Manan has a vast academic and administrative experience under various capacities in teaching students of different classes. Sir Abdul Manan has completed his Bachelors in Science from Shah Abdul Latif University (SALU), Khairpur in year 2014. Afterwards, in the year 2016, he has been appointed as Police Constable (BPS-7) in Department of Sindh Police, after service for about 7 years in Police Department as Data entry Operator, he has qualified written test for Primary School Teacher (PST BPS-14) and Junior Elementary School Teacher (JEST BPS-14) conducted by IBA, Sukkur in year 2021, thereafter he has been appointed as PST in School Education & Literacy Department, Government of Sindh, now aspirant for JEST-BPS-14 too.
          Sir Abdul Manan is also doing Masters in Islamic Culture from University of Shah Abdul Latif, (SALU), Khairpur. He has a vast experience of serving as Teacher and Tutor since year 2014 till today of different subjects including English, Mathematics, General Science, Islamic Studies and Sindhi, he is also a fluent speaker of English, Urdu, Balochi and Sindhi Languages.
          Sir Abdul Manan is now Director of his own renowned academy titled as "Shaheed Nasrullah Gadani,(SNG) Academy" at District Ghotki where dozens of orphan and poor background students are learning free of cost on need-based scholarship.
          This academy is a great tribute to Martyred Journalist Nasrullah Gadani, who was brutally murdered due to just and fair journalism who raised his voice against the gangs, mafias, white collar criminals and so-called feudals; in favor of innocents, lower class community and for common man beyond the cast, creed, color and religion. May his soul rest in peace.
        </p>
        <button 
          onClick={() => setShowMore(!showMore)} 
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
        >
          {showMore ? (
            <>
              <span>Show Less</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </>
          ) : (
            <>
              <span>See More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>

    {/* Faculty Card 2 */}
    <div className="group relative bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-64 w-full relative">
        <Image
          src="/Profile.jpg"
          alt="Mr Muhammad Essa Gadani"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Eng. Mir Muhammad Essa Gadani</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-5">
          As the administrator of SNG Academy, Mr. Muhammad Essa Gadani ensures smooth operations and supports the academy’s mission to provide accessible education. His leadership and vision are pivotal to the institution's continued growth.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.6s ease-out 0.2s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default About;
