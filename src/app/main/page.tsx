import { Suspense } from "react";
import Collaboration from "../components/colleberated";

import CourseCard from "../components/course";
import HeroSection from "../components/heroSection";
import LawPartnership from "../components/Law_Collerated";
import Silder from "../components/Silder";
import TeacherHistory from "../components/TecherHistory";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Suspense fallback={
        <div className="relative h-screen">
          <div className="animate-pulse bg-gray-200 h-screen w-full"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-6"/>
            <div className="h-8 bg-gray-300 rounded w-2/3 mb-8"/> 
            <div className="h-10 bg-gray-300 rounded w-40"/>
          </div>
        </div>
      }>
   <HeroSection/>
   </Suspense>

   
   <Suspense fallback={
        <div className="relative w-full h-[600px] overflow-hidden">
          <div className="animate-pulse bg-gray-200 h-full w-full"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-6"/>
            <div className="h-8 bg-gray-300 rounded w-2/3 mb-8"/>
            <div className="flex space-x-2">
              <div className="h-3 w-3 bg-gray-300 rounded-full"/>
              <div className="h-3 w-3 bg-gray-300 rounded-full"/>
              <div className="h-3 w-3 bg-gray-300 rounded-full"/>
              <div className="h-3 w-3 bg-gray-300 rounded-full"/>
            </div>
          </div>
        </div>
      }>
      
   <Silder/>
   </Suspense>
   
   <br/>
   <Suspense fallback={
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 bg-gray-300 rounded w-3/4 mb-6"/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <div className="animate-pulse bg-gray-200 h-full w-full"/>
                </div>
                <div className="p-6">
                  <div className="h-8 bg-gray-300 rounded w-2/3 mb-4"/>
                  <div className="h-16 bg-gray-200 rounded w-full mb-4"/>
                  <div className="h-10 bg-gray-300 rounded w-32"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   }>
  
</Suspense>

   <CourseCard/>
   <br/>
   <TeacherHistory/>
   
   <br/>
   <Suspense fallback={
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-300 rounded w-3/4"/>
            <div className="mt-4 h-16 bg-gray-200 rounded w-full max-w-3xl mx-auto"/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                <div className="animate-pulse bg-gray-200 h-full w-full"/>
              </div>
              <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"/>
              <div className="space-y-4">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3"/>
                    <div className="h-4 bg-gray-200 rounded w-3/4"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"/>
              <div className="space-y-6">
                {[1,2].map((_, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <div className="animate-pulse bg-gray-200 h-full w-full"/>
                    </div>
                    <div className="h-6 bg-gray-300 rounded w-1/2"/>
                    <div className="mt-2 flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-1/4"/>
                      <div className="h-4 bg-gray-200 rounded w-1/4"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
   }>
   <Collaboration/>
   </Suspense>
   <br/>
   <Suspense fallback={
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative h-24 w-24 mx-auto mb-6">
              <div className="animate-pulse bg-gray-200 h-full w-full rounded-full"/>
            </div>
            <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto"/>
            <div className="mt-4 h-16 bg-gray-200 rounded w-full max-w-3xl mx-auto"/>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <div className="animate-pulse bg-gray-200 h-full w-full"/>
              </div>
              <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"/>
              <div className="space-y-4">
                {[1,2,3,4,5].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full mr-3"/>
                    <div className="h-4 bg-gray-200 rounded w-3/4"/>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="h-8 bg-gray-300 rounded w-2/3 mb-6"/>
              <div className="space-y-6">
                {[1,2,3,4].map((_, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <div className="animate-pulse bg-gray-200 h-full w-full"/>
                    </div>
                    <div className="h-6 bg-gray-300 rounded w-1/2"/>
                    <div className="mt-2">
                      <div className="h-4 bg-gray-200 rounded w-full"/>
                      <div className="h-4 mt-2 bg-gray-200 rounded w-1/4"/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="relative h-48 w-full md:w-1/3 mb-6 md:mb-0">
                <div className="animate-pulse bg-gray-200 h-full w-full rounded-lg"/>
              </div>
              <div className="md:ml-8 text-center md:text-left flex-1">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"/>
                <div className="h-16 bg-gray-200 rounded w-full mb-6"/>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="h-12 bg-gray-300 rounded w-full sm:w-40"/>
                  <div className="h-12 bg-gray-200 rounded w-full sm:w-40"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   }>
   <LawPartnership/>
   </Suspense>
  <br/>
  <Suspense fallback={
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="h-10 bg-gray-300 rounded w-1/3 mx-auto mb-4"/>
          <div className="h-16 bg-gray-200 rounded w-2/3 mx-auto"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"/>
            
            <div className="space-y-6">
              {[1,2,3].map((_, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 bg-gray-300 rounded"/>
                  </div>
                  <div className="ml-4">
                    <div className="h-5 bg-gray-300 rounded w-1/4 mb-2"/>
                    <div className="h-4 bg-gray-200 rounded w-3/4"/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            {[1,2,3].map((_, i) => (
              <div key={i} className="mb-6">
                <div className="h-5 bg-gray-300 rounded w-1/4 mb-2"/>
                <div className="h-10 bg-gray-200 rounded w-full"/>
              </div>
            ))}
            <div className="h-10 bg-gray-300 rounded w-full"/>
          </div>
        </div>
      </div>
    </div>
  }>
    <Contact/>
  </Suspense>
   </div>
  );
}
