
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
            <Button size="lg" className="btn-hover group w-full sm:w-auto">
              Get Started
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto">
              Request a Demo
            </Button>
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
