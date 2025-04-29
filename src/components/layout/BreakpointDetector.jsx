import React, { useState, useEffect } from 'react';
// import tailwindConfig from '../../../tailwind.config.cjs'; // Ajusta la ruta según tu estructura de carpetas

function BreakpointDetector() {
  const [breakpoint, setBreakpoint] = useState('');
   const screens = {
        'xs' : '0',
        'sm' : '576',
        'md' : '768',
        'lg' : '992',
        'xl' : '1200',
        '2xl': '1400',
    } 
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= screens['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= screens['xl']) {
        setBreakpoint('xl');
      } else if (width >= screens['lg']) {
        setBreakpoint('lg');
      } else if (width >= screens['md']) {
        setBreakpoint('md');
      } else if (width >= screens['sm']) {
        setBreakpoint('sm');
      } else {
        setBreakpoint('xs');
      }
    };

    // Llama a la función al montar el componente
    handleResize();

    // Añade un listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 bg-black text-white p-2 z-50 hover:opacity-0">
      Breakpoint actual: <span className="font-bold">{breakpoint}</span>
    </div>
  );
}

export default BreakpointDetector;