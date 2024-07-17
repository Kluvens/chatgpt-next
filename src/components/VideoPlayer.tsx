"use client"; // Add this directive at the top

import React, { useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  return (
    <div className="h-full w-full">
      <div
        className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
        data-caption-height="0"
        data-caption-open="false"
      >
        <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
          <div
            tabIndex={0}
            className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-1/1"
          >
            <video
              playsInline
              muted
              autoPlay
              loop
              ref={videoRef}
              onPause={() => setIsPaused(true)}
              onPlay={() => setIsPaused(false)}
              className="aspect-1/1 md:aspect-1/1 lg:aspect-1/1 min-w-full min-h-full absolute left-0 top-0 w-full h-full object-cover"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="top-0 items-center absolute left-0 right-0 p-1 md:p-2 flex justify-between gap-1 text-gray-0 text-caption z-[1] transition-opacity duration-normal">
              <div className="justify-start items-center flex flex-row-reverse w-full gap-1">
                {isPaused ? (
                  <button
                    type="button"
                    className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                    aria-label="Play video"
                    onClick={handlePlayClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      viewBox="0 0 11 14"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M10.174 7.844a1 1 0 0 0 0-1.688L2.037.978A1 1 0 0 0 .5 1.822v10.356a1 1 0 0 0 1.537.844l8.137-5.178Z"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                    aria-label="Pause video"
                    onClick={handlePauseClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      viewBox="0 0 10 12"
                      fill="none"
                    >
                      <rect
                        width="3"
                        height="11"
                        y=".5"
                        fill="currentColor"
                        rx="1.5"
                      ></rect>
                      <rect
                        width="3"
                        height="11"
                        x="7"
                        y=".5"
                        fill="currentColor"
                        rx="1.5"
                      ></rect>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="absolute inset-0 filter blur-[78.5px] bg-[rgba(0,0,0,0.30)] before:absolute before:inset-0 before:bg-[rgba(53,66,99,0.30)] transition-opacity duration-normal bottom-[80%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
