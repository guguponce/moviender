"use client";
import React, { useContext, useEffect } from "react";
import { getRatings, getStreamings } from "../api";
import { LocationData, Streaming, StreamingResults } from "../utils/types";
import { LanguageContext } from "../providers/LanguageProvider";
import { platform } from "os";
import { countriesCodes, tmbdImagesPrefix } from "../utils/constants";

export default function Streaming({ movieID }: { movieID: string }) {
  const [streamings, setStreamings] = React.useState<LocationData | null>(null);
  const { userLocation } = useContext(LanguageContext);

  useEffect(() => {
    if (userLocation) {
      getStreamings(movieID).then((response) => {
        if (response) setStreamings(response.results[userLocation]);
      });
    }
  }, [movieID, userLocation]);

  if (!streamings) return <div>loading...</div>;
  return (
    <section className="">
      <h3>
        In {countriesCodes[userLocation][1]}, you can get in different ways:
      </h3>
      <div
        id="flatrate"
        className="relative border-2 p-1 pt-3 border-astronaut-200 rounded-md my-4"
      >
        <h4 className="absolute -translate-y-[1.5rem] translate-x-4 bg-astronaut-950 px-3">
          Stream
        </h4>
        <div className="flex">
          {[...streamings.flatrate]
            .sort((a, b) => a.display_priority - b.display_priority)
            .map((platform) => (
              <div
                className="w-16 p-2 flex flex-col items-center"
                key={platform.provider_id}
              >
                <img
                  title={platform.provider_name}
                  className="w-12 h-12"
                  src={tmbdImagesPrefix + "original" + platform.logo_path}
                  alt={platform.provider_name}
                />
              </div>
            ))}
        </div>
      </div>

      <div
        id="rent"
        className="relative border-2 p-1 pt-3 border-astronaut-200 rounded-md my-4"
      >
        <h4 className="absolute -translate-y-[1.5rem] translate-x-4 bg-astronaut-950 px-3">
          Rent
        </h4>
        <div className="flex">
          {[...streamings.rent]
            .sort((a, b) => a.display_priority - b.display_priority)
            .map((platform) => (
              <div
                className="w-16 p-2 flex flex-col items-center"
                key={platform.provider_id}
              >
                <img
                  title={platform.provider_name}
                  src={tmbdImagesPrefix + "w45" + platform.logo_path}
                  alt={platform.provider_name}
                />
              </div>
            ))}
        </div>
      </div>

      <div
        id="buy"
        className="relative border-2 p-1 pt-3 border-astronaut-200 rounded-md my-4"
      >
        <h4 className="absolute -translate-y-[1.5rem] translate-x-4 bg-astronaut-950 px-3">
          Buy
        </h4>
        <div className="flex">
          {[...streamings.buy]
            .sort((a, b) => a.display_priority - b.display_priority)
            .map((platform) => (
              <div
                className="w-16 p-2 flex flex-col items-center"
                key={platform.provider_id}
              >
                <img
                  title={platform.provider_name}
                  className="w-12 h-12"
                  src={tmbdImagesPrefix + "w45" + platform.logo_path}
                  alt={platform.provider_name}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
