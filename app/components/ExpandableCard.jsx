// components/ExpandableCard.jsx
import React from 'react';

const ExpandableCard = ({ 
  children, 
  isExpanded, 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-lg shadow-sm border border-gray-200
        transition-all duration-300 
        ${isExpanded ? 'fixed top-0 left-0 w-full h-full z-50' : 'hover:shadow-lg'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ExpandableCard;