
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import { Shield, Globe, Briefcase, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Morgan & Colney</h1>
            <p className="text-xl text-gray-600 mb-8">A global Indo-French consulting firm with expertise at the intersection of law, business operations, and technology.</p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Morgan & Colney was born from the vision of bridging the gap between India and Europe's business ecosystems. Our founders, with backgrounds in international law and business operations, recognized the need for a consulting firm that truly understood both markets at a deep cultural and practical level.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a small advisory practice has grown into a comprehensive consulting firm with presence in New Delhi and Paris, helping businesses navigate cross-border challenges and opportunities.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve clients ranging from startups to major corporations, offering tailored solutions that combine legal expertise, operational know-how, and technological innovation.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-mc-blue">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Integrity</h4>
                    <p className="text-gray-600">We operate with complete transparency and ethical standards in all our engagements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-mc-blue">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Cultural Intelligence</h4>
                    <p className="text-gray-600">We deeply understand the nuances of both Indian and European business environments.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-mc-blue">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Practical Excellence</h4>
                    <p className="text-gray-600">We focus on actionable solutions, not just theoretical advice.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-mc-blue">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Client Partnership</h4>
                    <p className="text-gray-600">We view our clients as long-term partners in their global journey.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experienced professionals who guide our firm and help our clients succeed globally.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Arjun Patel</h3>
              <p className="text-mc-blue text-center mb-4">Co-Founder & Managing Partner</p>
              <p className="text-gray-600 text-center">Former senior counsel with expertise in cross-border transactions and international business law.</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Sophie Martin</h3>
              <p className="text-mc-blue text-center mb-4">Co-Founder & Strategy Director</p>
              <p className="text-gray-600 text-center">Strategic operations expert with 15+ years experience in multinational corporations.</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold text-center mb-2">Vikram Sharma</h3>
              <p className="text-mc-blue text-center mb-4">Technology & AI Lead</p>
              <p className="text-gray-600 text-center">Technology innovator specializing in regulatory compliance and AI solutions for business.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Whether you're looking to expand globally or navigate complex regulatory challenges, our team is ready to help.</p>
          <CTAButton href="/contact" variant="primary">Contact Our Team</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
