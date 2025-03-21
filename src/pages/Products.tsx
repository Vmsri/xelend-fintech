
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
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
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white/10 rounded-full">
              Our Products
            </div>
            <h1 className="mb-6">Comprehensive Financial Solutions</h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our suite of specialized products designed to enhance every aspect of your financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* LOS Product Section */}
      <section className="section-padding" id="los">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
                Coming Soon
              </div>
              <h2 className="mb-4">Loan Origination System (LOS)</h2>
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

            <div className="bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-xelend-blue/20 flex items-center justify-center">
                <span className="text-xelend-blue font-bold">LOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Product Section */}
      <section className="section-padding bg-gray-50" id="collections">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-xelend-blue/20 flex items-center justify-center">
                <span className="text-xelend-blue font-bold">DRC</span>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-slide-right">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                Available Now
              </div>
              <h2 className="mb-4">Debt Recovery (Collections)</h2>
              <p className="text-gray-600 mb-6">
                A smart, data-driven debt recovery system that empowers field teams and optimizes the entire collection process.
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
          </div>
        </div>
      </section>

      {/* CRM Product Section */}
      <section className="section-padding" id="crm">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
                Coming Soon
              </div>
              <h2 className="mb-4">CRM for Lead Generation</h2>
              <p className="text-gray-600 mb-6">
                A data-driven CRM that helps financial institutions acquire, nurture, and convert leads efficiently.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Lead Capture & Management</p>
                    <p className="text-gray-600">Centralized system to store and track customer leads.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Automated Follow-Ups</p>
                    <p className="text-gray-600">AI-driven reminders and personalized engagement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Sales Pipeline Tracking</p>
                    <p className="text-gray-600">Monitor lead conversion stages with visual dashboards.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Data-Driven Insights</p>
                    <p className="text-gray-600">Analyze customer interest, engagement levels, and conversion trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Omnichannel Engagement</p>
                    <p className="text-gray-600">Reach customers via calls, emails, SMS, and WhatsApp.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-xelend-blue shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Custom Campaign Management</p>
                    <p className="text-gray-600">Launch targeted loan offers to the right customers.</p>
                  </div>
                </div>
              </div>

              <div className="bg-xelend-blue/5 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 rounded-full bg-xelend-blue"></div>
                  <p className="font-medium">Outcome</p>
                </div>
                <p className="text-gray-600">Higher conversion rates, reduced customer acquisition costs, and better lead tracking.</p>
              </div>

              <Button className="btn-hover group">
                Get Notified When Available
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 h-80 flex items-center justify-center animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-xelend-blue/20 flex items-center justify-center">
                <span className="text-xelend-blue font-bold">CRM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Ready to Elevate Your Financial Operations?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how Xelend's solutions can transform your institution's productivity and customer experience.
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

export default Products;
