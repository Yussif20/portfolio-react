import ThemeSwitcher from './ThemeSwitcher.tsx';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-black border-b border-black dark:border-white px-4 py-2 sm:px-10 mx-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-0">
          {['Bio', 'Skills', 'Projects', 'Contact'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-sm sm:text-base hover:text-blue-500 px-2 sm:px-4 font-medium transition-colors duration-300 underline-offset-4 hover:underline"
            >
              {section}
            </a>
          ))}
        </nav>
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
