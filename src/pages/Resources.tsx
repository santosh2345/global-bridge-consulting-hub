
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  // Featured insight
  const featuredInsight = {
    title: "2025 India-EU Business Climate Report",
    description: "An in-depth analysis of the evolving business landscape between India and the European Union, with key trends and opportunities.",
    image: "/placeholder.svg",
    category: "Report",
    date: "May 1, 2025",
    url: "/resources/insights/india-eu-report"
  };

  // Recent articles
  const recentArticles = [
    {
      title: "What the EU AI Act Means for Your Business",
      description: "A practical guide to the EU's new AI regulations and how they affect businesses operating in Europe.",
      image: "/placeholder.svg",
      category: "Regulatory",
      date: "April 28, 2025",
      url: "/resources/articles/eu-ai-act"
    },
    {
      title: "India's Data Protection Framework",
      description: "Understanding India's evolving data protection regulations and compliance requirements.",
      image: "/placeholder.svg",
      category: "Compliance",
      date: "April 15, 2025",
      url: "/resources/articles/india-data-protection"
    },
    {
      title: "Navigating Indo-European Startup Funding",
      description: "Key insights for startups seeking cross-border investment between India and Europe.",
      image: "/placeholder.svg",
      category: "Finance",
      date: "April 3, 2025",
      url: "/resources/articles/startup-funding"
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: "EU AI Act Compliance Workshop",
      description: "A hands-on workshop to help businesses prepare for compliance with the EU's AI Act.",
      date: "May 15, 2025",
      location: "Virtual",
      url: "/resources/events/eu-ai-workshop"
    },
    {
      title: "India Market Entry Masterclass",
      description: "A comprehensive session on successfully entering and scaling in the Indian market.",
      date: "May 22, 2025",
      location: "Paris, France",
      url: "/resources/events/india-entry-masterclass"
    },
    {
      title: "Annual Indo-European Business Conference",
      description: "Our flagship event bringing together business leaders, policymakers, and experts from India and Europe.",
      date: "June 10-11, 2025",
      location: "New Delhi, India",
      url: "/resources/events/annual-conference"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Resources</h1>
            <p className="text-xl text-gray-600">Discover our latest insights, research, and industry expertise to help your business succeed globally.</p>
          </div>
        </div>
      </section>
      
      {/* Featured Insight */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Featured Insight</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gray-200 min-h-[300px] lg:min-h-full">
                {/* Placeholder for image */}
                <img 
                  src={featuredInsight.image} 
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                <span className="text-sm text-mc-blue font-semibold mb-2">{featuredInsight.category} • {featuredInsight.date}</span>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{featuredInsight.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{featuredInsight.description}</p>
                <Link to={featuredInsight.url} className="inline-flex items-center text-mc-blue font-medium hover:underline">
                  Read the full report <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Articles */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Recent Articles</h2>
            <Link to="/resources/articles" className="text-mc-blue font-medium hover:underline inline-flex items-center">
              View all articles <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-mc-blue font-semibold mb-2 block">{article.category} • {article.date}</span>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link to={article.url} className="text-mc-blue font-medium hover:underline inline-flex items-center">
                    Read more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            <Link to="/resources/events" className="text-mc-blue font-medium hover:underline inline-flex items-center">
              View all events <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover">
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <span className="text-sm font-semibold text-gray-500 block mb-1">{event.date}</span>
                  <span className="text-sm text-mc-blue font-medium">{event.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link to={event.url} className="text-mc-blue font-medium hover:underline inline-flex items-center">
                  Event details <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Stay Informed</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for the latest insights, trends, and updates on Indo-European business.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-mc-blue focus:border-mc-blue"
                required
              />
              <button
                type="submit"
                className="bg-mc-blue text-white px-6 py-3 rounded-md hover:bg-mc-blue/90 transition-colors font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
