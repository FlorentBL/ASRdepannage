// src/pages/LegalNotice.tsx
import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Éditeur du site</h2>
          <p>ASR Depannage (SARL)</p>
          <p>Siège social : 180 rue le longchamp, 73000 Bassens</p>
          <p>Capital social : 32 000 €</p>
          <p>Email : asr.alpes@wanadoo.fr</p>
          <p>Téléphone : 04 79 85 57 17</p>
          <p>RCS : Chambery B 409 767 902</p>
          <p>TVA : FR20409767902</p>
          <p>Directeur de la publication : Frédéric ROSSI</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hébergement</h2>
          <p>o2switch SARL</p>
          <p>Adresse : Chemin des Pardiaux, 63000 Clermont-Ferrand, France</p>
          <p>Téléphone : 04 44 44 60 40</p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
