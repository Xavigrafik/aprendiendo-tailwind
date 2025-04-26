import React from 'react';

function LayoutConContenedores() {
  return (
    <div className="w-full bg-gray-100 border border-red-300 py-8">
      <div className="max-w-6xl mx-auto border border-red-800">
        {/* Aquí va tu contenido principal */}
        <p className="p-4">
          Este es el contenido dentro del contenedor con ancho máximo de 6xl centrado.
        </p>
      </div>
    </div>
  );
}

export default LayoutConContenedores;