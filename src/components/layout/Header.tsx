import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-white/80 dark:bg-prussian-blue-500/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-prussian-blue-500 dark:text-white tracking-tighter">
          JR<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-black-700 dark:text-alabaster-grey-700 hover:text-orange-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Switcher */}
          <button 
            onClick={() => {
              if (theme === 'light') setTheme('dark');
              else if (theme === 'dark') setTheme('system');
              else setTheme('light');
            }}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors group relative"
            aria-label="Toggle theme"
          >
            {theme === 'dark' && (
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
            {theme === 'light' && (
              <svg className="w-5 h-5 text-prussian-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 11H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )}
            {theme === 'system' && (
              <svg className="w-5 h-5 text-black-700 dark:text-alabaster-grey-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )}
            
            {/* Tooltip for clarity */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded">
              {theme}
            </span>
          </button>
        </div>

        {/* Mobile Toggle & Theme Switcher (Visible on mobile) */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={() => {
              if (theme === 'light') setTheme('dark');
              else if (theme === 'dark') setTheme('system');
              else setTheme('light');
            }}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' && (
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
            {theme === 'light' && (
              <svg className="w-5 h-5 text-prussian-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 11H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )}
            {theme === 'system' && (
              <svg className="w-5 h-5 text-black-700 dark:text-alabaster-grey-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )}
          </button>
          
          <button 
            className="text-prussian-blue-500 dark:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-4 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 !w-6' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-prussian-blue-500/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {NAV_LINKS.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-4xl font-black text-prussian-blue-500 dark:text-white hover:text-orange-500 transition-all duration-300 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
