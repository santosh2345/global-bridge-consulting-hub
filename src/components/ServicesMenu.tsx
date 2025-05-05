
import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesMenu = () => {
  return (
    <div className="mega-menu">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Services</h2>
            <p className="text-gray-600">Rooted in law, operations, and tech, we provide cross-border solutions bridging regulatory, cultural, and commercial gaps.</p>
          </div>

          <div className="space-y-6">
            <div>
              <Link to="/services/international-expansion" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">International Expansion</h3>
                <p className="text-gray-600 mt-1">India–Europe market entry, GTM, localization, and growth plans.</p>
              </Link>
            </div>

            <div>
              <Link to="/services/ai-regulatory" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">AI & Regulatory Support</h3>
                <p className="text-gray-600 mt-1">EU AI Act, India DPDP, GDPR, Intellectual property, and automation.</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Link to="/services/sourcing" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">Sourcing & Supply Chain</h3>
                <p className="text-gray-600 mt-1">Sourcing, ESG, quality control and supply chain transformation.</p>
              </Link>
            </div>

            <div>
              <Link to="/services/startup" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">Startup & SME Support</h3>
                <p className="text-gray-600 mt-1">Cross-border startup advisory, investor readiness, soft landing in India/Europe.</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Link to="/services/institutions" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">Institution Collaborations</h3>
                <p className="text-gray-600 mt-1">Indo-European trade collaboration and strategic policy execution.</p>
              </Link>
            </div>

            <div>
              <Link to="/services/immigration" className="group">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-mc-blue transition-colors">Immigration & Global Mobility</h3>
                <p className="text-gray-600 mt-1">Visas, founder mobility program, talent relocation and immigration playbooks.</p>
              </Link>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3 mt-6">
            <Link to="/services" className="text-mc-blue font-medium hover:underline">
              View all services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
