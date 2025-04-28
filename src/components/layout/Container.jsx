import React from "react";

function Container({ children, className, maxWidth, width }) {
  const defaultClassName = "mx-auto";
  let combinedClassName = `TWCONTAINER ${defaultClassName} ${className || ""}`;

  if (width && width in widthMap) {
    combinedClassName += ` ${widthMap[width]}`;
  } else if (maxWidth && maxWidth in maxWidthMap) {
    combinedClassName += ` ${maxWidthMap[maxWidth]}`;
  } else {
    combinedClassName += ` max-w-7xl`; // Predeterminado
  }

  return <div className={combinedClassName}>{children}</div>;
}

// Define mapas que relacionan tus valores de prop con las clases de Tailwind
const maxWidthMap = {
  'none': 'max-w-none',
  'xs': 'max-w-xs',
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  'full': 'max-w-full',
  'min': 'max-w-min',
  'max': 'max-w-max',
  'prose': 'max-w-prose',
};

const widthMap = {
  'auto': 'w-auto',
  'px': 'w-px',
  '0': 'w-0',
  '1': 'w-1',
  '2': 'w-2',
  '3': 'w-3',
  '4': 'w-4',
  '5': 'w-5',
  '6': 'w-6',
  '7': 'w-7',
  '8': 'w-8',
  '9': 'w-9',
  '10': 'w-10',
  '11': 'w-11',
  '12': 'w-12',
  '16': 'w-16',
  '20': 'w-20',
  '24': 'w-24',
  '32': 'w-32',
  '40': 'w-40',
  '48': 'w-48',
  '52': 'w-52',
  '64': 'w-64',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '2/3': 'w-2/3',
  '1/4': 'w-1/4',
  '2/4': 'w-2/4',
  '3/4': 'w-3/4',
  '1/5': 'w-1/5',
  '2/5': 'w-2/5',
  '3/5': 'w-3/5',
  '4/5': 'w-4/5',
  '1/6': 'w-1/6',
  '2/6': 'w-2/6',
  '3/6': 'w-3/6',
  '4/6': 'w-4/6',
  '5/6': 'w-5/6',
  'full': 'w-full',
  'screen': 'w-screen',
};

export default Container;