"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { FC } from "react";

interface Slide {
  url: string;
  alt: string;
  caption: string;
}

const Slider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    { url: "/Village Khud Bux Gadani Compus.jpg", alt: "Village Khud Bux Gadani Campus", caption: "Village Khud Bux Gadani Campus" },
    { url: "/Village Ghul  Baig Gadani Compus.jpg", alt: "Village Ghul  Baig Gadani Campus", caption: "Village Ghul  Baig Gadani Campus" },
    { url: "/Well-Trained Staff.jpg", alt: "Well-Trained Staff", caption: "Well-Trained Staff" },
    { url: "/Monthly Test1.jpg", alt: "Monthly Tests", caption: "Monthly Test" },
    { url: "/Monthly Test2.jpg", alt: "Monthly Tests", caption: "Monthly Test" },
    { url: "/Result1.jpg", alt: "Result", caption: "Result Announcement Ceremony" },
    { url: "/result2.jpg", alt: "Result", caption: "Result Announcement Ceremony" },
    { url: "/Result3.jpg", alt: "Result", caption: "Result Announcement Ceremony" },
    { url: "/result4.jpg", alt: "Result", caption: "Result Announcement Ceremony" },
    { url: "/result5.jpg", alt: "Result", caption: "Result Announcement Ceremony" },
    { url: "/Monthly Test3.jpg", alt: "Monthly Tests", caption: "Monthly Test" },
    { url: "/Academy Achivements.jpg", alt: "Achievements by Academy's Students", caption: "Achievements by Academy's Student" },
    { url: "/Academy Achivements1.jpg", alt: "Achievements by Academy's Students", caption: "Achievements by Academy's Student" },
    { url: "/students1.jpg", alt: "Students in Class", caption: "Interactive Learning Environment" },
    { url: "/students.jpg", alt: "Students Activities", caption: "Academy's Students during Result Announcement" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prevSlide) => 
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 5000);
  
    return () => clearInterval(timer);
  }, [slides.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => 
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleImageError = (url: string) => {
    setImageError((prev) => ({ ...prev, [url]: true }));
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {!imageError[slide.url] ? (
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={index === 0}
                onError={() => handleImageError(slide.url)}
                quality={90}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
              <p className="text-lg md:text-xl">{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20 transition-opacity duration-300"
        aria-label="Previous slide"
        disabled={isTransitioning}
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20 transition-opacity duration-300"
        aria-label="Next slide"
        disabled={isTransitioning}
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
