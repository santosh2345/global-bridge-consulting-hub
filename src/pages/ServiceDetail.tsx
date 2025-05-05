
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import FeatureItem from '../components/FeatureItem';
import { Check, ArrowRight } from 'lucide-react';

// This is a generic service detail page that will handle all individual service routes
const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Service data - in a real app this would come from an API or CMS
  const serviceData = {
    'international-expansion': {
      title: 'International Expansion',
      hero: {
        heading: 'Expand Your Business Across Borders',
        description: 'Strategic market entry and growth solutions for businesses expanding between India and Europe.',
      },
      overview: 'Our International Expansion services help businesses successfully enter and grow in new markets across India and Europe. We combine legal expertise, cultural insights, and operational know-how to create tailored expansion strategies that minimize risks and maximize opportunities.',
      features: [
        {
          title: 'Market Entry Strategy',
          description: 'Comprehensive market analysis, business model adaptation, and go-to-market planning.',
        },
        {
          title: 'Legal Structure & Compliance',
          description: 'Entity setup, regulatory compliance, and legal framework optimization.',
        },
        {
          title: 'Localization Support',
          description: 'Product adaptation, cultural alignment, and local partnership development.',
        },
        {
          title: 'Growth & Scaling',
          description: 'Expansion planning, business development support, and market penetration strategies.',
        },
      ],
      process: [
        { title: 'Assessment', description: 'Market analysis and readiness evaluation' },
        { title: 'Strategy', description: 'Tailored entry plan and operational roadmap' },
        { title: 'Implementation', description: 'Hands-on support for market entry execution' },
        { title: 'Growth', description: 'Ongoing assistance for sustainable expansion' },
      ],
      clientTypes: [
        'European companies entering the Indian market',
        'Indian businesses expanding to Europe',
        'Multinational corporations optimizing cross-border operations',
        'Scale-ups ready for international growth',
      ]
    },
    'ai-regulatory': {
      title: 'AI & Regulatory Support',
      hero: {
        heading: 'Navigate Complex AI Regulations Confidently',
        description: 'Expert guidance on AI compliance, data protection, and technology regulation across India and Europe.',
      },
      overview: 'Our AI & Regulatory Support services help businesses navigate the increasingly complex landscape of technology regulation, with particular focus on artificial intelligence, data protection, and digital compliance frameworks in both India and Europe.',
      features: [
        {
          title: 'EU AI Act Compliance',
          description: 'Gap analysis, risk assessment, and implementation guidance for EU AI regulations.',
        },
        {
          title: 'Data Protection Framework',
          description: 'GDPR and India DPDP compliance strategies and implementation support.',
        },
        {
          title: 'Intellectual Property',
          description: 'IP protection strategies for AI innovations across jurisdictions.',
        },
        {
          title: 'Regulatory Technology',
          description: 'AI-powered tools for streamlining compliance and risk management.',
        },
      ],
      process: [
        { title: 'Audit', description: 'Compliance assessment and gap analysis' },
        { title: 'Planning', description: 'Customized regulatory roadmap development' },
        { title: 'Implementation', description: 'Compliance program execution and documentation' },
        { title: 'Monitoring', description: 'Ongoing compliance maintenance and updates' },
      ],
      clientTypes: [
        'AI and technology companies operating across borders',
        'Businesses implementing AI solutions in regulated industries',
        'Organizations handling cross-border data transfers',
        'Companies needing to comply with new tech regulations',
      ]
    },
    'sourcing': {
      title: 'Sourcing & Supply Chain',
      hero: {
        heading: 'Optimize Your Global Supply Chain',
        description: 'End-to-end sourcing and supply chain solutions connecting India and Europe.',
      },
      overview: 'Our Sourcing & Supply Chain services help businesses build resilient, efficient, and compliant supply chains between India and Europe. We focus on strategic sourcing, quality management, and sustainable supply chain transformation.',
      features: [
        {
          title: 'Strategic Sourcing',
          description: 'Supplier identification, evaluation, and relationship management.',
        },
        {
          title: 'ESG & Compliance',
          description: 'Environmental, social, and governance compliance in supply chains.',
        },
        {
          title: 'Quality Control',
          description: 'Quality assurance frameworks and monitoring systems.',
        },
        {
          title: 'Supply Chain Transformation',
          description: 'Digital transformation and optimization of cross-border supply chains.',
        },
      ],
      process: [
        { title: 'Analysis', description: 'Supply chain assessment and opportunity identification' },
        { title: 'Design', description: 'Optimized sourcing and supply chain strategy' },
        { title: 'Implementation', description: 'Partner selection and operational setup' },
        { title: 'Optimization', description: 'Continuous improvement and performance tracking' },
      ],
      clientTypes: [
        'Manufacturing companies seeking suppliers across borders',
        'Retailers developing multi-region sourcing strategies',
        'Businesses implementing sustainable supply chains',
        'Companies digitalizing their supply chain operations',
      ]
    },
    'startup': {
      title: 'Startup & SME Support',
      hero: {
        heading: 'Accelerate Your Cross-Border Growth',
        description: 'Specialized support for startups and SMEs expanding between India and Europe.',
      },
      overview: 'Our Startup & SME Support services are designed specifically for early-stage and growing businesses looking to expand across borders. We provide tailored guidance, practical support, and access to our network to help startups and SMEs succeed internationally.',
      features: [
        {
          title: 'Cross-Border Advisory',
          description: 'Strategic guidance for international expansion and growth.',
        },
        {
          title: 'Investor Readiness',
          description: 'Preparation for cross-border fundraising and investor engagement.',
        },
        {
          title: 'Soft Landing Program',
          description: 'Practical support for establishing operations in new markets.',
        },
        {
          title: 'Scaling Support',
          description: 'Operational and strategic assistance for sustainable growth.',
        },
      ],
      process: [
        { title: 'Evaluation', description: 'Business model and expansion readiness assessment' },
        { title: 'Planning', description: 'Tailored expansion strategy and roadmap' },
        { title: 'Launch', description: 'Market entry execution and initial operations' },
        { title: 'Growth', description: 'Scale-up support and optimization' },
      ],
      clientTypes: [
        'Tech startups expanding internationally',
        'SMEs entering new markets for the first time',
        'Founders seeking cross-border investment',
        'Early-stage companies establishing international presence',
      ]
    },
    'institutions': {
      title: 'Institution Collaborations',
      hero: {
        heading: 'Bridge Institutional Relationships',
        description: 'Facilitating strategic partnerships between Indian and European organizations.',
      },
      overview: 'Our Institution Collaborations services foster meaningful partnerships between governmental bodies, industry associations, and other institutions across India and Europe. We help create frameworks for cooperation that drive policy development, trade relations, and mutual growth.',
      features: [
        {
          title: 'Indo-European Trade Collaboration',
          description: 'Trade mission organization and strategic partnership development.',
        },
        {
          title: 'Policy Execution',
          description: 'Implementation support for bilateral initiatives and agreements.',
        },
        {
          title: 'Knowledge Exchange',
          description: 'Facilitation of best practice sharing and joint research programs.',
        },
        {
          title: 'Industry Partnership',
          description: 'Cross-border industry association collaboration frameworks.',
        },
      ],
      process: [
        { title: 'Engagement', description: 'Stakeholder mapping and relationship building' },
        { title: 'Framework', description: 'Collaboration structure and governance design' },
        { title: 'Implementation', description: 'Partnership launch and initial activities' },
        { title: 'Development', description: 'Ongoing collaboration management and expansion' },
      ],
      clientTypes: [
        'Government agencies and departments',
        'Industry and trade associations',
        'Academic and research institutions',
        'International development organizations',
      ]
    },
    'immigration': {
      title: 'Immigration & Global Mobility',
      hero: {
        heading: 'Seamless Talent Mobility Solutions',
        description: 'Comprehensive immigration and global mobility services for businesses operating between India and Europe.',
      },
      overview: 'Our Immigration & Global Mobility services help businesses and individuals navigate the complex process of cross-border movement. We provide end-to-end support for visa applications, work permits, relocation, and global mobility program development.',
      features: [
        {
          title: 'Visa & Work Permit Support',
          description: 'Strategic guidance and practical assistance for all immigration processes.',
        },
        {
          title: 'Founder Mobility Program',
          description: 'Specialized support for entrepreneurs relocating across borders.',
        },
        {
          title: 'Talent Relocation',
          description: 'Comprehensive relocation support for employees and their families.',
        },
        {
          title: 'Immigration Playbooks',
          description: 'Custom mobility strategies and policy development for organizations.',
        },
      ],
      process: [
        { title: 'Assessment', description: 'Immigration requirements and eligibility evaluation' },
        { title: 'Strategy', description: 'Custom immigration and mobility planning' },
        { title: 'Application', description: 'Document preparation and submission management' },
        { title: 'Settlement', description: 'Relocation and integration support' },
      ],
      clientTypes: [
        'Multinational companies transferring employees',
        'Startups relocating founders or team members',
        'Individuals seeking work opportunities abroad',
        'Organizations building global mobility programs',
      ]
    },
  };
  
  // Default to international-expansion if the serviceId doesn't match any of our services
  const service = serviceId && serviceData[serviceId as keyof typeof serviceData] 
    ? serviceData[serviceId as keyof typeof serviceData]
    : serviceData['international-expansion'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{service.hero.heading}</h1>
            <p className="text-xl text-gray-600">{service.hero.description}</p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.overview}</p>
            
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Why Choose Us for {service.title}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 text-mc-blue">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">Deep expertise in both Indian and European markets</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 text-mc-blue">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">Practical, outcome-focused approach to global expansion</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 text-mc-blue">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">Extensive network of partners and local experts</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 text-mc-blue">
                    <Check size={20} />
                  </div>
                  <p className="text-gray-600">Proven track record of successful cross-border projects</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Service Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {service.features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Process</h2>
            
            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-[50px] top-0 bottom-0 w-1 bg-gray-200"></div>
              
              <div className="space-y-12">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="hidden md:flex items-center justify-center w-[100px] mr-8">
                      <div className="w-12 h-12 bg-mc-blue rounded-full flex items-center justify-center text-white font-semibold text-lg z-10">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex md:hidden items-center justify-center w-12 h-12 bg-mc-blue rounded-full mr-6 text-white font-semibold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who We Serve Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-800">Who We Serve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.clientTypes.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-gray-700">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(serviceData)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, relatedService]) => (
                <div key={id} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm card-hover">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{relatedService.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{relatedService.overview.substring(0, 120)}...</p>
                  <Link to={`/services/${id}`} className="text-mc-blue font-medium hover:underline inline-flex items-center">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-mc-blue-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Contact us today to discuss how our {service.title} services can help your business succeed across borders.</p>
          <CTAButton href="/contact" variant="primary">Contact Our Team</CTAButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
