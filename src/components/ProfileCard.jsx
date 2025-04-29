// src/components/ProfileCard.jsx
import React from 'react';

function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <img
        className="w-full h-32 object-cover"
        src="https://placehold.co/300x100/64b5f6/ffffff?Text=Foto+Perfil"
        alt="Foto de perfil"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Nombre Apellido</h2>
        <p className="text-gray-600 text-sm mb-2">Profesión o Rol</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-900">
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
          </a>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Seguir
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;