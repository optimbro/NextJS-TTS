import { useTheme } from 'next-themes';
import ClientOnly from '../Helper/ClientOnly';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const ThemeSwitch: React.FC = () => {
  // Theme Switcher Logic
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <BsMoonStarsFill
          className="w-6 h-6 text-gray-100"
          role="button"
          onClick={() => setTheme('light')}
        ></BsMoonStarsFill>
      );
    }
    if (currentTheme === 'light') {
      return (
        <BsSunFill
          className="w-6 h-6 text-yellow-500 "
          role="button"
          onClick={() => setTheme('dark')}
        ></BsSunFill>
      );
    }
    return (
      <BsSunFill
        className="w-6 h-6 text-yellow-500 "
        role="button"
        onClick={() => setTheme('dark')}
      ></BsSunFill>
    );
  };
  return <ClientOnly>{renderThemeChanger()}</ClientOnly>;
};

export default ThemeSwitch;
