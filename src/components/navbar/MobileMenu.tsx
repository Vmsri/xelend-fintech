
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
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
  );
};

export default MobileMenu;
