import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      src: "/uploads/317c5ae6-02bc-46af-a294-f51dac611536.png",
      alt: "Transport de véhicules par ASR Dépannage",
      title: "Transport Multi-Véhicules",
      description: "Notre camion plateau transportant plusieurs véhicules lors d'une intervention"
    },
    {
      id: 2,
      src: "/uploads/7a536816-98a7-45b6-abfd-51256b91c756.png",
      alt: "Intervention ASR avec véhicule sur plateau",
      title: "Dépannage Professionnel",
      description: "Intervention de remorquage avec notre véhicule spécialisé ASR"
    },
    {
      id: 3,
      src: "/uploads/8cb8221f-447f-4efa-a168-c06919b4462d.png",
      alt: "Flotte de véhicules ASR Dépannage",
      title: "Notre Flotte Professionnelle",
      description: "Aperçu de notre flotte de véhicules de dépannage Mercedes et Iveco"
    },
    {
      id: 4,
      src: "/uploads/d5ba74bc-48bf-459a-b902-1935a4bf91a9.png",
      alt: "Camion ASR en intervention industrielle",
      title: "Intervention Industrielle",
      description: "Notre équipe intervient dans tous types d'environnements industriels"
    },
    {
      id: 5,
      src: "/uploads/859ea3f9-2429-49e4-8d58-37569097dca8.png",
      alt: "Transport de véhicules haut de gamme",
      title: "Transport Sécurisé",
      description: "Transport professionnel de véhicules avec notre plateforme spécialisée"
    },
    {
      id: 6,
      src: "/uploads/f9bbde8e-30b6-4909-bf9c-b271ef4020b4.png",
      alt: "Remorque frigorifique en préparation",
      title: "Remorques Spécialisées",
      description: "Nos équipements pour le transport de marchandises sensibles"
    },
    {
      id: 7,
      src: "/uploads/1ae7f58a-6fa0-47d8-86ef-4f76a07a21ec.png",
      alt: "Ensemble routier ASR",
      title: "Transport Longue Distance",
      description: "Nos tracteurs et remorques pour les missions longue distance"
    },
    {
      id: 8,
      src: "/uploads/7836eba2-a7da-47f2-b413-e75b371eb469.png",
      alt: "Dépanneuse ASR transportant une remorque",
      title: "Dépannage Poids Lourds",
      description: "Intervention spécialisée pour le transport de remorques et poids lourds"
    },
    {
      id: 9,
      src: "/uploads/9869bfa0-b6b0-4b00-b3f2-f7b7b27f874e.png",
      alt: "Intervention nocturne ASR",
      title: "Service 24h/24",
      description: "Nos équipes interviennent de jour comme de nuit pour votre sécurité"
    },
    {
      id: 10,
      src: "/uploads/9c4e2a59-596e-4e43-877f-8c1889f8bfc2.png",
      alt: "Équipe ASR en action",
      title: "Intervention Coordonnée",
      description: "Nos équipes professionnelles coordonnent chaque intervention"
    },
    {
      id: 11,
      src: "/uploads/cf1ea782-eb21-41aa-b0dd-0407ab8b93ab.png",
      alt: "Dépannage avec équipe au sol",
      title: "Expertise Technique",
      description: "Nos techniciens expérimentés assurent des interventions sécurisées"
    },
    {
      id: 12,
      src: "/uploads/fbfd1c89-21bf-4426-b5a9-a5f5e379728d.png",
      alt: "Transport de poids lourd ASR",
      title: "Dépannage Lourd",
      description: "Transport et dépannage de véhicules industriels et poids lourds"
    },
    {
      id: 13,
      src: "/uploads/f2ed8584-b546-4c4c-b9b5-c66ec647fcaa.png",
      alt: "Dépanneuse MEGA 45 en intervention",
      title: "Équipement Spécialisé",
      description: "Nos dépanneuses haute capacité pour toutes situations"
    },
    {
      id: 14,
      src: "/uploads/ea4fe7b6-2046-417c-aaff-d971f80f262f.png",
      alt: "Camion frigorifique en transport",
      title: "Transport Frigorifique",
      description: "Spécialisation dans le transport et dépannage de véhicules frigorifiques"
    },
    {
      id: 15,
      src: "/uploads/357948da-0b73-4921-a140-5371b5270d80.png",
      alt: "Intervention nocturne avec plateforme élévatrice",
      title: "Équipement de Levage",
      description: "Intervention nocturne avec plateforme élévatrice spécialisée"
    },
    {
      id: 16,
      src: "/uploads/f5f49cbe-7dc4-41bd-a317-e52749d2086e.png",
      alt: "Plateforme élévatrice ASR en action",
      title: "Levage Professionnel",
      description: "Notre plateforme élévatrice pour interventions en hauteur"
    },
    {
      id: 17,
      src: "/uploads/6d5d977c-c7ce-4ca3-84d3-d9ac1f8a6bbe.png",
      alt: "Parc de matériel ASR Dépannage",
      title: "Matériel Spécialisé",
      description: "Notre parc de plateformes et équipements spécialisés"
    },
    {
      id: 18,
      src: "/uploads/9b45e6eb-01f7-4f52-96e2-2963cb67fa71.png",
      alt: "Véhicule ASR Dépannage en intervention",
      title: "Service Mobile",
      description: "Notre véhicule d'intervention ASR avec équipements intégrés"
    },
    {
      id: 19,
      src: "/uploads/71337174-f764-4fa0-9b86-84f47d0b86a0.png",
      alt: "Plateforme élévatrice MEGA 45",
      title: "Équipement Haute Capacité",
      description: "Plateforme élévatrice MEGA 45 pour interventions techniques"
    },
    {
      id: 20,
      src: "/uploads/ecdfdced-f37c-449c-bd31-6ddc4eb9bbe0.png",
      alt: "Transport de camion frigorifique",
      title: "Dépannage Frigorifique",
      description: "Transport spécialisé de véhicules frigorifiques"
    },
    {
      id: 21,
      src: "/uploads/f7ab5f19-766b-4584-951f-043db55c52d6.png",
      alt: "Dépanneuse ASR avec véhicule utilitaire",
      title: "Transport Utilitaire",
      description: "Transport sécurisé de véhicules utilitaires"
    },
    {
      id: 22,
      src: "/uploads/f7f13869-1827-44e8-bcf8-8d5055a9ac96.png",
      alt: "Transport de véhicule utilitaire rouge",
      title: "Dépannage Multi-Véhicules",
      description: "Transport professionnel de tous types de véhicules utilitaires"
    },
    {
      id: 23,
      src: "/uploads/420c9f45-337f-441f-95cd-fd25102003dc.png",
      alt: "Camion FIAT sur plateau ASR",
      title: "Dépannage Commercial",
      description: "Transport de véhicules commerciaux et utilitaires"
    },
    {
      id: 24,
      src: "/uploads/21405c3c-10d8-4935-881e-00b51ca5b8a8.png",
      alt: "Transport ASR dans paysage montagnard",
      title: "Intervention Régionale",
      description: "Nos services de dépannage dans toute la région Auvergne-Rhône-Alpes"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-inter font-semibold text-primary">
              NOS INTERVENTIONS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
            Galerie <span className="text-primary">Photos</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Découvrez notre savoir-faire à travers une sélection d'interventions 
            réalisées par nos équipes spécialisées.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group cursor-pointer overflow-hidden shadow-card border-border/50 hover:border-primary/20 transition-smooth hover:shadow-button"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
            Besoin d'une intervention ?
          </h3>
          <p className="text-muted-foreground font-inter mb-6">
            Contactez-nous pour une intervention rapide et professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-yellow hover:shadow-button transition-bounce font-inter font-bold"
              asChild
            >
              <a href="tel:0479855717" className="flex items-center space-x-2">
                <span>📞 04 79 85 57 17</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
              asChild
            >
              <a href="tel:0609595920" className="flex items-center space-x-2">
                <span>📱 06 09 59 59 20</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={previousImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="text-white text-sm font-inter">
                  {selectedImage + 1} / {photos.length}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;