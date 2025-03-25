
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import ProductsSubmenu from './ProductsSubmenu';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const DesktopMenu = () => {
  const location = useLocation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDialogOpen(false);
    toast({
      title: "Request submitted",
      description: "We'll get back to you soon!",
    });
  };

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
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="default" className="btn-hover">
              Request Demo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request a Demo</DialogTitle>
              <DialogDescription>
                Fill out the form below to schedule a personalized demo.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="demo-name" className="text-right text-sm font-medium">
                  Name
                </label>
                <input
                  id="demo-name"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="demo-email" className="text-right text-sm font-medium">
                  Email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="demo-company" className="text-right text-sm font-medium">
                  Company
                </label>
                <input
                  id="demo-company"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your company name"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="demo-phone" className="text-right text-sm font-medium">
                  Phone
                </label>
                <input
                  id="demo-phone"
                  type="tel"
                  className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <DialogFooter className="mt-6">
                <Button type="submit">Schedule Demo</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default DesktopMenu;
