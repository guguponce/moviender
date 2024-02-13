import React from "react";
import { getMovieDetails } from "../../api";
import { languagesCodes, tmbdImagesPrefix } from "../../utils/constants";
import ResponsiveImage from "../../components/ResponsiveImage";
import VideoTrailer from "../../components/VideoTrailer";
import Ratings from "../../components/Ratings";
import Streaming from "../../components/Streaming";
export let metadata = {
  title: "Moviender",
};

export default async function page({
  params,
}: {
  params: { movieID: string };
}) {
  const movieID = params.movieID;
  const movieDetails = await getMovieDetails(parseInt(movieID));
  if (!movieDetails) {
    metadata = { ...metadata, title: "Movie not found" };
    return <h1>Movie not found</h1>;
  }

  const { title, original_title, spoken_languages, videos, imdb_id, id } =
    movieDetails;
  metadata = { ...metadata, title: `${title} - Moviender` };
  return (
    <main id="movie-detail-main" className="max-w-[1000px] w-full p-4 bg-red">
      <section
        id="movie-hero-section"
        className="w-full flex flex-row flex-nowrap gap-4 bg-astronaut-800"
      >
        {id}
        <div id="movie-hero-mainDetails" className="w-3/4 px-4">
          <div id="title-ratings" className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Ratings id={imdb_id} />
          </div>

          <small className="italic">{original_title}</small>

          <p>{movieDetails.overview}</p>
          <p>
            Language{spoken_languages.length > 1 ? "s" : ""}:
            {spoken_languages?.map((lang, i) => (
              <span key={lang["iso_639_1"]}>
                {" "}
                {languagesCodes[lang["iso_639_1"]][1]}
                {i === 0 ? "" : " - "}
              </span>
            ))}
          </p>
        </div>
        <div className="w-1/4 max-w-200 aspect-[0.66] border-1 border-astronaut-200">
          <ResponsiveImage
            fallbackSrc={`${tmbdImagesPrefix}original${movieDetails.poster_path}`}
            alt={title + "Poster"}
            blurBackground={`${tmbdImagesPrefix}w45${movieDetails.poster_path}`}
            containerClassname=""
            containerID="movie-poster-box"
            key={movieDetails.id}
            imageClassname="moviePoster"
            srcSet={`${tmbdImagesPrefix}w500${movieDetails.poster_path} 1600w`}
            sizes="1600px"
          />
        </div>
      </section>
      {videos.results.length > 0 && (
        <VideoTrailer title={title} videos={Array(3).fill(videos.results[0])} />
      )}

      <Streaming movieID={movieID} />
    </main>
  );
}
