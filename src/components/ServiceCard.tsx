
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard = ({ title, description, icon, href }: ServiceCardProps) => {
  return (
    <Link 
      to={href} 
      className="block bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-mc-blue-light rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default ServiceCard;
