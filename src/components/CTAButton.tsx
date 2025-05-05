
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CTAButton = ({ children, href, variant = 'primary', className = '' }: CTAButtonProps) => {
  const baseClasses = variant === 'primary' 
    ? 'bg-mc-blue hover:bg-mc-blue/90 text-white' 
    : 'bg-mc-yellow hover:bg-mc-yellow/90 text-gray-800';
    
  return (
    <Link 
      to={href} 
      className={`inline-block py-3 px-6 rounded-md transition-all duration-300 font-medium ${baseClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
