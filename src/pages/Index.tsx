
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RequestDemoForm from '@/components/forms/RequestDemoForm';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Key Highlights Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
              Key Highlights
            </div>
            <h2 className="mb-6">Comprehensive Financial Solutions</h2>
            <p className="text-gray-600 text-lg">
              Xelend provides end-to-end solutions that streamline operations and boost efficiency for financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xelend-blue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
              <p className="text-gray-600">
                From Loan Origination to Collections to CRM, we cover the complete financial workflow.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xelend-blue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make smarter decisions with AI-powered analytics and comprehensive reporting tools.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xelend-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Integrates effortlessly with your existing systems, minimizing disruption and maximizing value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
              Our Products
            </div>
            <h2 className="mb-6">Tailored Solutions for Financial Institutions</h2>
            <p className="text-gray-600 text-lg">
              Explore our suite of specialized products designed to enhance every aspect of your financial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              title="Loan Origination System (LOS)"
              description="Streamline the entire lending process, from lead capture to loan disbursement."
              status="coming soon"
              features={[
                "Loan Application Processing",
                "Automated Credit Scoring",
                "Document Verification & KYC",
                "Loan Structuring & Pricing",
                "Approval Workflow Automation",
                "Disbursement & Compliance Checks"
              ]}
              outcome="Faster loan approvals, reduced risk, and improved compliance."
              delay={100}
            />

            <ProductCard
              title="Debt Recovery (Collections)"
              description="A smart, data-driven debt recovery system that optimizes the entire collection process."
              status="available"
              features={[
                "Field & Digital Collection Management",
                "Smart Task Allocation",
                "360° Customer Profile",
                "Multi-Channel Communication",
                "Instant Digital Payments",
                "Performance Analytics"
              ]}
              outcome="Increased recovery rates, reduced operational costs, and better customer engagement."
              delay={200}
            />

            <ProductCard
              title="CRM for Lead Generation"
              description="A data-driven CRM that helps financial institutions acquire, nurture, and convert leads efficiently."
              status="coming soon"
              features={[
                "Lead Capture & Management",
                "Automated Follow-Ups",
                "Sales Pipeline Tracking",
                "Data-Driven Insights",
                "Omnichannel Engagement",
                "Custom Campaign Management"
              ]}
              outcome="Higher conversion rates, reduced customer acquisition costs, and better lead tracking."
              delay={300}
            />
          </div>

          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" size="lg" className="btn-hover group">
                View All Products
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Ready to Transform Your Financial Operations?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading financial institutions that are already leveraging Xelend to streamline their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <RequestDemoForm
                buttonVariant="default"
                buttonSize="lg"
                buttonClassName="w-full sm:w-auto bg-white text-xelend-navy hover:bg-gray-100"
              />
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
