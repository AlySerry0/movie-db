// src/types/Movie.ts

import {MovieDetails} from "./MovieDetails";

export interface Movie {
	id: number;
	title: string;
	overview: string;
	releaseDate: string;
	genreIds: number[];
	posterPath: string;
	backdropPath: string;
	voteAverage: number;
	voteCount: number;
	adult: boolean;
	movieDetails: MovieDetails;
}