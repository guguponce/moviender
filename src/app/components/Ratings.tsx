"use client";

import React, { useEffect } from "react";
import { getRatings } from "../api";
import { Rating } from "../utils/types";
import imdbIcon from "../public/imdb.svg";
import metacriticIcon from "../public/metacritic.svg";
import rottenIcon from "../public/rotten.svg";

export default function Ratings({ id }: { id: string }) {
  const [ratings, setRatings] = React.useState<null | Rating[]>(null);
  useEffect(() => {
    getRatings(id).then((response) => {
      setRatings(response);
    });
  }, [id]);
  return (
    <div className="flex gap-4">
      {ratings?.map((rating) => (
        <div className="flex gap-2" key={rating.Source + rating.Value}>
          <div className="w-6 h-6 flex justify-center items-center">
            {rating.Source === "Rotten Tomatoes" ? (
              <svg
                id="svg2"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 143.75 142.5"
                width="16"
                version="1.1"
              >
                <g id="layer1">
                  <path
                    id="path3495"
                    d="m36.984 2.8681-8.605 7.0948 11.704 10.114c-14.776-5.554-27.219 7.873-28.176 13.146 7.782-1.816 12.59-2.372 18.801-1.882-39.592 26.053-27.984 73.919-8.065 90.479 32.519 25.93 77.417 18 100.69-7.4 33.93-36.423 9.94-107.9-58.269-96.004 0.597-6.577 3.558-8.4485 6.989-9.0035-5.004-8.3923-20.631-4.129-25.618 7.7215-0.151 0.358-9.448-14.266-9.448-14.266z"
                    fill="#f93208"
                  />
                </g>
                <path
                  id="path3509"
                  d="m122.25 126.31v4.6562h1.375v-4.6562l1.5-0.008v-1.3125l-4.4141-0.0195 0.00005 1.332z"
                  fill="#f93208"
                />
                <g id="g3714">
                  <path
                    id="path3511"
                    d="m127.48 125.02-1.2813 0.0156v5.9688h1.3594v-3.25l1.7656 2.4688v-2.4062zm3.6992 0.008-1.8555 2.793-0.008 2.4062 1.7852-2.4648v3.25h1.3594v-5.9688z"
                    fill="#f93208"
                  />
                </g>
                <g id="layer2">
                  <g
                    id="g3580"
                    fill="#fff"
                    transform="matrix(.33241 0 0 .33241 106.85 43.6)"
                  >
                    <path
                      id="path3580"
                      d="m-58.803 89.458-22.078 0.2659h-23.141v-24.742-24.742l69.978 0.32551c38.487 0.17903 71.638-0.14101 71.638-0.14101l0.46355 49.256-23.943-0.39885h-22.48v63.696 63.962h-24.685l-25.748-0.2659c-0.000293-44.258-0.0036-81.844-0.0036-127.22z"
                    />
                    <path
                      id="path3619"
                      d="m-220.7 175.11-13.892-0.1806v-87.709-87.709h41.908c45.203 0 49.02 0.21732 60.054 3.419 17.906 5.1956 31.575 16.455 39.108 32.213 3.6631 7.6624 5.0989 13.79 5.4749 23.367 0.84948 21.642-8.3313 40.459-24.584 50.391-4.8682 2.9749-5.0947 3.2102-4.3022 4.4697 2.1387 3.3989 35.93 61.595 35.93 61.881 0 0.17761-12.896 0.32291-28.657 0.32291h-28.657l-16.634-28.013c-9.1486-15.407-16.986-28.495-17.416-29.082-0.58267-0.79684-2.0664-1.1577-5.8174-1.4148l-5.0353-0.34512 0.31448 29.427 0.31449 29.427-12.108-0.14346c-6.6594-0.0788-18.36-0.22479-26-0.32411zm61.863-97.862c11.726-2.467 17.722-8.0859 18.379-17.22 0.45852-6.387-1.0591-10.745-5.1178-14.697-5.3791-5.2375-12.887-7.0524-29.328-7.0889l-8.6782-0.01924 0.40567 5.715c0.22313 3.1432 0.40566 12.317 0.40566 20.387v14.672l9.8334-0.42512c5.4084-0.23383 11.754-0.82913 14.101-1.3229z"
                    />
                  </g>
                </g>
              </svg>
            ) : rating.Source === "Metacritic" ? (
              <div
                className="w-8 h-8"
                style={{
                  backgroundImage: 'url("/metacritic.png")',
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ) : (
              rating.Source === "Internet Movie Database" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="IMDb"
                  role="img"
                  viewBox="0 0 512 512"
                  width="32px"
                  height="32px"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <rect width="512" height="512" rx="15%" fill="#f5c518" />

                    <path d="M104 328V184H64v144zM189 184l-9 67-5-36-5-31h-50v144h34v-95l14 95h25l13-97v97h34V184zM256 328V184h62c15 0 26 11 26 25v94c0 14-11 25-26 25zm47-118l-9-1v94c5 0 9-1 10-3 2-2 2-8 2-18v-56-12l-3-4zM419 220h3c14 0 26 11 26 25v58c0 14-12 25-26 25h-3c-8 0-16-4-21-11l-2 9h-36V184h38v46c5-6 13-10 21-10zm-8 70v-34l-1-11c-1-2-4-3-6-3s-5 1-6 3v57c1 2 4 3 6 3s6-1 6-3l1-12z" />
                  </g>
                </svg>
              )
            )}
          </div>
          <p>{rating.Value}</p>
        </div>
      ))}
    </div>
  );
}
