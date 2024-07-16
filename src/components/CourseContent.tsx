"use client";

import React, { useState } from "react";
interface NavbarProps {
  onSelectVideo: (level: string, number: number) => void;
}

  const CourseContent: React.FC<NavbarProps> = ({ onSelectVideo }) => {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const toggleTab = (tab: string) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  const buttonCount = 3;
  const buttons = Array.from({ length: buttonCount }, (_, index) => index + 1);

  // const handleVideoClick = (video: string) => {
  //   onVideoClick(video);
  // };

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased ">
      <div className="flex flex-col w-64 text-white h-screen p-4 overflow-y-auto">
        <div className="flex flex-col flex-1 space-y-4">
          <div className="relative">
            <button
              className="py-4 px-4 my-4 w-full  hover:bg-gray-900 "
              onClick={() => toggleTab("basic")}
            >
              Basic
            </button>
            {openTab === "basic" && (
              <div className="flex flex-col  space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full ">
                {buttons.map((buttonIndex) => (
                  <button key={buttonIndex} onClick={() => onSelectVideo(openTab, buttonIndex)} className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video {buttonIndex}
                </button>
                ))}
                </div>
                )}
                {/* <button onClick={() => onSelectVideo(openTab, 1)} className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video 1
                </button>
                <button className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video 2
                </button>
                <button className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video 3
                </button>
                <button className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video 4
                </button>
                <button className="py-1 px-4 w-full  hover:bg-gray-600">
                  Video 5
                </button> */}
          </div>

          <div className="relative">
            <button
              className="py-4 px-4 my-4  w-full  hover:bg-gray-900"
              onClick={() => toggleTab("intermediate")}
            >
              Intermediate
            </button>
            {openTab === "intermediate" && (
              <div className="flex flex-col  space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full ">
              {buttons.map((buttonIndex) => (
                <button key={buttonIndex} onClick={() => onSelectVideo(openTab, buttonIndex)} className="py-1 px-4 w-full  hover:bg-gray-600">
                Video {buttonIndex}
              </button>
              ))}
              </div>
              // <div className="flex flex-col  space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full ">
              //   <button className="py-1 px-4 w-full  hover:bg-gray-600">
              //     Video 1
              //   </button>
              //   <button className="py-1 px-4 w-full  hover:bg-gray-600">
              //     Video 2
              //   </button>
              //   <button className="py-1 px-4 w-full  hover:bg-gray-600">
              //     Video 3
              //   </button>
              //   <button className="py-1 px-4 w-full  hover:bg-gray-600">
              //     Video 4
              //   </button>
              //   <button className="py-1 px-4 w-full  hover:bg-gray-600">
              //     Video 5
              //   </button>
              // </div>
            )}
          </div>

          <div className="relative">
            <button
              className="py-4 px-4 my-4  w-full hover:bg-gray-900"
              onClick={() => toggleTab("advance")}
            >
              Advance
            </button>
            {openTab === "advance" && (
              <div className="flex flex-col  space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full ">
              {buttons.map((buttonIndex) => (
                <button key={buttonIndex} onClick={() => onSelectVideo(openTab, buttonIndex)} className="py-1 px-4 w-full  hover:bg-gray-600">
                Video {buttonIndex}
              </button>
              ))}
              </div>
              // <div className="flex flex-col space-y-2 mt-2 py-4 px-4 pl-16 w-full ">
              //   <button className="py-1 px-4 w-full text-center hover:bg-gray-600">
              //     Video 1
              //   </button>
              //   <button className="py-1 px-4 my-4 w-full  hover:bg-gray-600">
              //     Video 2
              //   </button>
              //   <button className="py-1 px-4 mt-4 w-full  hover:bg-gray-600">
              //     Video 3
              //   </button>
              //   <button className="py-1 px-4 mt-4 w-full  hover:bg-gray-600">
              //     Video 4
              //   </button>
              //   <button className="py-1 px-4 mt-4 w-full  hover:bg-gray-600">
              //     Video 5
              //   </button>
              // </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
