// src/components/MovieGrid.tsx
import React from 'react';
import { Movie } from '@/types/Movie';
import MovieCard from './MovieCard';

interface MovieGridProps {
	movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieGrid;