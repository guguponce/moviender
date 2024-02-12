"use server";

import { MovieDetails, Streaming, type NowPlayingType } from "./utils/types";

export async function getNowPlaying(countryCode: string, language: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${language}-${countryCode}&page=1&region=${countryCode}`,
      options
    );
    const playingList = await response.json();
    return playingList as NowPlayingType;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getMovieDetails(id: number, language?: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=${
        language || "en"
      }-US&append_to_response=videos,images`,
      options
    );
    const movieDetails = await response.json();
    return movieDetails as MovieDetails;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getRatings(imdbID: string) {
  try {
    const movie = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`
    );
    const movieData = await movie.json();
    return movieData.Ratings;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getStreamings(id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      ` 
      https://api.themoviedb.org/3/movie/${id}/watch/providers`,
      options
    );
    const playingList = await response.json();
    return playingList as Streaming;
  } catch (err) {
    console.error(err);
    return null;
  }
}
