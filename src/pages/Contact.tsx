import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-foreground mb-6">
            Contactez <span className="text-primary">ASR Dépannage</span>
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Urgence ou demande de devis ? Nous sommes disponibles 24h/24 et 7j/7 
            pour répondre à tous vos besoins de dépannage et remorquage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Contact Urgence 24/7</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <Phone className="h-8 w-8 text-primary animate-pulse" />
                  <div>
                    <div className="text-2xl font-montserrat font-bold text-foreground">
                      04 79 85 57 17
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      Intervention immédiate - Ligne directe
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full gradient-yellow hover:shadow-button transition-bounce font-inter font-bold"
                  asChild
                >
                  <a href="tel:0479855717" className="flex items-center justify-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>📞 Appeler maintenant</span>
                  </a>
                </Button>

                <div className="flex items-center space-x-4 p-4 bg-secondary/20 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                  <div>
                    <div className="text-lg font-montserrat font-semibold text-foreground">
                      WhatsApp Urgence
                    </div>
                    <div className="text-sm text-muted-foreground font-inter">
                      Envoyez photos + localisation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Autres contacts */}
            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold text-foreground">
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-inter font-medium text-foreground">[EMAIL]</div>
                    <div className="text-sm text-muted-foreground">Devis & informations</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-inter font-medium text-foreground">[ADRESSE_SIEGE]</div>
                    <div className="text-sm text-muted-foreground">Siège social</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-inter font-medium text-foreground">24h/24 - 7j/7</div>
                    <div className="text-sm text-muted-foreground">Permanence d'urgence</div>
                    <div className="text-sm text-muted-foreground mt-1">[HORAIRES]</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zone d'intervention */}
            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold text-foreground">
                  Zone d'intervention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm font-inter">
                  <div className="text-muted-foreground">• Savoie (73)</div>
                  <div className="text-muted-foreground">• Haute-Savoie (74)</div>
                  <div className="text-muted-foreground">• Isère (38)</div>
                  <div className="text-muted-foreground">• Rhône (69)</div>
                  <div className="text-muted-foreground">• Ain (01)</div>
                  <div className="text-primary font-medium">• A41, A43, A40</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire */}
          <div>
            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground">
                  Demande de devis / Urgence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom" className="font-inter font-medium">Nom *</Label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="font-inter font-medium">Téléphone *</Label>
                      <Input 
                        id="telephone" 
                        type="tel" 
                        placeholder="Votre numéro"
                        className="bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-inter font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lieu" className="font-inter font-medium">Lieu d'intervention *</Label>
                    <Input 
                      id="lieu" 
                      placeholder="Ville, autoroute, adresse précise..."
                      className="bg-background border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicule" className="font-inter font-medium">Type de véhicule *</Label>
                    <Input 
                      id="vehicule" 
                      placeholder="VL, utilitaire, poids lourd, bus..."
                      className="bg-background border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="probleme" className="font-inter font-medium">Description du problème *</Label>
                    <Textarea 
                      id="probleme"
                      placeholder="Panne, accident, véhicule à remorquer..."
                      rows={4}
                      className="bg-background border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photos" className="font-inter font-medium">Photos (recommandé)</Label>
                    <Input 
                      id="photos" 
                      type="file" 
                      multiple 
                      accept="image/*"
                      className="bg-background border-border/50 focus:border-primary"
                    />
                    <div className="text-xs text-muted-foreground font-inter">
                      Photos du véhicule et de la situation (format: JPG, PNG)
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="gradient-yellow hover:shadow-button transition-bounce font-inter font-bold flex-1"
                    >
                      Envoyer la demande
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      size="lg" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
                      asChild
                    >
                      <a href="tel:0479855717">Urgence ? Appeler</a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;