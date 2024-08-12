// src/components/DarkModeToggle.tsx
'use client'
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

type DarkModeToggleProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;