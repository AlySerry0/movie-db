// src/components/Layout.tsx
'use client'
import React, { useState, useEffect } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <div className="container mx-auto p-4">
      <div className="absolute top-4 right-4">
        <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      {children}
    </div>
  );
};

export default Layout;