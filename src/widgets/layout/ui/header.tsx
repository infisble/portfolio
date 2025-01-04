import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="nav-section max-w-3xl mx-auto backdrop-blur-lg bg-white/70 dark:bg-dark-nav/90 rounded-full shadow-lg border border-gray-200/50 dark:border-dark-border/50" aria-label="Top">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-gray-900">
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="ml-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 py-4 px-6 backdrop-blur-lg bg-white/90 dark:bg-dark-nav/90 rounded-2xl shadow-lg border border-gray-200/50 dark:border-dark-border/50">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-700 dark:hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}