
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  status: 'available' | 'coming soon';
  features: string[];
  outcome: string;
  delay?: number;
}

const ProductCard = ({
  title,
  description,
  image,
  status,
  features,
  outcome,
  delay = 0
}: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="group glass-card rounded-xl opacity-0 translate-y-10"
    >
      <div className={`p-6 md:p-8 transition-all duration-300 ${isExpanded ? 'shadow-lg' : 'hover:shadow-card'}`}>
        {/* Status badge */}
        <div className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full
          ${status === 'available' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-amber-100 text-amber-800'}`}
        >
          {status === 'available' ? 'Available Now' : 'Coming Soon'}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features */}
        <div className={`transition-all duration-300 overflow-hidden 
          ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-xelend-blue/5 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-xelend-blue"></div>
              <p className="font-medium">Outcome</p>
            </div>
            <p className="text-gray-600">{outcome}</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="w-full justify-between group"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          <ArrowRight 
            size={16} 
            className={`transition-transform duration-300 
              ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
          />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
