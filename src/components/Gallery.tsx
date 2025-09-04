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
      "id": 1,
      "src": "/uploads/105.jpg",
      "alt": "Intervention ASR Dépannage - Photo 1",
      "title": "Intervention #1",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 2,
      "src": "/uploads/106.jpg",
      "alt": "Intervention ASR Dépannage - Photo 2",
      "title": "Intervention #2",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 3,
      "src": "/uploads/11.jpg",
      "alt": "Intervention ASR Dépannage - Photo 3",
      "title": "Intervention #3",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 4,
      "src": "/uploads/13.jpg",
      "alt": "Intervention ASR Dépannage - Photo 4",
      "title": "Intervention #4",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 5,
      "src": "/uploads/15.jpg",
      "alt": "Intervention ASR Dépannage - Photo 5",
      "title": "Intervention #5",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 6,
      "src": "/uploads/16.jpg",
      "alt": "Intervention ASR Dépannage - Photo 6",
      "title": "Intervention #6",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 7,
      "src": "/uploads/19.jpg",
      "alt": "Intervention ASR Dépannage - Photo 7",
      "title": "Intervention #7",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 8,
      "src": "/uploads/20.jpg",
      "alt": "Intervention ASR Dépannage - Photo 8",
      "title": "Intervention #8",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 9,
      "src": "/uploads/21.jpg",
      "alt": "Intervention ASR Dépannage - Photo 9",
      "title": "Intervention #9",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 10,
      "src": "/uploads/24.jpg",
      "alt": "Intervention ASR Dépannage - Photo 10",
      "title": "Intervention #10",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 11,
      "src": "/uploads/25.jpg",
      "alt": "Intervention ASR Dépannage - Photo 11",
      "title": "Intervention #11",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 12,
      "src": "/uploads/26.jpg",
      "alt": "Intervention ASR Dépannage - Photo 12",
      "title": "Intervention #12",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 13,
      "src": "/uploads/27.jpg",
      "alt": "Intervention ASR Dépannage - Photo 13",
      "title": "Intervention #13",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 14,
      "src": "/uploads/28.jpg",
      "alt": "Intervention ASR Dépannage - Photo 14",
      "title": "Intervention #14",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 15,
      "src": "/uploads/29.jpg",
      "alt": "Intervention ASR Dépannage - Photo 15",
      "title": "Intervention #15",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 16,
      "src": "/uploads/30.jpg",
      "alt": "Intervention ASR Dépannage - Photo 16",
      "title": "Intervention #16",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 17,
      "src": "/uploads/31.jpg",
      "alt": "Intervention ASR Dépannage - Photo 17",
      "title": "Intervention #17",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 18,
      "src": "/uploads/32.jpg",
      "alt": "Intervention ASR Dépannage - Photo 18",
      "title": "Intervention #18",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 19,
      "src": "/uploads/33.jpg",
      "alt": "Intervention ASR Dépannage - Photo 19",
      "title": "Intervention #19",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 20,
      "src": "/uploads/34.jpg",
      "alt": "Intervention ASR Dépannage - Photo 20",
      "title": "Intervention #20",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 21,
      "src": "/uploads/35.jpg",
      "alt": "Intervention ASR Dépannage - Photo 21",
      "title": "Intervention #21",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 22,
      "src": "/uploads/36.jpg",
      "alt": "Intervention ASR Dépannage - Photo 22",
      "title": "Intervention #22",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 23,
      "src": "/uploads/37.jpg",
      "alt": "Intervention ASR Dépannage - Photo 23",
      "title": "Intervention #23",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 24,
      "src": "/uploads/38.jpg",
      "alt": "Intervention ASR Dépannage - Photo 24",
      "title": "Intervention #24",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 25,
      "src": "/uploads/39.jpg",
      "alt": "Intervention ASR Dépannage - Photo 25",
      "title": "Intervention #25",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 26,
      "src": "/uploads/40.jpg",
      "alt": "Intervention ASR Dépannage - Photo 26",
      "title": "Intervention #26",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 27,
      "src": "/uploads/41.jpg",
      "alt": "Intervention ASR Dépannage - Photo 27",
      "title": "Intervention #27",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 28,
      "src": "/uploads/42.jpg",
      "alt": "Intervention ASR Dépannage - Photo 28",
      "title": "Intervention #28",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 29,
      "src": "/uploads/43.jpg",
      "alt": "Intervention ASR Dépannage - Photo 29",
      "title": "Intervention #29",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 30,
      "src": "/uploads/44.jpg",
      "alt": "Intervention ASR Dépannage - Photo 30",
      "title": "Intervention #30",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 31,
      "src": "/uploads/45.jpg",
      "alt": "Intervention ASR Dépannage - Photo 31",
      "title": "Intervention #31",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 32,
      "src": "/uploads/46.jpg",
      "alt": "Intervention ASR Dépannage - Photo 32",
      "title": "Intervention #32",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 33,
      "src": "/uploads/47.jpg",
      "alt": "Intervention ASR Dépannage - Photo 33",
      "title": "Intervention #33",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 34,
      "src": "/uploads/48.jpg",
      "alt": "Intervention ASR Dépannage - Photo 34",
      "title": "Intervention #34",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 35,
      "src": "/uploads/49.jpg",
      "alt": "Intervention ASR Dépannage - Photo 35",
      "title": "Intervention #35",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 36,
      "src": "/uploads/50.jpg",
      "alt": "Intervention ASR Dépannage - Photo 36",
      "title": "Intervention #36",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 37,
      "src": "/uploads/51.jpg",
      "alt": "Intervention ASR Dépannage - Photo 37",
      "title": "Intervention #37",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 38,
      "src": "/uploads/52.jpg",
      "alt": "Intervention ASR Dépannage - Photo 38",
      "title": "Intervention #38",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 39,
      "src": "/uploads/53.jpg",
      "alt": "Intervention ASR Dépannage - Photo 39",
      "title": "Intervention #39",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 40,
      "src": "/uploads/54.jpg",
      "alt": "Intervention ASR Dépannage - Photo 40",
      "title": "Intervention #40",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 41,
      "src": "/uploads/55.jpg",
      "alt": "Intervention ASR Dépannage - Photo 41",
      "title": "Intervention #41",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 42,
      "src": "/uploads/56.jpg",
      "alt": "Intervention ASR Dépannage - Photo 42",
      "title": "Intervention #42",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 43,
      "src": "/uploads/57.jpg",
      "alt": "Intervention ASR Dépannage - Photo 43",
      "title": "Intervention #43",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 44,
      "src": "/uploads/58.jpg",
      "alt": "Intervention ASR Dépannage - Photo 44",
      "title": "Intervention #44",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 45,
      "src": "/uploads/59.jpg",
      "alt": "Intervention ASR Dépannage - Photo 45",
      "title": "Intervention #45",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 46,
      "src": "/uploads/6.jpg",
      "alt": "Intervention ASR Dépannage - Photo 46",
      "title": "Intervention #46",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 47,
      "src": "/uploads/60.jpg",
      "alt": "Intervention ASR Dépannage - Photo 47",
      "title": "Intervention #47",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 48,
      "src": "/uploads/61.jpg",
      "alt": "Intervention ASR Dépannage - Photo 48",
      "title": "Intervention #48",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 49,
      "src": "/uploads/62.jpg",
      "alt": "Intervention ASR Dépannage - Photo 49",
      "title": "Intervention #49",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 50,
      "src": "/uploads/7.jpg",
      "alt": "Intervention ASR Dépannage - Photo 50",
      "title": "Intervention #50",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 51,
      "src": "/uploads/91.jpg",
      "alt": "Intervention ASR Dépannage - Photo 51",
      "title": "Intervention #51",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 52,
      "src": "/uploads/92.jpg",
      "alt": "Intervention ASR Dépannage - Photo 52",
      "title": "Intervention #52",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 53,
      "src": "/uploads/93.jpg",
      "alt": "Intervention ASR Dépannage - Photo 53",
      "title": "Intervention #53",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 54,
      "src": "/uploads/94.jpg",
      "alt": "Intervention ASR Dépannage - Photo 54",
      "title": "Intervention #54",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
    },
    {
      "id": 55,
      "src": "/uploads/95.jpg",
      "alt": "Intervention ASR Dépannage - Photo 55",
      "title": "Intervention #55",
      "description": "Photo d'une de nos interventions de dépannage ou remorquage."
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
        <DialogContent className="max-w-6xl w-full p-2 bg-black/90 border-none flex flex-col">
          {selectedImage !== null && (
            <>
              <div className="relative flex-grow flex items-center justify-center">
                <img
                  key={photos[selectedImage].src}
                  src={photos[selectedImage].src}
                  alt={photos[selectedImage].alt}
                  className="w-full h-auto max-h-[75vh] object-contain lightbox-image-fade"
                />
                
                

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

              {/* Thumbnail Strip */}
              <div className="w-full overflow-x-auto py-2">
                <div className="flex justify-center space-x-2 px-2">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedImage(index)}
                      className="cursor-pointer flex-shrink-0"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className={`w-20 h-14 object-cover rounded-md border-2 transition-all ${
                          selectedImage === index
                            ? "border-primary scale-105"
                            : "border-transparent hover:border-white/50"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;