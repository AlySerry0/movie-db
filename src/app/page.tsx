// src/app/page.tsx
import React, {Suspense} from 'react';
import MovieGrid from '@/components/MovieGrid';

const HomePage: React.FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<MovieGrid/>
		</Suspense>
	);
};

export default HomePage;