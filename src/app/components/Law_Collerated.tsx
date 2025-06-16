'use client';
import Image from 'next/image';

const LawPartnership = () => {
  const partnershipDetails = {
    title: "Legal Partnership",
    description: "We are proud to partner with Hazoor & Hussain Ahmed Law Associates, a leading law firm providing expert legal services and guidance to our institution.",
    benefits: [
      "Access to expert legal counsel",
      "Legal awareness sessions for students", 
      "Career guidance in legal profession",
      "Internship opportunities for students",
      "Legal compliance assurance"
    ],
    services: [
      {
        name: "Legal Consultation",
        description: "Professional legal advice on educational matters",
        availability: "Weekly",
        image: "/legal_services.jpg"
      },
      {
        name: "Legal Documentation",
        description: "Assistance with institutional legal documents",
        availability: "On-demand",
        image: "/Legal Documentation.png"
      },
      {
        name: "Legal Workshops",
        description: "Educational sessions on legal awareness",
        availability: "Monthly",
        image: "/Legal Workshops.jpg"
      },
      {
        name: "Career Counseling",
        description: "Guidance for aspiring law students",
        availability: "Quarterly",
        image: "/Career Counseling.jpeg"
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="relative h-24 w-24 mx-auto mb-6">
            <Image
              src="/Law Log.jpg"
              alt="Law Firm Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{partnershipDetails.title}</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {partnershipDetails.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/Law Log.jpg"
                alt="Legal Partnership Benefits"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Partnership Benefits</h3>
            <ul className="space-y-4">
              {partnershipDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Legal Services</h3>
            <div className="space-y-6">
              {partnershipDetails.services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900">{service.name}</h4>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                  <p className="text-blue-600 mt-1">Availability: {service.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative h-72 w-full md:w-1/3 mb-6 md:mb-0 rounded-lg overflow-hidden">
              <Image
                src="/Advocate.jpg"
                alt="Law Office"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="md:ml-8 text-center md:text-left flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Our Legal Partners</h3>
              <p className="text-gray-600 mb-6">
                For legal consultations and inquiries, please reach out to Hazoor & Hussain Ahmed Law Associates
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
                  Schedule Consultation
                </button>
                <button onClick={()=>window.open("https://www.facebook.com/profile.php?id=100044803025983")} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPartnership;
