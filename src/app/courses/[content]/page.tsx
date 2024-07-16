"use client"

import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import CourseContent from '@/components/CourseContent';

const Home: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (video: string) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-black py-12 pt-36 flex ">
      <CourseContent  onVideoClick={handleVideoClick}/>
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold">Welcome to the Video Platform</h1>
        {selectedVideo && (
          <div className="mt-8">
            <h2 className="text-2xl mb-4">guitar</h2>
            <Image
              src="/courses/guitar.jpg"
              alt={selectedVideo}
              className="w-full h-auto object-cover"
              width={500}
              height={4}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
