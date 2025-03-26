
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { saveFormSubmission } from '@/utils/formDataStorage';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    submitting: false
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    // Collect form data
    const formData = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      company: formState.company,
      message: formState.message
    };
    
    // Save form submission
    saveFormSubmission('contact', formData);
    
    // Show success toast
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "We've received your message and will get back to you shortly.",
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        submitting: false
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28">
      {/* Page Header */}
      <section className="section-padding bg-xelend-navy text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white/10 rounded-full">
              Get In Touch
            </div>
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300">
              Have questions about our products or services? We're here to help. Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-right">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-hover" 
                  disabled={formState.submitting}
                >
                  {formState.submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-xelend-blue/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-xelend-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Our Address</h4>
                    <p className="text-gray-600">
                      123 Finance Tower, Business District<br />
                      Corporate City, 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xelend-blue/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-xelend-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@xelend.com" className="text-xelend-blue hover:underline">info@xelend.com</a><br />
                      Support: <a href="mailto:support@xelend.com" className="text-xelend-blue hover:underline">support@xelend.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xelend-blue/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-xelend-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      Sales: <a href="tel:+15551234567" className="text-xelend-blue hover:underline">+1 (555) 123-4567</a><br />
                      Support: <a href="tel:+15557654321" className="text-xelend-blue hover:underline">+1 (555) 765-4321</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xelend-blue/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-xelend-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-xelend-blue/10 p-3 rounded-lg text-xelend-blue hover:bg-xelend-blue hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-xelend-blue/10 p-3 rounded-lg text-xelend-blue hover:bg-xelend-blue hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-xelend-blue/10 p-3 rounded-lg text-xelend-blue hover:bg-xelend-blue hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-xelend-blue/10 p-3 rounded-lg text-xelend-blue hover:bg-xelend-blue hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-12">
        <div className="page-container">
          <div className="bg-gray-200 h-96 rounded-xl overflow-hidden animate-fade-in">
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
