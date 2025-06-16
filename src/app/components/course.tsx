'use client';
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = () => {
  const courses = [
    {
      title: "English Grammar",
      description: "Master fundamental English grammar concepts including parts of speech, sentence structure, tenses, and more.",
      image: "/Wren-_-Martin-High-School-English-Grammar.jpg",
      link: "/main/admission"
    },
    {
      title: "Mathematics", 
      description: "Learn essential math skills covering arithmetic, algebra, geometry and problem-solving techniques.",
      image: "/Basic Mathe.jpg",
      link: "/main/admission"
    },
    {
      title: "Science",
      description: "Explore basic scientific concepts through hands-on experiments and interactive learning methods.",
      image: "/basic-science.jpg", 
      link: "/main/admission"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link 
                  href={course.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

