"use client";
import React, { useState } from "react";
import { VideoResult, Videos } from "../utils/types";

export default function VideoTrailer({
  title,
  videos,
}: {
  title: string;
  videos: VideoResult[];
}) {
  const [watchTrailer, setWatchTrailer] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const windowWidth = window?.innerWidth;
  const videoWidth = windowWidth > 640 ? 560 : windowWidth - 104;
  console.log(videoWidth);
  return (
    <section id="movie-videos-section" className="w-full px-0 md:px-4">
      {!watchTrailer ? (
        <button onClick={() => setWatchTrailer(true)}>
          Watch movie trailer{videos.length > 1 && "s"}
        </button>
      ) : (
        <article
          className={`flex w-full ${
            videoWidth > 640 ? "gap-4" : "gap-1"
          } flex-row justify-center items-center min-w-fit px-0 md:px-4`}
        >
          {videos.length > 1 && (
            <div className="w-8 h-8">
              {currentVideo > 0 && (
                <button
                  onClick={() => setCurrentVideo((prev) => prev - 1)}
                  className="h-full w-full rotate-90 rounded-full border-astronaut-400 border-2 hover:bg-astronaut-400 text-astronaut-50 text-bold text-xl align-top flex justify-center items-center "
                >
                  <span className="align-top  text-bold text-lg block h-fit leading-none">
                    {"↓"}
                  </span>
                </button>
              )}
            </div>
          )}
          <iframe
            width={videoWidth}
            height={videoWidth / 1.77}
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            title={title + " Trailer"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            allowTransparency
          ></iframe>
          {videos.length > 1 && (
            <div className="w-8 h-8">
              {currentVideo < videos.length - 1 && (
                <button
                  onClick={() => setCurrentVideo((prev) => prev + 1)}
                  className="h-full w-full rotate-90 rounded-full border-astronaut-400 border-2 hover:bg-astronaut-400 text-astronaut-50 text-bold text-xl align-top flex justify-center items-center"
                >
                  <span className="align-top  text-bold text-lg block h-fit leading-none">
                    {"↑"}
                  </span>
                </button>
              )}
            </div>
          )}
        </article>
      )}
    </section>
  );
}
