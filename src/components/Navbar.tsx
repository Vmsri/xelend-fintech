
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-xelend-navy">
              Xelend
              <span className="text-xelend-blue">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${location.pathname === '/products' ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="btn-hover">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xelend-navy"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="animate-scale" />
            ) : (
              <Menu size={24} className="animate-scale" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className={`block py-2 ${location.pathname === '/' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block py-2 ${location.pathname === '/products' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 ${location.pathname === '/about' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 ${location.pathname === '/contact' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
            >
              Contact
            </Link>
            <Button variant="default" className="w-full mt-4">
              Request Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
