'use client';
import Image from 'next/image';
import { useState } from 'react';

const TeacherHistory = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Our Director</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Learn about the visionary leader behind Shaheed Nasrullah Gadani Academy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/Director.jpg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mir Abdul Manan Gadani</h3>
            <p className="text-gray-600 italic mb-6">Director, Shaheed Nasrullah Gadani Academy</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Journey</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Educational Background</h4>
                <p className="text-gray-600">
                  {showMore ? (
                    <>
                      Mr. Abdul Manan Gadani is currently serving as Primary School Teacher (BPS-14) in School Education &amp; Literacy Department, Government of Sindh, in District Ghotki @ Mirpur Mathelo Division Sukkur. Sir Abdul Manan has a vast academic and administrative experience under various capacities in teaching students of different classes. Sir Abdul Manan has completed his Bachelors in Science from Shah Abdul Latif University (SALU), Khairpur in year 2014. Afterwards, in the year 2016, he has been appointed as Police Constable (BPS-7) in Department of Sindh Police, after service for about 7 years in Police Department as Data entry Operator, he has qualified written test for Primary School Teacher (PST BPS-14) and Junior Elementary School Teacher (JEST BPS-14) conducted by IBA, Sukkur in year 2021, thereafter he has been appointed as PST in School Education &amp; Literacy Department, Government of Sindh, now aspirant for JEST-BPS-14 too. 
                      <br /><br />
                      Sir Abdul Manan is also doing Masters in Islamic Culture from University of Shah Abdul Latif, (SALU), Khairpur. He has a vast experience of serving as Teacher and Tutor since year 2014 till today of different subjects including English, Mathematics, General Science, Islamic Studies and Sindhi, he is also a fluent speaker of English, Urdu, Balochi and Sindhi Languages. 
                      <br /><br />
                      Sir Abdul Manan is now Director of his own renowned academy titled as &quot;Shaheed Nasrullah Gadani,(SNG) Academy&quot; at District Ghotki where dozens of orphan and poor background students are learning free of cost on need based scholarship.
                      <br /><br />
                      This academy is a great tribute to Martyred Journalist Nasrullah Gadani, who was brutally murdered due to just and fair journalism who raised his voice against the gangs, mafias, white collar criminals and so called feudals; in favour of innocents, lower class community and for common man beyond the cast, creed, color and religion. May his soul rest in peace.
                    </>
                  ) : (
                    <>
                      Mr. Abdul Manan Gadani is currently serving as Primary School Teacher (BPS-14) in School Education &amp; Literacy Department, Government of Sindh, in District Ghotki @ Mirpur Mathelo Division Sukkur. Sir Abdul Manan has a vast academic and administrative experience under various capacities in teaching students of different classes...
                    </>
                  )}
                  <button 
                    onClick={toggleShowMore}
                    className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                  >
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Vision &amp; Mission</h4>
                <p className="text-gray-600">
                  His vision is to provide quality education to the youth of Gadani and surrounding areas, empowering them with knowledge and skills needed for the modern world while preserving cultural values.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Achievements</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Established first digital library in Gadani</li>
                  <li>Introduced modern teaching methodologies</li>
                  <li>Developed partnerships with technical institutes</li>
                  <li>Created scholarship programs for underprivileged students</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">Future Goals</h4>
                <p className="text-gray-600">
                  continues to work towards expanding educational opportunities, implementing innovative teaching methods, and creating a sustainable model for quality education in coastal areas of Balochistan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Message from the Director</h3>
            <p className="text-gray-600">
              &quot;Teaching is not just a profession, it&apos;s a passion.&quot; - Our dedicated teachers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHistory;
