import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-yellow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">ASR</span>
              </div>
              <div>
                <div className="text-lg font-montserrat font-bold text-foreground">
                  ASR Dépannage
                </div>
                <div className="text-xs text-muted-foreground">
                  Intervention 24/7
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
              Spécialiste du dépannage et remorquage VL, utilitaires, poids lourds et bus. 
              Service d'urgence 24h/24 en Savoie et région Rhône-Alpes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-bold text-foreground mb-6">
              Contact Urgence
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:[NUM_TEL]" 
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Phone className="h-4 w-4 text-primary group-hover:animate-pulse" />
                <span className="font-inter">[NUM_TEL]</span>
              </a>
              <a 
                href="mailto:[EMAIL]" 
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-inter">[EMAIL]</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter">[ADRESSE_SIEGE]</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="font-inter">
                  <div className="font-semibold text-primary">24h/24 - 7j/7</div>
                  <div>Permanence d'urgence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-montserrat font-bold text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services/remorquage-vl" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
                >
                  Remorquage VL & Utilitaires
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/poids-lourds" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
                >
                  Dépannage Poids Lourds
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/relevage" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
                >
                  Relevage / Treuillage
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/levage" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
                >
                  Levage & Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone */}
          <div>
            <h3 className="text-lg font-montserrat font-bold text-foreground mb-6">
              Zone d'intervention
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-inter">
              <li>• Savoie (73)</li>
              <li>• Haute-Savoie (74)</li>
              <li>• Isère (38)</li>
              <li>• Rhône (69)</li>
              <li>• Ain (01)</li>
              <li className="text-primary font-medium">• Autoroutes A41, A43, A40</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground font-inter">
              © 2024 ASR Dépannage & Levage. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/mentions-legales" 
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
              >
                Mentions légales
              </Link>
              <Link 
                to="/politique-confidentialite" 
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
              >
                Confidentialité
              </Link>
              <Link 
                to="/cookies" 
                className="text-sm text-muted-foreground hover:text-primary transition-smooth font-inter"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;