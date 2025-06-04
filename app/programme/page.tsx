// pages/programme.tsx
import React from 'react';
const programme = [
  { heure: '14h00', titre: 'Cérémonie d’ouverture' },
  { heure: '14h30', titre: 'Panel 1 : Inclusion Numérique et Intelligence Artificielle' },
  { heure: '16h00', titre: 'Débats et échanges' },
  { heure: '17h00', titre: 'Panel 2 : Gestion des Déchets Électroniques' },
  { heure: '18h30', titre: 'Clôture et réseautage' },
  { heure: '19h00', titre: 'Fin du colloque' },
];

export default function Programme() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
        Programme du Colloque INCLUSIA 2025
      </h1>
      <div className="max-w-3xl mx-auto border-l-4 border-indigo-600 pl-6 space-y-8">
        {programme.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md" />
            <h3 className="text-xl font-semibold text-gray-800">{item.heure}</h3>
            <p className="text-gray-600">{item.titre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
