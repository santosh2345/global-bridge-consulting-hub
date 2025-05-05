
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';
import FeatureItem from '@/components/FeatureItem';
import { Link } from 'react-router-dom';
import { FileText, Book, Users, Phone, Globe, Lock, Package, Rocket, Building, Users2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mc-blue-light to-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
                Expand your business in India and Europe
              </h1>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in-up">
                A global Indo-French consulting firm supporting businesses in India and Europe with legal, strategy, AI solutions, and practical operational expertise.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CTAButton href="/contact">Talk to an expert</CTAButton>
                <CTAButton href="/services" variant="secondary">Learn more</CTAButton>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Business consultants in meeting" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Help Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Who We Help</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mc-blue-light p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto">
                <Globe className="text-mc-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Businesses expanding into India/Europe</h3>
              <p className="text-gray-700 text-center">Strategic support for companies looking to grow internationally with market analysis and entry planning.</p>
            </div>
            
            <div className="bg-mc-blue-light p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto">
                <Lock className="text-mc-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Law firms & institutions seeking regulatory partnerships</h3>
              <p className="text-gray-700 text-center">Collaboration on complex cross-border regulatory matters and compliance frameworks.</p>
            </div>
            
            <div className="bg-mc-blue-light p-8 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto">
                <Rocket className="text-mc-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Startups & founders navigating cross-border growth</h3>
              <p className="text-gray-700 text-center">End-to-end support for young businesses seeking international expansion and investment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Services Overview</h2>
            <p className="text-lg text-gray-700">
              Rooted in law, operations, and tech, we provide cross-border solutions bridging regulatory, cultural, and commercial gaps.
            </p>
            <div className="mt-6">
              <Link to="/services" className="text-mc-blue font-medium hover:underline">
                Learn more
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="International Expansion" 
              description="India–Europe market entry, GTM, localization, and growth plans."
              icon={<Globe className="text-mc-blue" size={24} />}
              href="/services/international-expansion"
            />
            
            <ServiceCard 
              title="AI & Regulatory Support" 
              description="EU AI Act, India DPDP, GDPR, Intellectual property, and automation."
              icon={<Lock className="text-mc-blue" size={24} />}
              href="/services/ai-regulatory"
            />
            
            <ServiceCard 
              title="Sourcing & Supply Chain" 
              description="Sourcing, ESG, quality control and supply chain transformation."
              icon={<Package className="text-mc-blue" size={24} />}
              href="/services/sourcing"
            />
            
            <ServiceCard 
              title="Startup & SME Support" 
              description="Cross-border startup advisory, investor readiness, soft landing in India/Europe."
              icon={<Rocket className="text-mc-blue" size={24} />}
              href="/services/startup"
            />
            
            <ServiceCard 
              title="Institution Collaborations" 
              description="Indo-European trade collaboration and strategic policy execution."
              icon={<Building className="text-mc-blue" size={24} />}
              href="/services/institutions"
            />
            
            <ServiceCard 
              title="Immigration & Global Mobility" 
              description="Visas, founder mobility program, talent relocation and immigration playbooks."
              icon={<Users2 className="text-mc-blue" size={24} />}
              href="/services/immigration"
            />
          </div>
        </div>
      </section>
      
      {/* Why Work With Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Work With Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            <FeatureItem 
              title="Legal + Strategic Dual Expertise" 
              description="We combine deep legal knowledge with practical business strategy for complete solutions."
            />
            
            <FeatureItem 
              title="Dual Presence in India & France" 
              description="Local teams in both regions provide authentic on-the-ground insights and support."
            />
            
            <FeatureItem 
              title="AI-Augmented & Agile Consulting" 
              description="We leverage technology to deliver faster, more accurate and cost-effective solutions."
            />
            
            <FeatureItem 
              title="Government, Institutional, and VC Access" 
              description="Our extensive network opens doors to key decision-makers and resources."
            />
            
            <FeatureItem 
              title="India-Europe Cultural Fluency" 
              description="We navigate cultural nuances that often determine success in cross-border ventures."
            />
            
            <FeatureItem 
              title="Outcome-Driven, Not Hours-Driven" 
              description="We focus on delivering tangible results rather than billing for time."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Hear How We Helped Businesses Thrive Beyond Borders</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our clients' success stories speak louder than words. Here's what they say about working with us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="We had no idea how to approach the Indian market, but Morgan & Colney's team mapped it out clearly and helped us entered the Indian market faster than expected."
              name="Nicolas Leroy"
              title="Co-Founder, French Tech SME"
            />
            
            <TestimonialCard 
              quote="Moving senior staff between Paris and Delhi felt effortless — everything from visas to housing was handled professionally."
              name="Amit Tyagi"
              title="Head of HR, Indian IT company"
            />
            
            <TestimonialCard 
              quote="Morgan & Colney's local insight and structured approach helped us navigate India's complex landscape without costly missteps. We are very happy."
              name="Sophie Dubois"
              title="Director of Business Development"
              company="Luna"
            />
            
            <TestimonialCard 
              quote="We're a small India-based startup — Morgan & Colney's help in connecting us with French investors and refining our pitch was game-changing."
              name="Raj Sharma"
              title="Founder & CEO"
              company="ArchTech"
            />
            
            <TestimonialCard 
              quote="We were worried about cross-border compliance but Morgan & Colney made sure we stayed ahead of every regulatory hurdle in both India & France."
              name="Eloise Boucher"
              title="Senior Project Manager"
              company="Renew"
            />
            
            <TestimonialCard 
              quote="Morgan & Colney helped us initiate meaningful dialogues with counterpart associations in India, opening up new channels for collaboration for us."
              name="Michael Johnson"
              title="Director, European industry association"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-mc-blue to-mc-blue-light text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Expand Globally?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Book a free consultation with our expert today.</p>
          
          <CTAButton href="/contact" className="bg-white text-mc-blue hover:bg-gray-100">
            Book a Consultation
          </CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
