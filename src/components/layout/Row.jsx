// src/components/layout/Row.jsx
import React from 'react';

function Row({ children, className, alignItems, justifyContent, direction = 'row' }) {
  const alignItemsClass = alignItems && alignItemsMap[alignItems];
  const justifyContentClass = justifyContent && justifyContentMap[justifyContent];
  const directionClass = `flex flex-wrap ${direction === 'col' ? 'flex-col' : 'flex-row'}`;
  const combinedClassName = `TWROW w-full ${directionClass} ${alignItemsClass || ''} ${justifyContentClass || ''} ${className || ''}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

// Define mapas para las posibles clases de Tailwind
const alignItemsMap = {
  'start': 'items-start',
  'center': 'items-center',
  'end': 'items-end',
  'baseline': 'items-baseline',
  'stretch': 'items-stretch',
};

const justifyContentMap = {
  'start': 'justify-start',
  'center': 'justify-center',
  'end': 'justify-end',
  'between': 'justify-between',
  'around': 'justify-around',
  'evenly': 'justify-evenly',
};


export default Row;