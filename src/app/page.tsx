// src/app/page.tsx
import React from 'react';
import MovieGrid from '@/components/MovieGrid';
import { movies } from '@/data/movies';

export default function Home() {
  const displayedMovies = movies.slice(0, 12);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
      </div>
      <MovieGrid movies={displayedMovies} />
    </div>
  );
}