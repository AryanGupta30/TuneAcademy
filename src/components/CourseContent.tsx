"use client";

import React, { useState, useEffect, useRef } from "react";

interface NavbarProps {
  onSelectVideo: (level: string, number: number) => void;
}

const CourseContent: React.FC<NavbarProps> = ({ onSelectVideo }) => {
  const [openTab, setOpenTab] = useState<string | null>("basic");
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setOpenTab("basic");
      setSelectedVideo(1);
      onSelectVideo("basic", 1);
      firstRender.current = false;
    }
  }, [onSelectVideo]);

  const toggleTab = (tab: string) => {
    setOpenTab(openTab === tab ? null : tab);
    setSelectedVideo(null);
  };

  const selectVideo = (level: string, number: number) => {
    setSelectedVideo(number);
    onSelectVideo(level, number);
  };

  const buttonCount = 3;
  const buttons = Array.from({ length: buttonCount }, (_, index) => index + 1);

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased">
      <div className="flex flex-col w-64 text-white h-screen p-4 overflow-y-auto">
        <div className="flex flex-col flex-1 space-y-4">
          <div className="relative">
            <button
              className={`py-4 px-4 my-4 w-full hover:bg-gray-900 ${openTab === "basic" ? "bg-slate-800" : ""}`}
              onClick={() => toggleTab("basic")}
            >
              Basic
            </button>
            {openTab === "basic" && (
              <div className="flex flex-col space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full">
                {buttons.map((buttonIndex) => (
                  <button
                    key={buttonIndex}
                    onClick={() => selectVideo(openTab, buttonIndex)}
                    className={`py-1 px-4 w-full hover:bg-gray-600 ${selectedVideo === buttonIndex ? "bg-slate-800" : ""}`}
                  >
                    Video {buttonIndex}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className={`py-4 px-4 my-4 w-full hover:bg-gray-900 ${openTab === "intermediate" ? "bg-slate-800" : ""}`}
              onClick={() => toggleTab("intermediate")}
            >
              Intermediate
            </button>
            {openTab === "intermediate" && (
              <div className="flex flex-col space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full">
                {buttons.map((buttonIndex) => (
                  <button
                    key={buttonIndex}
                    onClick={() => selectVideo(openTab, buttonIndex)}
                    className={`py-1 px-4 w-full hover:bg-gray-600 ${selectedVideo === buttonIndex ? "bg-slate-800" : ""}`}
                  >
                    Video {buttonIndex}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className={`py-4 px-4 my-4 w-full hover:bg-gray-900 ${openTab === "advance" ? "bg-slate-800" : ""}`}
              onClick={() => toggleTab("advance")}
            >
              Advance
            </button>
            {openTab === "advance" && (
              <div className="flex flex-col space-y-2 mt-2 py-4 px-4 my-4 pl-16 w-full">
                {buttons.map((buttonIndex) => (
                  <button
                    key={buttonIndex}
                    onClick={() => selectVideo(openTab, buttonIndex)}
                    className={`py-1 px-4 w-full hover:bg-gray-600 ${selectedVideo === buttonIndex ? "bg-slate-800" : ""}`}
                  >
                    Video {buttonIndex}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
