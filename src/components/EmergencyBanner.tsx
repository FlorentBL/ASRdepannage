import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyBanner = () => {
  return (
    <div className="bg-emergency text-emergency-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm font-inter">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="font-semibold">Disponible 24h/24 – 7j/7</span>
            </div>
            <div className="hidden sm:block text-xs opacity-90">
              Temps de prise d'appel &lt; 1 min
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="border-emergency-foreground text-emergency-foreground hover:bg-emergency-foreground hover:text-emergency transition-bounce h-7 text-xs font-semibold"
            asChild
          >
            <a href="tel:0609595920" className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Urgence</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;