// src/components/layout/Col.jsx
import React from 'react';

function Col({ children, className, cols }) {
  const colClass = cols && colMap[cols];
  const combinedClassName = `${colClass || ''} ${className || ''}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
}

// Define un mapa para las posibles clases de columna de Tailwind (basado en un sistema de 12 columnas)
const colMap = {
  '1': 'w-1/12',
  '2': 'w-2/12',
  '3': 'w-3/12',
  '4': 'w-4/12',
  '5': 'w-5/12',
  '6': 'w-6/12',
  '7': 'w-7/12',
  '8': 'w-8/12',
  '9': 'w-9/12',
  '10': 'w-10/12',
  '11': 'w-11/12',
  '12': 'w-full',
  'auto': 'w-auto',
};

export default Col;