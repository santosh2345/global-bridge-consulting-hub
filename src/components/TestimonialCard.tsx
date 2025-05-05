
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

const TestimonialCard = ({ quote, name, title, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover">
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 9.333 10.667 11.333 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 9.333 21.3337 11.333 21.3337 13.333Z" fill="#33C3F0" fillOpacity="0.2"/>
          <path d="M5.33366 14.667H10.667V20.0003C10.667 20.8844 10.3161 21.7319 9.69099 22.357C9.0659 22.9821 8.21843 23.333 7.33366 23.333H6.00033C5.64671 23.333 5.30757 23.1923 5.05752 22.9422C4.80747 22.6922 4.66699 22.353 4.66699 22.0003V14.667H5.33366ZM16.0003 14.667H21.3337V20.0003C21.3337 20.8844 20.9827 21.7319 20.3576 22.357C19.7325 22.9821 18.885 23.333 18.0003 23.333H16.667C16.3134 23.333 15.9742 23.1923 15.7242 22.9422C15.4741 22.6922 15.3337 22.353 15.3337 22.0003V14.667H16.0003Z" fill="#33C3F0"/>
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{title}{company && `, ${company}`}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
