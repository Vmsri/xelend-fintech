
import { useRef, useEffect } from 'react';
import { CheckSquare } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    title: "End-to-End Financial Management",
    description: "From lead sourcing to loan servicing, a complete solution for your financial processes.",
    icon: <div className="bg-blue-100 p-3 rounded-lg"><CheckSquare className="h-6 w-6 text-xelend-blue" /></div>
  },
  {
    title: "Seamless Operational Integration",
    description: "Works alongside existing banking infrastructure with minimal disruption.",
    icon: <div className="bg-blue-100 p-3 rounded-lg"><CheckSquare className="h-6 w-6 text-xelend-blue" /></div>
  },
  {
    title: "Data-Driven Decision Making",
    description: "AI-powered insights for better risk assessment and business intelligence.",
    icon: <div className="bg-blue-100 p-3 rounded-lg"><CheckSquare className="h-6 w-6 text-xelend-blue" /></div>
  },
  {
    title: "Automation & Efficiency",
    description: "Reduce manual work, optimize resources, and improve profitability.",
    icon: <div className="bg-blue-100 p-3 rounded-lg"><CheckSquare className="h-6 w-6 text-xelend-blue" /></div>
  },
  {
    title: "Compliance & Security",
    description: "Built-in KYC, audit logs, and secure transactions for regulatory peace of mind.",
    icon: <div className="bg-blue-100 p-3 rounded-lg"><CheckSquare className="h-6 w-6 text-xelend-blue" /></div>
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50" id="features">
      <div 
        ref={sectionRef}
        className="page-container transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Key Features</h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive solution provides everything you need to optimize your financial institution's operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
