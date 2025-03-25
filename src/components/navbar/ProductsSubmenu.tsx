
import { Link, useLocation } from 'react-router-dom';

const ProductsSubmenu = () => {
  const location = useLocation();
  
  return (
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
  );
};

export default ProductsSubmenu;
