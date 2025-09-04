import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  telephone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  email: z.string().email("Veuillez entrer un email valide").optional().or(z.literal("")),
  lieu: z.string().min(3, "Veuillez préciser le lieu d'intervention"),
  vehicule: z.string().min(2, "Veuillez préciser le type de véhicule"),
  probleme: z.string().min(10, "Veuillez décrire le problème en détail")
});
type ContactFormData = z.infer<typeof contactSchema>;
const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      telephone: "",
      email: "",
      lieu: "",
      vehicule: "",
      probleme: ""
    }
  });
  const generateMailto = (data: ContactFormData) => {
    const subject = encodeURIComponent(`[URGENCE/DEVIS] Demande d'intervention - ${data.nom}`);
    const body = encodeURIComponent(`
Bonjour,

Je vous contacte pour une demande d'intervention avec les informations suivantes :

👤 CONTACT :
- Nom : ${data.nom}
- Téléphone : ${data.telephone}
- Email : ${data.email || "Non renseigné"}

📍 INTERVENTION :
- Lieu : ${data.lieu}
- Type de véhicule : ${data.vehicule}

🚨 PROBLÈME :
${data.probleme}

📷 PHOTOS :
Veuillez trouver ci-joint les photos de la situation si disponibles.

Merci de me recontacter rapidement pour organiser l'intervention.

Cordialement,
${data.nom}
    `);
    return `mailto:asr.alpes@wanadoo.fr?subject=${subject}&body=${body}`;
  };
  const onSubmit = (data: ContactFormData) => {
    const mailtoLink = generateMailto(data);
    window.location.href = mailtoLink;
    toast.success("Email ouvert avec vos informations !");
  };
  return <div className="min-h-screen py-20">
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

                <CtaButton href="tel:0479855717" className="w-full">
                  Appeler maintenant
                </CtaButton>

                
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
                    <div className="font-inter font-medium text-foreground">asr.alpes@wanadoo.fr</div>
                    <div className="text-sm text-muted-foreground">Devis & informations</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-inter font-medium text-foreground">1482 Rte d'Apremont<br />73490 La Ravoire</div>
                    <div className="text-sm text-muted-foreground">Siège social</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-inter font-medium text-foreground">24h/24 - 7j/7</div>
                    <div className="text-sm text-muted-foreground">Permanence d'urgence</div>
                    <div className="text-sm text-muted-foreground mt-1">Ouvert 7j/7</div>
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="nom" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="font-inter font-medium">Nom *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" className="bg-background border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="telephone" render={({
                      field
                    }) => <FormItem>
                            <FormLabel className="font-inter font-medium">Téléphone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Votre numéro" className="bg-background border-border/50 focus:border-primary" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="email" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="font-inter font-medium">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" className="bg-background border-border/50 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="lieu" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="font-inter font-medium">Lieu d'intervention *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ville, autoroute, adresse précise..." className="bg-background border-border/50 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="vehicule" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="font-inter font-medium">Type de véhicule *</FormLabel>
                          <FormControl>
                            <Input placeholder="VL, utilitaire, poids lourd, bus..." className="bg-background border-border/50 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="probleme" render={({
                    field
                  }) => <FormItem>
                          <FormLabel className="font-inter font-medium">Description du problème *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Panne, accident, véhicule à remorquer..." rows={4} className="bg-background border-border/50 focus:border-primary resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <div className="space-y-2">
                      <Label htmlFor="photos" className="font-inter font-medium">Photos (recommandé)</Label>
                      <Input id="photos" type="file" multiple accept="image/*" className="bg-background border-border/50 focus:border-primary" />
                      <div className="text-xs text-muted-foreground font-inter">
                        Photos du véhicule et de la situation - Joindre manuellement à l'email
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="gradient-yellow hover:shadow-button transition-bounce font-inter font-bold flex-1">
                        📧 Ouvrir l'email
                      </Button>
                      <Button type="button" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce" asChild>
                        <a href="tel:0479855717">📞 Urgence ? Appeler</a>
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;