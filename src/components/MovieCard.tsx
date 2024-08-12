// src/components/MovieCard.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Movie } from '@/types/Movie';

type MovieCardProps = {
	movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/movies/${movie.id}`);
	};

	return (
		<div onClick={handleClick} className="movie-card p-2 text-center w-80 h-auto mx-auto mb-1 cursor-pointer">
			<Image
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				width={320}
				height={480}
				className="w-full object-cover"
			/>
			<h2 className="text-sm font-semibold mt-2">{movie.title}</h2>
		</div>
	);
};

export default MovieCard;