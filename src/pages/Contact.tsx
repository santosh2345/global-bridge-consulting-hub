
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      service: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our team to discuss how we can help your business grow across borders.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              
              {formSubmitted && (
                <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for contacting us! We'll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                  >
                    <option value="">Select a service</option>
                    <option value="international-expansion">International Expansion</option>
                    <option value="ai-regulatory">AI & Regulatory Support</option>
                    <option value="sourcing">Sourcing & Supply Chain</option>
                    <option value="startup">Startup & SME Support</option>
                    <option value="institutions">Institution Collaborations</option>
                    <option value="immigration">Immigration & Global Mobility</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mc-blue focus:border-mc-blue"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-mc-blue text-white px-6 py-3 rounded-md hover:bg-mc-blue/90 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-mc-blue-light p-3 rounded-full text-mc-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-600">info@morgancolney.com</p>
                    <p className="text-gray-600">support@morgancolney.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-mc-blue-light p-3 rounded-full text-mc-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-600">India: +91 11 4012 6789</p>
                    <p className="text-gray-600">France: +33 1 40 73 8642</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-mc-blue-light p-3 rounded-full text-mc-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                    <div className="mb-3">
                      <p className="font-medium text-gray-700">New Delhi Office:</p>
                      <p className="text-gray-600">123 Business Complex, Connaught Place</p>
                      <p className="text-gray-600">New Delhi, 110001, India</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Paris Office:</p>
                      <p className="text-gray-600">45 Rue de Innovation</p>
                      <p className="text-gray-600">75008 Paris, France</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-mc-blue-light p-3 rounded-full text-mc-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">(Local time in respective offices)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Locations</h2>
          </div>
          
          <div className="bg-gray-300 h-80 rounded-lg">
            {/* In a real application, you would embed a Google Map here */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-600">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
