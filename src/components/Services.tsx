import { Truck, Move3D, Wrench, Construction, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/CtaButton";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Remorquage VL & Utilitaires",
      description: "Panne, accident, autoroute/rocade, rapatriement atelier. Intervention rapide avec équipement adapté.",
      features: ["Dépannage sur site", "Transport sécurisé", "Assistance 24/7"],
    },
    {
      icon: Move3D,
      title: "Poids Lourds & Bus",
      description: "Dépannages complexes, sécurisation, dégagement. Expertise technique pour véhicules lourds.",
      features: ["Interventions spécialisées", "Matériel lourd", "Sécurisation autoroutes"],
    },
    {
      icon: Wrench,
      title: "Relevage / Treuillage",
      description: "Ensembles routiers, remises sur roues, assistance grue. Solutions techniques avancées.",
      features: ["Relevage précis", "Treuillage sécurisé", "Assistance technique"],
    },
    {
      icon: Construction,
      title: "Levage & Assistance",
      description: "Manutention lourde, convoi bloqué, engins spéciaux. Équipement de levage professionnel.",
      features: ["Grues mobiles", "Levage lourd", "Assistance spécialisée"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
            Nos <span className="text-primary">Services</span> Professionnels
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Une gamme complète de services de dépannage et remorquage pour tous types de véhicules,
            disponible 24h/24 et 7j/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="gradient-card shadow-card border-border/50 hover:border-primary/20 transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-yellow rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-montserrat font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground font-inter">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-bounce group-hover:shadow-button"
                        asChild
                      >
                        <a href="tel:0479855717" className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>Besoin d'aide ? Appeler 04 79 85 57 17</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
            Une urgence ? Contactez-nous immédiatement
          </h3>
          <p className="text-muted-foreground font-inter mb-6">
            Notre équipe d'intervention est disponible 24h/24 pour tous vos besoins de dépannage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="tel:0479855717">Intervention immédiate</CtaButton>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce text-lg font-inter font-semibold px-8 py-4 h-14"
              asChild
            >
              <a href="/contact" className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5" />
                <span>Demander un devis</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;