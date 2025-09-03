import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyBanner = () => {
  return (
    <div className="bg-emergency text-emergency-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-sm font-inter">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="font-semibold">Disponible 24h/24 – 7j/7</span>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;