
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
    ? 'btn-primary' 
    : 'btn-secondary';
    
  return (
    <Link 
      to={href} 
      className={`inline-block ${baseClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
