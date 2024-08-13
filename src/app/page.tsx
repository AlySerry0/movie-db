// src/app/page.tsx
import React from 'react';
import MovieGrid from '@/components/MovieGrid';
import { movies } from '@/data/movies';

export default function Home() {
	return (
		<MovieGrid movies={movies} />
	);
}