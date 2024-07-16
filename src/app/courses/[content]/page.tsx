"use client"

import { useState } from 'react';
import type { NextPage } from 'next';
import CourseContent from '@/components/CourseContent';
import { databases,Query } from '@/lib/appwrite';
import { Video } from '@/interface/interface';


const Home: NextPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string>("Basic");

  // const handleVideoClick = (video: string) => {
  //   setSelectedCategory(video);
  // };
  // const [videos, setVideos] = useState<Video[]>([]);

  // useEffect(() => {
  //   const fetchVideos = async (category: string) => {
  //     try {
  //       const response = await databases.listDocuments(
  //         process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  //         process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
  //         []);
  //         if (response && response.documents) {
  //           const mappedVideos: Video[] = response.documents.map((doc) => ({
  //             $id: doc.$id,
  //             title: doc.title ?? '',
  //             level:doc.level??'',
  //             number:doc.number??'', // Adjust if title might be null or undefined
  //             url: doc.url ?? '', // Adjust if url might be null or undefined
  //           }));
  //           setVideos(mappedVideos);
  //         }
  //     } catch (error) {
  //       alert('Failed to fetch videos:');
  //       console.error('Failed to fetch videos:', error);
  //     }
  //   };

  //   fetchVideos(selectedCategory);
  // }, [selectedCategory]);

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const fetchVideo = async (level: string, number: number) => {
    try {
      const response = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        [
          // Query.equal('level', level),
          // Query.equal('number', number)
        ]
      );

      if (response && response.documents.length > 0) {
        const doc = response.documents[0];
        const video: Video = {
          $id: doc.$id,
          $createdAt: doc.$createdAt,
          $updatedAt: doc.$updatedAt,
          $collectionId: doc.$collectionId,
          $databaseId: doc.$databaseId,
          $permissions: doc.$permissions,
          title: doc.title,
          level: doc.level,
          number: doc.number,
          url: doc.url,
        };
        console.log(video);
        setSelectedVideo(video);
      } else {
        setSelectedVideo(null);
      }
    } catch (error) {
      console.error('Failed to fetch video:', error);
      setSelectedVideo(null);
    }
  };

  console.log(selectedVideo?.url);


  return (
    <div className="min-h-screen bg-black py-12 pt-36 flex ">
      <CourseContent onSelectVideo={fetchVideo} />
      <div className="flex flex-col flex-1 p-4">
        {selectedVideo ? (
          <div key={selectedVideo.$id} className="my-4">
            <h3 className="text-4xl font-bold text-white mb-10">{selectedVideo.title} - {selectedVideo.number}</h3>
            <div className="aspect-w-16 aspect-h-9 bg-green-50">
              {/* <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <video controls className="w-full h-auto">
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <video  controls preload="none">
              <source src={selectedVideo.url} type="video/mp4" />
              <track
                src={selectedVideo.url}
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video> */}
            </div>
          </div>
        ) : (
          <p className='flex items-end ml-10 text-white'>Select a video to view</p>
        )}
      </div>
    </div>
  );
}

export default Home;
