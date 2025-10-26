import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              GetTix
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? 'text-primary'
                  : scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
            >
              Home
            </Link>
            <Link
              to="#features"
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </Link>
            <Link
              to="#about"
              className={`font-medium transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-primary-light'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </Link>
          </div>

          {/* Auth CTAs - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/auth/login"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                scrolled
                  ? 'text-gray-700 hover:text-primary border border-gray-300 hover:border-primary'
                  : 'text-white border border-white/50 hover:bg-white/10'
              }`}
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-medium hover:from-primary-hover hover:to-accent-hover transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium ${
                  isActive('/') ? 'text-primary' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <a
                href="#features"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block py-2 font-medium text-gray-700"
              >
                Features
              </a>
              <a
                href="#about"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block py-2 font-medium text-gray-700"
              >
                About
              </a>
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Link
                  to="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-lg font-medium text-gray-700 border border-gray-300 hover:border-primary"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
