import React from 'react';

function BlockTailwind({ nombre }) {
  return (
    <div className="bg-yellow-100 rounded-md p-4 mt-4 w-full">
      <p className="text-yellow-700 font-semibold">¡Hola, {nombre}!</p>
      <p className="text-sm text-yellow-500">Este es un saludo desde un componente.</p>
    </div>
  );
}

export default  BlockTailwind;