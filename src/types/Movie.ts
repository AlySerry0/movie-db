// src/types/Movie.ts
export interface Movie {
	id: number;
	title: string;
	overview: string;
	release_date: string;
	genre_ids: number[];
	poster_path: string;
	backdrop_path: string;
	vote_average: number;
	vote_count: number;
	adult: boolean;
}