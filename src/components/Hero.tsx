import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asr-truck.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Camion Mercedes ASR - Spécialiste dépannage poids lourds Rhône-Alpes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl">
          {/* Emergency Badge */}
          <div className="inline-flex items-center space-x-2 bg-emergency/20 border border-emergency/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emergency rounded-full animate-pulse" />
            <span className="text-sm font-inter font-semibold text-emergency">
              INTERVENTION IMMÉDIATE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-montserrat font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Dépannage</span> &{" "}
            <span className="text-primary">Remorquage</span>
            <br />
            <span className="text-3xl lg:text-5xl xl:text-6xl text-muted-foreground font-semibold">
              24/7 – VL, Utilitaires, Poids Lourds & Bus
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 font-inter max-w-3xl">
            Intervention rapide en <span className="text-primary font-semibold">Rhône-Alpes</span> au départ de{" "}
            <span className="text-primary font-semibold">Chambéry</span>. Rapatriements depuis l'Italie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="gradient-yellow hover:shadow-button transition-bounce text-lg font-inter font-bold px-8 py-4 h-14"
              asChild
            >
              <a href="tel:0479855717" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>📞 Appeler 04 79 85 57 17</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce text-lg font-inter font-semibold px-8 py-4 h-14"
              asChild
            >
              <a href="/contact" className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5" />
                <span>Demander un devis</span>
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border/30">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-montserrat font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Disponibilité continue
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-montserrat font-bold text-primary mb-1">
                Rhône-Alpes
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Zone d'intervention
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border/50" />
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-montserrat font-bold text-primary mb-1">
                Poids Lourds
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Spécialité
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;