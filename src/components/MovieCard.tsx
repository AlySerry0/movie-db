// src/components/MovieCard.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import {useRouter, useSearchParams} from 'next/navigation';
import {Movie} from '@/types/Movie';
import {FaExclamationCircle} from 'react-icons/fa';

type MovieCardProps = {
	movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const currentPage = searchParams.get('page') || '1';

	const handleClick = () => {
		router.push(`/movies/${movie.id}?page=${currentPage}`);
	};

	return (
		<div
			id={`movie-card-${movie.id}`}
			onClick={handleClick}
			className="movie-card p-2 text-center w-60 h-auto mx-auto mb-1 cursor-pointer rounded-lg shadow-lg relative"
		>
			<Image
				id={`movie-poster-${movie.id}`}
				src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
				alt={movie.title}
				width={240}
				height={360}
				className="w-full object-cover rounded-lg"
			/>
			<h2 id={`movie-title-${movie.id}`} className="text-sm font-semibold mt-2 truncate">{movie.title}</h2>
			{movie.adult && (
				<div id={`movie-adult-${movie.id}`} className="absolute top-2 right-2 text-white p-1 rounded-full">
					<FaExclamationCircle/>
				</div>
			)}
		</div>
	);
};

export default MovieCard;