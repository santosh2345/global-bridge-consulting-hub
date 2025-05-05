
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-bold text-xl mb-4">Morgan & Colney</h2>
            <p className="text-gray-600 mb-4">A global Indo-French consulting firm supporting businesses across borders with expertise in law, strategy, and technology.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-mc-blue">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-mc-blue">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/international-expansion" className="text-gray-600 hover:text-mc-blue">International Expansion</Link></li>
              <li><Link to="/services/ai-regulatory" className="text-gray-600 hover:text-mc-blue">AI & Regulatory Support</Link></li>
              <li><Link to="/services/sourcing" className="text-gray-600 hover:text-mc-blue">Sourcing & Supply Chain</Link></li>
              <li><Link to="/services/startup" className="text-gray-600 hover:text-mc-blue">Startup & SME Support</Link></li>
              <li><Link to="/services/institutions" className="text-gray-600 hover:text-mc-blue">Institution Collaborations</Link></li>
              <li><Link to="/services/immigration" className="text-gray-600 hover:text-mc-blue">Immigration & Global Mobility</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/insights" className="text-gray-600 hover:text-mc-blue">Insights & Reports</Link></li>
              <li><Link to="/resources/articles" className="text-gray-600 hover:text-mc-blue">Articles</Link></li>
              <li><Link to="/resources/events" className="text-gray-600 hover:text-mc-blue">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-mc-blue">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-mc-blue">Contact</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-mc-blue">Legal Notice</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-mc-blue">Cookie Policies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">&copy; Morgan & Colney 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
