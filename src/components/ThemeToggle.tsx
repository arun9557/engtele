'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  /* Read saved preference on mount */
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDark((prev) => !prev);
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light Mode' : 'Dark Mode'}
      className="
        flex items-center justify-center w-9 h-9 rounded-full
        border border-[#E8E8F0] dark:border-[#2A2A3E]
        bg-white dark:bg-[#1A1A2E]
        text-[#6B7280] dark:text-[#9B9BAA]
        hover:border-[#F97316] hover:text-[#F97316]
        dark:hover:border-[#F97316] dark:hover:text-[#F97316]
        transition-all duration-300 cursor-pointer
        shadow-sm hover:shadow-md
      "
    >
      <span className="text-base leading-none select-none">
        {dark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
