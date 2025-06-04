import React from 'react';
export default function Gala() {
  return (
    
    <div className="min-h-screen bg-white px-6 py-12 md:px-24">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Gala International de l’Innovation Responsable
      </h1>

      {/* Présentation */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🎯 Objectifs du Gala</h2>
        <p className="text-gray-600">
          Le dîner de gala a pour but de promouvoir l’innovation durable, renforcer les partenariats stratégiques entre
          secteurs publics/privés, et valoriser le leadership féminin dans le numérique et l’économie circulaire.
        </p>
      </section>

      {/* Déroulé du dîner */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">🍽️ Déroulé du dîner de gala</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>19h00</strong> – Accueil & Cocktail de bienvenue</li>
          <li><strong>19h30</strong> – Discours d’ouverture</li>
          <li><strong>20h00</strong> – Dîner & témoignages d’experts</li>
          <li><strong>21h15</strong> – Prestation artistique</li>
          <li><strong>22h00</strong> – Cérémonie de reconnaissance</li>
          <li><strong>22h30</strong> – Clôture & moment de convivialité</li>
        </ul>
      </section>

      {/* Tarifs */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">💰 Modalités de participation</h2>
        <ul className="text-gray-600">
          <li><strong>Participation générale :</strong> 170€</li>
          <li><strong>Tarif réduit (étudiants, ONG) :</strong> 90€</li>
          <li><strong>Accès VIP & Gala :</strong> 250€</li>
        </ul>
      </section>

      {/* Sponsoring */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🤝 Formules de Sponsoring</h2>
        <div className="space-y-6">
          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <h3 className="text-lg font-bold text-yellow-700">🥇 Pack Or – 4500€</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Logo en avant (affiches, site web, programmes)</li>
              <li>Participation à un panel + prise de parole au dîner</li>
              <li>Remise de trophée + interview + table VIP (5 invités)</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 border-l-4 border-gray-500 rounded">
            <h3 className="text-lg font-bold text-gray-700">🥈 Pack Argent – 3500€</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Logo sur les supports + participation à un panel</li>
              <li>Communication média + mention spéciale au gala</li>
              <li>Table VIP (3 invités)</li>
            </ul>
          </div>

          <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded">
            <h3 className="text-lg font-bold text-orange-700">🥉 Pack Bronze – 1500€</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Logo sur site web et programme</li>
              <li>Invitation pour 2 personnes + mention officielle</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Boutons CTA */}
      <div className="text-center mt-10 space-y-4">
        <a
          href="/inscription"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          S’inscrire au Gala
        </a>
        <a
          href="/devenir-sponsor"
          className="inline-block border border-indigo-600 text-indigo-700 px-6 py-3 rounded hover:bg-indigo-50 transition"
        >
          Devenir Sponsor
        </a>
      </div>
    </div>
  );
}
