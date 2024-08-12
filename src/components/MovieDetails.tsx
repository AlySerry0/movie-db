'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import { movies } from '@/data/movies';
import Image from 'next/image';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={`${movie.title} backdrop`}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-50"
      />
      <div className="relative z-10 w-full md:w-3/4 flex flex-col justify-center items-center overflow-hidden shadow-2xl border border-gray-300 rounded-lg bg-white dark:bg-gray-800 p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{movie.title}</h1>
        <div className="flex flex-col md:flex-row items-center max-h-full">
          <div className="w-full md:w-1/3 flex justify-center items-center max-h-full">
            <div className="flex items-center justify-center h-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={333}
                height={500}
                className="w-full h-auto object-contain max-h-full mx-2 my-6"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-4 mt-4 md:mt-0 overflow-y-auto">
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-300"><strong>Overview:</strong> {movie.overview}</p>
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-300"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-300"><strong>Rating:</strong> {movie.vote_average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;