// src/components/Card.jsx
import React from 'react';

function Card({ children, className }) {
  const defaultClassName = 'bg-white rounded-lg shadow-md overflow-hidden';
  const combinedClassName = `${defaultClassName} ${className || ''}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

export default Card;