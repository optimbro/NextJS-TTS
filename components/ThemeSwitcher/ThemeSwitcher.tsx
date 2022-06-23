import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (currentTheme === 'dark') {
    return (
      <BsSunFill
        className="w-8 h-8 p-2 text-yellow-500 bg-gray-700 rounded-full"
        role="button"
        onClick={() => setTheme('light')}
      />
    );
  }
  if (currentTheme === 'light') {
    return (
      <BsMoonStarsFill
        className="w-8 h-8 p-2 text-gray-100 bg-gray-700 rounded-full"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  }
  return (
    <BsSunFill
      className="w-8 h-8 p-2 text-yellow-500 bg-gray-700 rounded-full"
      role="button"
      onClick={() => setTheme('light')}
    />
  );
};

export default ThemeSwitch;
