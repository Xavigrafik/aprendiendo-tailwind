// src/App.jsx
import React from 'react';
import Saludo from './components/Saludo'; 
import BlockTailwind from './components/BlockTailwind'; 

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">¡Bienvenido a mi App!</h1>
        <p className="text-gray-700 mb-6">
          Este es un ejemplo básico con Tailwind CSS y React.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          ¡Haz clic aquí!
        </button>
        <div className="mt-4">
          <span className="text-sm text-gray-500">Propulsado por</span>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">Tailwind CSS</a>
        </div>
      </div>
      <BlockTailwind nombre="Francisco" />
      <Saludo nombre="Francisco" />
    </div>
  );
}

export default App;