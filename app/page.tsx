'use client';
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Colloque International INCLUSIA 2025</h1>
        <p className="text-lg md:text-xl mb-6">5 septembre 2025 – Palais du Luxembourg, Paris</p>
        <p className="text-xl font-semibold italic">"Un Pont Vers un Avenir Durable et Inclusif"</p>
        <div className="mt-8 space-x-4">
          <Button className="text-lg">S'inscrire</Button>
          <Button variant="outline" className="text-lg">Découvrir le Gala</Button>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">À propos du Colloque</h2>
        <p className="text-lg mb-4">
          INCLUSIA 2025 est un colloque international réunissant experts, décideurs, entrepreneurs et chercheurs pour débattre de l’inclusion numérique, de l’intelligence artificielle et de la gestion des déchets électroniques.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Promouvoir une transition numérique et écologique durable.</li>
          <li>Sensibiliser et mobiliser les acteurs publics et privés.</li>
          <li>Élaborer des recommandations pour une transformation numérique responsable.</li>
          <li>Encourager le leadership féminin dans le numérique et l’économie circulaire.</li>
        </ul>
      </section>
    </main>
  );
}