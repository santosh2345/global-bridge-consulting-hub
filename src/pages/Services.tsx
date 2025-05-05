
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import CTAButton from '../components/CTAButton';
import { 
  Globe, Shield, ShoppingBag, 
  Rocket, Building, Plane 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'international-expansion',
      title: 'International Expansion',
      description: 'India–Europe market entry, GTM, localization, and growth plans.',
      icon: <Globe className="text-white" size={24} />,
      href: '/services/international-expansion',
    },
    {
      id: 'ai-regulatory',
      title: 'AI & Regulatory Support',
      description: 'EU AI Act, India DPDP, GDPR, Intellectual property, and automation.',
      icon: <Shield className="text-white" size={24} />,
      href: '/services/ai-regulatory',
    },
    {
      id: 'sourcing',
      title: 'Sourcing & Supply Chain',
      description: 'Sourcing, ESG, quality control and supply chain transformation.',
      icon: <ShoppingBag className="text-white" size={24} />,
      href: '/services/sourcing',
    },
    {
      id: 'startup',
      title: 'Startup & SME Support',
      description: 'Cross-border startup advisory, investor readiness, soft landing in India/Europe.',
      icon: <Rocket className="text-white" size={24} />,
      href: '/services/startup',
    },
    {
      id: 'institutions',
      title: 'Institution Collaborations',
      description: 'Indo-European trade collaboration and strategic policy execution.',
      icon: <Building className="text-white" size={24} />,
      href: '/services/institutions',
    },
    {
      id: 'immigration',
      title: 'Immigration & Global Mobility',
      description: 'Visas, founder mobility program, talent relocation and immigration playbooks.',
      icon: <Plane className="text-white" size={24} />,
      href: '/services/immigration',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Services</h1>
            <p className="text-xl text-gray-600">Rooted in law, operations, and technology, we provide cross-border solutions bridging regulatory, cultural, and commercial gaps.</p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Approach</h2>
            <p className="text-gray-600">We combine legal expertise, operational knowledge, and technological innovation to deliver comprehensive solutions to complex cross-border challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-mc-blue rounded-full flex items-center justify-center text-white mb-6">1</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Assessment</h3>
              <p className="text-gray-600">We begin with a thorough assessment of your current situation, goals, and challenges specific to your target market.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-mc-blue rounded-full flex items-center justify-center text-white mb-6">2</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Strategy</h3>
              <p className="text-gray-600">Our team develops a tailored strategy that aligns with your business objectives and addresses regulatory and operational requirements.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-mc-blue rounded-full flex items-center justify-center text-white mb-6">3</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Execution</h3>
              <p className="text-gray-600">We support you throughout implementation, providing hands-on assistance and adapting as needed to ensure success.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Contact us today to discuss how we can help your business succeed across borders.</p>
          <CTAButton href="/contact" variant="primary">Contact Our Team</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
