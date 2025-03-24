import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-xelend-navy">
              Xelend
              <span className="text-xelend-blue">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'}`}
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/products">
                    <NavigationMenuTrigger 
                      className={`nav-link bg-transparent ${
                        location.pathname.includes('/products') ? 'text-xelend-blue font-medium' : 'text-gray-700 hover:text-xelend-blue'
                      }`}
                    >
                      Products
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="bg-white rounded-md shadow-lg p-2 w-56">
                    <ul className="grid gap-2">
                      <li>
                        <Link
                          to="/products/collections"
                          className={`block p-2 rounded-md ${
                            location.pathname === '/products/collections' 
                              ? 'bg-xelend-blue/10 text-xelend-blue' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          Collections (Available Now)
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/sourcing"
                          className={`block p-2 rounded-md ${
                            location.pathname === '/products/sourcing' 
                              ? 'bg-xelend-blue/10 text-xelend-blue' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          Sourcing (Coming Soon)
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/crm"
                          className={`block p-2 rounded-md ${
                            location.pathname === '/products/crm' 
                              ? 'bg-xelend-blue/10 text-xelend-blue' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          CRM (Coming Soon)
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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

          <div className="hidden md:block">
            <Button variant="default" className="btn-hover">
              Request Demo
            </Button>
          </div>

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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className={`block py-2 ${location.pathname === '/' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
            >
              Home
            </Link>
            
            <div className="space-y-2">
              <Link 
                to="/products" 
                className={`block py-2 ${location.pathname === '/products' ? 'text-xelend-blue font-medium' : 'text-gray-700'}`}
              >
                Products
              </Link>
              <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                <Link 
                  to="/products/collections" 
                  className={`block py-1 text-sm ${location.pathname === '/products/collections' ? 'text-xelend-blue font-medium' : 'text-gray-600'}`}
                >
                  Collections (Available Now)
                </Link>
                <Link 
                  to="/products/sourcing" 
                  className={`block py-1 text-sm ${location.pathname === '/products/sourcing' ? 'text-xelend-blue font-medium' : 'text-gray-600'}`}
                >
                  Sourcing (Coming Soon)
                </Link>
                <Link 
                  to="/products/crm" 
                  className={`block py-1 text-sm ${location.pathname === '/products/crm' ? 'text-xelend-blue font-medium' : 'text-gray-600'}`}
                >
                  CRM (Coming Soon)
                </Link>
              </div>
            </div>
            
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
