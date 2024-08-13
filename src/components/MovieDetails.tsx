// src/components/MovieDetails.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchMovieDetails } from '@/app/api/fetchMovieDetails';
import { MovieDetails } from '@/types/MovieDetails';

const MovieDetailsComponent: React.FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    const getMovieDetails = async () => {
      const fetchedMovie = await fetchMovieDetails(Number(id));
      setMovie(fetchedMovie);
    };
    getMovieDetails();
    setIsVisible(true);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleBackClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.push(`/?page=${page}`);
    }, 500); // Duration of the fade-out effect
  };

  const movieGenres = movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : 'N/A';
  const productionCompanies = movie.productionCompanies ? movie.productionCompanies.map((company) => company.name).join(', ') : 'N/A';
  const spokenLanguages = movie.spokenLanguages ? movie.spokenLanguages.map((language) => language.englishName).join(', ') : 'N/A';

  return (
    <div
      id="movie-details"
      className={`h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 relative overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdropPath}`}
        alt={`${movie.title} backdrop`}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
      />
      <button
        id="back-button"
        onClick={handleBackClick}
        className="absolute top-4 left-4 z-20 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
      >
        <FaArrowLeft className="text-gray-900 dark:text-white" />
      </button>
      <div
        id="movie-details-content"
        className="relative z-10 w-full md:w-3/4 flex flex-col justify-center items-center overflow-hidden shadow-2xl border border-gray-300 rounded-lg bg-white dark:bg-gray-800 p-6"
      >
        <h1 id="movie-title" className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{movie.title}</h1>
        <div className="flex flex-col md:flex-row items-center max-h-full">
          <div className="w-full md:w-1/3 flex justify-center items-center max-h-full">
            <div className="flex items-center justify-center h-full">
              <Image
                id="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={movie.title}
                width={333}
                height={500}
                className="w-full h-auto object-contain max-h-full mx-2 my-6 rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-4 mt-4 md:mt-0 overflow-y-auto">
            <p id="movie-overview" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Overview:</strong> {movie.overview}
            </p>
            <p id="movie-release-date" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Release Date:</strong> {movie.releaseDate}
            </p>
            <p id="movie-rating" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Rating:</strong> {movie.voteAverage}
            </p>
            <p id="movie-genres" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Genres:</strong> {movieGenres}
            </p>
            <p id="movie-budget" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Budget:</strong> ${movie.budget.toLocaleString()}
            </p>
            <p id="movie-revenue" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
            </p>
            <p id="movie-runtime" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
            <p id="movie-production-companies" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Production Companies:</strong> {productionCompanies}
            </p>
            <p id="movie-spoken-languages" className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              <strong>Spoken Languages:</strong> {spokenLanguages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsComponent;