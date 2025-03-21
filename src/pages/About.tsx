
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, BarChart, Shield, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
              About Us
            </div>
            <h1 className="mb-6">Revolutionizing Financial Processes</h1>
            <p className="text-lg text-gray-300">
              Xelend enhances financial workflows for efficiency and growth, serving Microfinance, NBFCs, and Banks with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-right">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
                Our Mission
              </div>
              <h2 className="mb-4">Empowering Financial Growth</h2>
              <p className="text-gray-600 mb-6">
                At Xelend, our mission is to empower financial institutions with technology that transforms their operational efficiency. 
                We believe in creating tools that enhance productivity, reduce costs, and improve customer experiences.
              </p>
              <p className="text-gray-600">
                We're committed to continuous innovation, focusing on developing solutions that address the real challenges 
                faced by financial institutions in today's digital landscape. Our goal is to be a trusted technology partner 
                that enables sustainable growth and competitive advantage for our clients.
              </p>
            </div>

            <div className="animate-slide-right" style={{ animationDelay: '200ms' }}>
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
                Our Vision
              </div>
              <h2 className="mb-4">Shaping Financial Technology</h2>
              <p className="text-gray-600 mb-6">
                We envision a future where financial institutions leverage seamless technology to focus on what truly matters: 
                serving their customers better and driving financial inclusion.
              </p>
              <p className="text-gray-600">
                Xelend aims to be at the forefront of this transformation, providing integrated solutions that bridge operational 
                gaps and create efficient financial ecosystems. We strive to be recognized as the definitive technology partner 
                for forward-thinking financial institutions around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="section-padding bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
              Who We Serve
            </div>
            <h2 className="mb-6">Financial Institutions We Support</h2>
            <p className="text-gray-600 text-lg">
              Our solutions are tailored for various types of financial institutions, each with their unique needs and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
              <Building size={40} className="text-xelend-blue mb-6" />
              <h3 className="text-xl font-semibold mb-3">Microfinance Institutions</h3>
              <p className="text-gray-600">
                Supporting small-scale lending operations with streamlined processes, reduced paperwork, and enhanced field operations.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Users size={40} className="text-xelend-blue mb-6" />
              <h3 className="text-xl font-semibold mb-3">Non-Banking Financial Companies</h3>
              <p className="text-gray-600">
                Enabling NBFCs to scale operations, manage loan portfolios efficiently, and improve collection processes.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
              <Globe size={40} className="text-xelend-blue mb-6" />
              <h3 className="text-xl font-semibold mb-3">Commercial Banks</h3>
              <p className="text-gray-600">
                Helping banks modernize their lending operations, enhance customer service, and optimize debt recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Xelend Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-xelend-blue bg-xelend-blue/10 rounded-full">
              Why Xelend?
            </div>
            <h2 className="mb-6">Our Core Advantages</h2>
            <p className="text-gray-600 text-lg">
              Discover what makes Xelend the preferred technology partner for financial institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fullstack Capabilities</h3>
              <p className="text-gray-600">
                End-to-end solutions that cover the entire financial workflow, eliminating the need for multiple vendors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">
                Our products integrate smoothly with your existing systems, ensuring minimal disruption to your operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-gray-600">
                Solutions designed to grow with your business, from small operations to large-scale enterprise deployments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                Built by a team with deep understanding of financial operations and technology implementation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Adhering to the highest standards of data security and regulatory compliance in the financial industry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="w-12 h-12 bg-xelend-blue/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-xelend-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Leveraging the power of data analytics and AI to provide actionable insights for better decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="mb-6">Partner with Xelend for Your Financial Technology Needs</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading financial institutions that trust Xelend to power their operational transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="btn-hover group w-full sm:w-auto bg-white text-xelend-navy hover:bg-gray-100">
                Schedule a Consultation
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-hover w-full sm:w-auto border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
