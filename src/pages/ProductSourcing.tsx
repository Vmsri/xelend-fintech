
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProductSourcing = () => {
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
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
              Coming Soon
            </div>
            <h1 className="mb-6">Loan Origination System (LOS)</h1>
            <p className="text-lg text-gray-300 mb-8">
              Streamlined lending process, from lead capture to loan disbursement, making approvals faster and risk assessment more accurate.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Product Details */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <p className="text-gray-600 mb-6">
                Xelend's LOS streamlines the entire lending process, from lead capture to loan disbursement, 
                making loan approvals faster and risk assessment more accurate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Loan Application Processing</p>
                    <p className="text-gray-600">Digital application forms for quick customer onboarding.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Automated Credit Scoring</p>
                    <p className="text-gray-600">Data-driven risk profiling based on financial history.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Document Verification & KYC</p>
                    <p className="text-gray-600">AI-powered validation of identity, income, and eligibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Loan Structuring & Pricing</p>
                    <p className="text-gray-600">Configurable interest rates, tenure, and EMI calculations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Approval Workflow Automation</p>
                    <p className="text-gray-600">Customizable workflows to fast-track loan approvals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Disbursement & Compliance Checks</p>
                    <p className="text-gray-600">Integrated with banking APIs for seamless fund transfers.</p>
                  </div>
                </div>
              </div>

              <div className="bg-xelend-blue/5 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-xelend-blue"></div>
                  <p className="font-medium">Outcome</p>
                </div>
                <p className="text-gray-600">Faster loan approvals, reduced risk, and improved compliance.</p>
              </div>

              <Button className="btn-hover group">
                Get Notified When Available
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 overflow-hidden animate-slide-up">
              <AspectRatio ratio={4/3} className="bg-white rounded-lg overflow-hidden">
                <img 
                  src="/photo-1486312338219-ce68d2c6f44d"
                  alt="Loan Origination System Interface" 
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Get Ready for a Smarter Loan Origination System</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when our LOS solution launches. Sign up for notifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-hover group w-full sm:w-auto bg-white text-xelend-navy hover:bg-gray-100">
                Get Notified
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

export default ProductSourcing;
