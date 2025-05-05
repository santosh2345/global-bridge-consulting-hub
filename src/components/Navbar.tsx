
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import { ServicesMenu } from './ServicesMenu';
import { ResourcesMenu } from './ResourcesMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'services' | 'resources' | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMenu(null);
  };

  const toggleMenu = (menu: 'services' | 'resources') => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="font-bold text-xl md:text-2xl">Morgan & Colney</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-mc-blue font-medium">
              About
            </Link>
            <div className="relative group">
              <button 
                onClick={() => toggleMenu('services')}
                className={`flex items-center text-gray-700 hover:text-mc-blue font-medium ${activeMenu === 'services' ? 'text-mc-blue' : ''}`}
              >
                Services
              </button>
            </div>
            <div className="relative group">
              <button 
                onClick={() => toggleMenu('resources')}
                className={`flex items-center text-gray-700 hover:text-mc-blue font-medium ${activeMenu === 'resources' ? 'text-mc-blue' : ''}`}
              >
                Resources
              </button>
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-mc-blue font-medium">
              Contact
            </Link>
            <button className="text-gray-700 hover:text-mc-blue">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mega Menu Container */}
        <div className={`${activeMenu ? 'menu-open' : ''}`}>
          {activeMenu === 'services' && <ServicesMenu />}
          {activeMenu === 'resources' && <ResourcesMenu />}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/about" className="py-2 text-gray-700">About</Link>
              <button 
                onClick={() => toggleMenu('services')}
                className="flex justify-between items-center py-2 text-gray-700 w-full text-left"
              >
                <span>Services</span>
              </button>
              {activeMenu === 'services' && (
                <div className="pl-4 border-l-2 border-mc-blue-light space-y-2 py-2">
                  <Link to="/services/international-expansion" className="block py-1 text-gray-600 hover:text-mc-blue">International Expansion</Link>
                  <Link to="/services/ai-regulatory" className="block py-1 text-gray-600 hover:text-mc-blue">AI & Regulatory Support</Link>
                  <Link to="/services/sourcing" className="block py-1 text-gray-600 hover:text-mc-blue">Sourcing & Supply Chain</Link>
                  <Link to="/services/startup" className="block py-1 text-gray-600 hover:text-mc-blue">Startup & SME Support</Link>
                  <Link to="/services/institutions" className="block py-1 text-gray-600 hover:text-mc-blue">Institution Collaborations</Link>
                  <Link to="/services/immigration" className="block py-1 text-gray-600 hover:text-mc-blue">Immigration & Global Mobility</Link>
                </div>
              )}
              <button 
                onClick={() => toggleMenu('resources')}
                className="flex justify-between items-center py-2 text-gray-700 w-full text-left"
              >
                <span>Resources</span>
              </button>
              {activeMenu === 'resources' && (
                <div className="pl-4 border-l-2 border-mc-blue-light space-y-2 py-2">
                  <Link to="/resources/insights" className="block py-1 text-gray-600 hover:text-mc-blue">Insights & Reports</Link>
                  <Link to="/resources/articles" className="block py-1 text-gray-600 hover:text-mc-blue">Articles</Link>
                  <Link to="/resources/events" className="block py-1 text-gray-600 hover:text-mc-blue">Events</Link>
                </div>
              )}
              <Link to="/contact" className="py-2 text-gray-700">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
