// src/components/MovieGrid.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Movie } from '@/types/Movie';
import MovieCard from './MovieCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { fetchMovies } from '@/app/api/fetchMovies';
import { searchMovies } from '@/app/api/searchMovies';

interface MovieGridProps {}

const MovieGrid: React.FC<MovieGridProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = Number(searchParams.get('page')) || 1;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchQuery, setSearchQuery] = useState('');
  const moviesPerPage = 10;
  const bufferPages = useRef(new Set<number>([1, 2, 3, 4, 5]));

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(Array.from(bufferPages.current));
      setMovies(fetchedMovies);
    };
    getMovies().then(r => r);
  }, []);

  useEffect(() => {
    const getMoreMovies = async () => {
      const nextBufferPage = Math.ceil(currentPage / 2) + bufferPages.current.size;
      if (!bufferPages.current.has(nextBufferPage)) {
        bufferPages.current.add(nextBufferPage);
        const fetchedMovies = await fetchMovies([nextBufferPage]);
        setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
      }
    };

    if (currentPage % 2 === 0) {
      getMoreMovies().then(r => r);
    }
  }, [currentPage]);

  useEffect(() => {
    router.replace(`?page=${currentPage}`);
  }, [currentPage, router]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = React.useMemo(() => movies.slice(indexOfFirstMovie, indexOfLastMovie), [movies, indexOfFirstMovie, indexOfLastMovie]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value);
    if (page >= 1) {
      setCurrentPage(page);
    }
  };

  const handleSearchInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const searchedMovies = await searchMovies(query);
      setMovies(searchedMovies);
    } else {
      const fetchedMovies = await fetchMovies(Array.from(bufferPages.current));
      setMovies(fetchedMovies);
    }
  };

  return (
    <div className="pt-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full max-w-md p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-4 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 rounded-full disabled:opacity-50 flex items-center justify-center"
        >
          <FaArrowLeft className="text-gray-900 dark:text-white" />
        </button>
        <input
          type="number"
          value={currentPage}
          onChange={handlePageInputChange}
          className="w-12 text-center mx-2 bg-gray-200 dark:bg-gray-800 rounded no-arrows"
          min="1"
        />
        <button
          onClick={handleNextPage}
          className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center"
        >
          <FaArrowRight className="text-gray-900 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default MovieGrid;