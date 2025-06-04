'use client'; // ← obligatoire pour utiliser useState dans app/

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function DevenirSponsor() {
  const [formData, setFormData] = useState({
    entreprise: '',
    nom: '',
    prenom: '',
    fonction: '',
    dateNaissance: '',
    lieuNaissance: '',
    email: '',
    telephone: '',
    pack: 'Or',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sje6i6e',       // ← remplace ici
        'template_2v7tlyr',      // ← remplace ici
        formData,
        'aZUGKakdoLWFhEp8N'        // ← remplace ici (API Key)
      )
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.error('Erreur lors de l’envoi de l’email:', error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-24">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Devenir Sponsor – INCLUSIA 2025</h1>

      {submitted ? (
        <div className="text-center text-green-600 font-semibold">
          ✅ Merci pour votre engagement ! Nous vous contacterons rapidement.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md space-y-6"
        >
          <div>
            <label className="block text-gray-700">Nom de l’entreprise</label>
            <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} required className="input" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Nom</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Prénom</label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Fonction</label>
              <input type="text" name="fonction" value={formData.fonction} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Date de naissance</label>
              <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Lieu de naissance</label>
              <input type="text" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
            </div>
            <div>
              <label className="block text-gray-700">Téléphone</label>
              <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required className="input" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Formule de sponsoring</label>
            <select name="pack" value={formData.pack} onChange={handleChange} className="input">
              <option value="Or">🥇 Pack Or – 4500€</option>
              <option value="Argent">🥈 Pack Argent – 3500€</option>
              <option value="Bronze">🥉 Pack Bronze – 1500€</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition duration-200"
          >
            Envoyer ma demande
          </button>
        </form>
      )}
    </div>
  );
}
