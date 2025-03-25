
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDialogOpen(false);
    toast({
      title: "Request submitted",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[10%] w-[800px] h-[800px] rounded-full bg-xelend-blue/10 blur-3xl"></div>
        <div className="absolute left-[20%] top-1/2 w-[500px] h-[500px] rounded-full bg-xelend-teal/10 blur-3xl"></div>
      </div>

      <div className="page-container">
        <div 
          ref={heroRef} 
          className="max-w-3xl mx-auto text-center transition-all duration-1000 opacity-0 translate-y-10"
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
            Fullstack Extension Plugin for Financial Institutions
          </div>
          
          <h1 className="mb-6 text-center leading-tight">
            Sourcing, Collections & CRM for
            <span className="text-xelend-blue"> Financial Institutions</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
            Xelend enhances sourcing, collections, and customer management for Microfinance, 
            NBFCs, and Banks. It accelerates financial workflows and improves operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="btn-hover group w-full sm:w-auto">
                  Get Started
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Get Started with Xelend</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to start your Xelend journey.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="email" className="text-right text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="company" className="text-right text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <DialogFooter className="mt-6">
                    <Button type="submit">Submit Request</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto">
                  Request a Demo
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
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-xelend-blue/5 rounded-full blur-md"></div>
      <div className="absolute top-32 -left-16 w-32 h-32 bg-xelend-teal/5 rounded-full blur-md"></div>
    </div>
  );
};

export default Hero;
