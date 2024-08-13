// src/types/MovieDetails.ts

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logoPath: string | null;
	name: string;
	originCountry: string;
}

export interface ProductionCountry {
	iso31661: string;
	name: string;
}

export interface SpokenLanguage {
	englishName: string;
	iso6391: string;
	name: string;
}

export interface MovieDetails {
	adult: boolean;
	backdropPath: string;
	belongsToCollection: any | null;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdbId: string;
	originCountry: any | null;
	originalLanguage: string;
	originalTitle: string;
	overview: string;
	popularity: number;
	posterPath: string;
	productionCompanies: ProductionCompany[];
	productionCountries: ProductionCountry[];
	releaseDate: string;
	revenue: number;
	runtime: number;
	spokenLanguages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	voteAverage: number;
	voteCount: number;
}