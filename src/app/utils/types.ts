//NOW PLAYING
export interface NowPlayingType {
  dates: NowPlayingDates;
  page: number;
  results: NowPlayingResult[];
  total_pages: number;
  total_results: number;
}

export interface NowPlayingDates {
  maximum: Date;
  minimum: Date;
}

export interface NowPlayingResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

//MOVIE DETAILS
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  images: Images;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface Images {
  backdrops: any[];
  logos: any[];
  posters: any[];
}

export interface Videos {
  results: VideoResult[];
}

export interface VideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

//STREAMING SERVICES
export interface Streaming {
  id: number;
  results: StreamingResults;
}

export interface StreamingResults {
  [key: string]: LocationData;
}

export interface LocationData {
  link: string;
  flatrate: Platform[];
  rent: Platform[];
  buy: Platform[];
}

export interface Platform {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}
