// src/components/DarkModeContainer.tsx
'use client'
import React, {useState, useEffect} from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

const DarkModeContainer: React.FC<{ children: React.ReactNode }> = ({children}) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedDarkMode = localStorage.getItem('darkMode') === 'true';
		setDarkMode(savedDarkMode);
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		localStorage.setItem('darkMode', darkMode.toString());
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 relative">
			<div className="absolute top-4 right-4 z-20">
				<DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
			</div>
			{children}
		</div>
	);
};

export default DarkModeContainer;