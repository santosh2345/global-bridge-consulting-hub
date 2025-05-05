
import React from 'react';
import { Link } from 'react-router-dom';

export const ResourcesMenu = () => {
  return (
    <div className="mega-menu">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Resources</h2>
            <p className="text-gray-600">Discover our latest insights, research, and industry expertise to help your business succeed globally.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Insights & Reports</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/insights/india-market" className="text-gray-600 hover:text-mc-blue transition-colors">
                  India Market Entry Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/insights/eu-regulations" className="text-gray-600 hover:text-mc-blue transition-colors">
                  EU Regulatory Landscape
                </Link>
              </li>
              <li>
                <Link to="/resources/insights/ai-compliance" className="text-gray-600 hover:text-mc-blue transition-colors">
                  AI Compliance Framework
                </Link>
              </li>
              <li>
                <Link to="/resources/insights/cross-border" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Cross-Border Business Report
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Articles</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/articles/eu-ai-act" className="text-gray-600 hover:text-mc-blue transition-colors">
                  What the EU AI Act Means for Your Business
                </Link>
              </li>
              <li>
                <Link to="/resources/articles/india-data-protection" className="text-gray-600 hover:text-mc-blue transition-colors">
                  India's Data Protection Framework
                </Link>
              </li>
              <li>
                <Link to="/resources/articles/startup-funding" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Navigating Indo-European Startup Funding
                </Link>
              </li>
              <li>
                <Link to="/resources/articles/global-mobility" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Global Mobility Best Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Events</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/events/webinars" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Upcoming Webinars
                </Link>
              </li>
              <li>
                <Link to="/resources/events/workshops" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Workshops & Training
                </Link>
              </li>
              <li>
                <Link to="/resources/events/conference" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Annual Indo-European Business Conference
                </Link>
              </li>
              <li>
                <Link to="/resources/events/past" className="text-gray-600 hover:text-mc-blue transition-colors">
                  Past Events Archive
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 mt-6">
            <Link to="/resources" className="text-mc-blue font-medium hover:underline">
              View all resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
