import useDarkMode from 'use-dark-mode';
import { HiSun, HiMoon } from 'react-icons/hi';

let darkModeDefaults = {
  classNameDark: 'dark',
  classNameLight: 'light'
};

function ModeToggle() {
  let darkModeConfig;
  // fixes nextjs ssr errors cause document isn't defined
  if (process.browser) {
    darkModeConfig = {
      ...darkModeDefaults,
      element: document.documentElement
    };
  }

  const { value: isDarkMode, toggle } = useDarkMode(
    false,
    darkModeConfig || darkModeDefaults
  );

  return (
    <button
      className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-600 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
      onClick={toggle}
    >
      {isDarkMode ? (
        <>
          <span className="sr-only">Toggle light mode</span>
          <HiSun className="h-6 w-6" />
        </>
      ) : (
        <>
          <span className="sr-only">Toggle dark mode</span>
          <HiMoon className="h-6 w-6" />
        </>
      )}
    </button>
  );
}

export default ModeToggle;
