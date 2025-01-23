import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-black border-b border-black dark:border-white px-4 py-2 sm:px-10 mx-auto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="flex gap-4">
          {['Bio', 'Skills', 'Projects'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className=" hover:text-blue-500 px-4 font-medium transition-colors duration-300 underline-offset-4 hover:underline"
            >
              {section}
            </a>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
