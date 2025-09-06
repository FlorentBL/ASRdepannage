// src/pages/Privacy.tsx
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Politique de Confidentialité</h1>
      <div className="space-y-4 text-sm leading-relaxed">
        <p><strong className="font-semibold">Responsable du traitement :</strong> ASR Depannage, 180 rue le longchamp, 73000 Bassens, email asr.alpes@wanadoo.fr.</p>
        <p><strong className="font-semibold">Données collectées :</strong> Nous collectons les données que vous nous fournissez via le formulaire de contact (nom, email, téléphone, message) ainsi que des données de navigation (adresse IP, type de navigateur) à des fins statistiques et de sécurité.</p>
        <p><strong className="font-semibold">Finalités du traitement :</strong> Les données sont collectées pour répondre à vos demandes de contact, établir des devis et améliorer notre service. Les données de navigation sont utilisées pour la mesure d'audience et la maintenance du site.</p>
        <p><strong className="font-semibold">Base légale :</strong> Le traitement est basé sur votre consentement pour les demandes de contact et sur notre intérêt légitime pour assurer la sécurité et le fonctionnement du site.</p>
        <p><strong className="font-semibold">Durée de conservation :</strong> Les données sont conservées le temps nécessaire au traitement de votre demande et pour une durée maximale de 3 ans après le dernier contact.</p>
        <p><strong className="font-semibold">Destinataires des données :</strong> Les données sont à l'usage exclusif de ASR Depannage et ne sont ni vendues ni cédées à des tiers. Elles peuvent être transmises à nos sous-traitants techniques (hébergeur).</p>
        <p><strong className="font-semibold">Vos droits :</strong> Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition sur vos données. Pour exercer vos droits, contactez-nous à asr.alpes@wanadoo.fr.</p>
        <p><strong className="font-semibold">Cookies :</strong> Ce site utilise des cookies nécessaires à son fonctionnement et à la mesure d'audience. Vous pouvez les gérer via les paramètres de votre navigateur.</p>
        <p><strong className="font-semibold">Réclamation :</strong> Vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente (la CNIL en France).</p>
      </div>
    </div>
  );
};

export default Privacy;