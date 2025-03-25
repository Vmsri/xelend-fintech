
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ProductsSubmenu from './ProductsSubmenu';
import RequestDemoForm from '@/components/forms/RequestDemoForm';

const DesktopMenu = () => {
  const location = useLocation();

  return (
    <>
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
                <ProductsSubmenu />
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
        <RequestDemoForm />
      </div>
    </>
  );
};

export default DesktopMenu;
