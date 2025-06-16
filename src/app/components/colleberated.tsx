'use client';
import Image from 'next/image';

const Collaboration = () => {
  const collaborationDetails = {
    title: "Our Collaboration with Quick Tech Institute",
    description: "We are proud to partner with Quick Tech Institute of Information Technology to provide cutting-edge technical education and career opportunities to our students.",
    benefits: [
      "Access to modern IT labs and equipment",
      "Industry-relevant curriculum", 
      "Expert faculty from IT sector",
      "Internship opportunities",
      "Job placement assistance"
    ],
    programs: [
      {
        name: "Diploma in Information Technology",
        duration: "12 months",
        level: "Beginner to Advanced",
        image: "/DIT.jpg"
      },
      {
        name: " Certificate inInformation Technology",
        duration: "6 months", 
        level: "Beginner",
        image: "/CIT.jpg"
      },
      {
        name: "Office Automation",
        duration: "3 months",
        level: "Beginner",
        image: "/OT.jpg"
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{collaborationDetails.title}</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {collaborationDetails.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/Quick.jpeg"
                alt="Collaboration Benefits"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {collaborationDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Programs */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Featured Programs</h3>
            <div className="space-y-6">
              {collaborationDetails.programs.map((program, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-medium text-gray-900">{program.name}</h4>
                  <div className="mt-2 flex justify-between text-gray-600">
                    <span>Duration: {program.duration}</span>
                    <span>Level: {program.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action with Image */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="relative h-72 w-full md:w-1/3 mb-6 md:mb-0 rounded-lg overflow-hidden">
              <Image
                src="/Sanaullah.jpg"
                alt="Call to Action"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:ml-8 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Start Your Tech Journey?</h3>
              <button onClick={()=>window.open("https://www.facebook.com/profile.php?id=100085183854087")} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
