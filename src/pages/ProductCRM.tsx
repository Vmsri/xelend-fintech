
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCRM = () => {
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
            <h1 className="mb-6">CRM for Lead Generation</h1>
            <p className="text-lg text-gray-300 mb-8">
              A data-driven CRM that helps financial institutions acquire, nurture, and convert leads efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* CRM Product Details */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <p className="text-gray-600 mb-6">
                Xelend's CRM solution helps financial institutions streamline their lead management process, from acquisition to conversion, with powerful data-driven tools.
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

            <div className="bg-gray-100 rounded-xl p-8 overflow-hidden animate-slide-up">
              <div className="rounded-lg bg-white p-6 h-80 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-xelend-blue/20 flex items-center justify-center">
                  <span className="text-xelend-blue font-bold text-xl">CRM</span>
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
            <h2 className="mb-6">Transform Your Lead Management</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when our CRM solution launches. Sign up for notifications.
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

export default ProductCRM;
