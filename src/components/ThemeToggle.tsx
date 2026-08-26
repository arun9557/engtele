'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  if (typeof document !== 'undefined') {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  return () => observer.disconnect();
}

function getSnapshot() {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
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
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
