"use client"

import { useState } from "react";

const lectures = [
  { 
    id: 1, 
    title: "INTRODUCTION OF MY CHANNEL, MYSELF & MY TEAM.", 
    youtubeId: "3-toT3_mbDU"
  },
  { 
    id: 2, 
    title: "Lecture #01 - ENGLISH ALPHABET", 
    youtubeId: "SrklVeRV3yc"
  },
  { 
    id: 3, 
    title: "Lecture #02 - Letter | Word | Of English", 
    youtubeId: "AU1Opsr8kzU"
  },
  { 
    id: 4, 
    title: "Lecture #03 - SENTENCE||ENGLISH", 
    youtubeId: "7InNh-LoJv4"
  },
  { 
    id: 5, 
    title: "Lecture #04 - SENTENCE|SUBJECT|OBJECT|VERB & ITS FORMS| OF ENGLISH|", 
    youtubeId: "KDH9tBgkMbs"
  },
  { 
    id: 6, 
    title: "Lecture #05 - Types of TIME| first form of VERB (V1)|", 
    youtubeId: "bTqQuurdo_M"
  },
];

export default function OnlineLectures() {
  const [search, setSearch] = useState("");

  const filteredLectures = lectures.filter((lecture) =>
    lecture.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Online Video Lectures</h1>
        <input
          type="text"
          placeholder="Search lectures..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLectures.map((lecture) => (
            <div key={lecture.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">{lecture.title}</h2>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${lecture.youtubeId}`}
                  title={lecture.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
