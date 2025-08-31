import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const interventionPhotos = [
    {
      id: 1,
      src: "/lovable-uploads/317c5ae6-02bc-46af-a294-f51dac611536.png",
      alt: "Transport de véhicules par ASR Dépannage",
      title: "Transport Multi-Véhicules",
      description: "Notre camion plateau transportant plusieurs véhicules lors d'une intervention"
    },
    {
      id: 2,
      src: "/lovable-uploads/7a536816-98a7-45b6-abfd-51256b91c756.png",
      alt: "Intervention ASR avec véhicule sur plateau",
      title: "Dépannage Professionnel",
      description: "Intervention de remorquage avec notre véhicule spécialisé ASR"
    },
    {
      id: 3,
      src: "/lovable-uploads/8cb8221f-447f-4efa-a168-c06919b4462d.png",
      alt: "Flotte de véhicules ASR Dépannage",
      title: "Notre Flotte Professionnelle",
      description: "Aperçu de notre flotte de véhicules de dépannage Mercedes et Iveco"
    },
    {
      id: 4,
      src: "/lovable-uploads/d5ba74bc-48bf-459a-b902-1935a4bf91a9.png",
      alt: "Camion ASR en intervention industrielle",
      title: "Intervention Industrielle",
      description: "Notre équipe intervient dans tous types d'environnements industriels"
    },
    {
      id: 5,
      src: "/lovable-uploads/859ea3f9-2429-49e4-8d58-37569097dca8.png",
      alt: "Transport de véhicules haut de gamme",
      title: "Transport Sécurisé",
      description: "Transport professionnel de véhicules avec notre plateforme spécialisée"
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
      setSelectedImage(selectedImage === 0 ? interventionPhotos.length - 1 : selectedImage - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % interventionPhotos.length);
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
          {interventionPhotos.map((photo, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
                    <h3 className="font-montserrat font-bold text-lg mb-1">
                      {photo.title}
                    </h3>
                    <p className="font-inter text-sm text-white/90">
                      {photo.description}
                    </p>
                  </div>
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
                src={interventionPhotos[selectedImage].src}
                alt={interventionPhotos[selectedImage].alt}
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

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-montserrat font-bold text-xl mb-2">
                  {interventionPhotos[selectedImage].title}
                </h3>
                <p className="text-white/90 font-inter">
                  {interventionPhotos[selectedImage].description}
                </p>
                <div className="text-white/70 text-sm mt-2">
                  {selectedImage + 1} / {interventionPhotos.length}
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