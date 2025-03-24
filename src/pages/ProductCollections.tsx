
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCollections = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28">
      {/* Page Header */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-green-100 text-green-800 rounded-full">
              Available Now
            </div>
            <h1 className="mb-6">Debt Recovery (Collections)</h1>
            <p className="text-lg text-gray-300 mb-8">
              A smart, data-driven debt recovery system that empowers field teams and optimizes the entire collection process.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Product Details */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <p className="text-gray-600 mb-6">
                Xelend's Collections system provides comprehensive tools for debt recovery management, helping financial institutions improve recovery rates while maintaining positive customer relationships.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Field & Digital Collection Management</p>
                    <p className="text-gray-600">Assign and track recovery agents in real-time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Smart Task Allocation</p>
                    <p className="text-gray-600">Optimize agent routes and automate follow-ups.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">360° Customer Profile</p>
                    <p className="text-gray-600">Access complete payment history, outstanding dues, and communication records.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Multi-Channel Communication</p>
                    <p className="text-gray-600">SMS, WhatsApp, email, and IVR for automated reminders.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Instant Digital Payments</p>
                    <p className="text-gray-600">Generate and send payment links for on-the-go settlements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Performance Analytics</p>
                    <p className="text-gray-600">Track agent productivity, collection success rates, and risk categories.</p>
                  </div>
                </div>
              </div>

              <div className="bg-xelend-blue/5 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-xelend-blue"></div>
                  <p className="font-medium">Outcome</p>
                </div>
                <p className="text-gray-600">Increased recovery rates, reduced operational costs, and better customer engagement.</p>
              </div>

              <Button className="btn-hover group">
                Request a Demo
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 overflow-hidden animate-slide-up">
              <div className="rounded-lg bg-white p-6 h-80 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-xelend-blue/20 flex items-center justify-center">
                  <span className="text-xelend-blue font-bold text-xl">DRC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Ready to Improve Your Recovery Rates?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how Xelend's Collections solution can transform your institution's recovery process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-hover group w-full sm:w-auto bg-white text-xelend-navy hover:bg-gray-100">
                Request a Demo
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCollections;
