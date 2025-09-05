import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
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
              Service d'urgence 7j/7 en Savoie et région Rhône-Alpes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-bold text-foreground mb-6">
              Contact Urgence
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:0479855717" 
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Phone className="h-4 w-4 text-primary group-hover:animate-pulse" />
                <span className="font-inter">04 79 85 57 17</span>
              </a>
              <a 
                href="mailto:asr.alpes@wanadoo.fr" 
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-inter">asr.alpes@wanadoo.fr</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-inter">1482 Rte d'Apremont<br />73490 La Ravoire</span>
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
              <li className="text-sm text-muted-foreground font-inter">
                Remorquage VL & Utilitaires
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Dépannage Poids Lourds
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Relevage / Treuillage
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Levage & Assistance
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
              © 2025 ASR Dépannage. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.instagram.com/asrdepannage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088974981912" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
            <div className="text-center text-xs text-muted-foreground font-inter mt-4">
                Un site <a href="https://www.fbldigital.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">FBL Digital</a>
            </div>
        </div>
        {/* SEO Keywords */}
        <div className="hidden" aria-hidden="true">
          <p>
            Dépannage remorquage Savoie 73, service de dépannage et remorquage dans les communes de Savoie : 
            Aiguebelette-le-Lac, Aillon-le-Jeune, Aillon-le-Vieux, Aime-la-Plagne, Aiton, Aix-les-Bains, Albertville, Albiez-le-Jeune, Albiez-Montrond, Allondaz, Les Allues, Apremont, Arbin, Argentine, Arith, Arvillard, Attignat-Oncin, Aussois, Les Avanchers-Valmorel, Avressieux, Avrieux, Ayn, La Balme, Barberaz, Barby, Bassens, La Bâthie, La Bauche, Beaufort, Bellecombe-en-Bauges, Les Belleville, Belmont-Tramonet, Bessans, Betton-Bettonet, Billième, La Biolle, Bonneval-sur-Arc, Bonvillard, Bonvillaret, Bourdeau, Bourg-Saint-Maurice, Le Bourget-du-Lac, Bourget-en-Huile, Bourgneuf, Bozel, Brides-les-Bains, La Bridoire, Brison-Saint-Innocent, Césarches, Cevins, Challes-les-Eaux, La Chambre, Chambéry, Chamousset, Chamoux-sur-Gelon, Champ-Laurent, Champagneux, Champagny-en-Vanoise, Chanaz, La Chapelle, La Chapelle-Blanche, La Chapelle-du-Mont-du-Chat, La Chapelle-Saint-Martin, Les Chapelles, Châteauneuf, Le Châtelard, La Chavanne, Les Chavannes-en-Maurienne, Chignin, Chindrieux, Cléry, Cognin, Cohennoz, Coise-Saint-Jean-Pied-Gauthier, La Compôte, Conjux, Corbel, Courchevel, Crest-Voland, La Croix-de-la-Rochette, Cruet, Curienne, Les Déserts, Détrier, Domessin, Doucy-en-Bauges, Drumettaz-Clarafond, Dullin, Les Échelles, École, Entrelacs, Entremont-le-Vieux, Épierre, Esserts-Blay, Feissons-sur-Salins, Flumet, Fontcouverte-la-Toussuire, Fourneaux, Freney, Fréterive, Frontenex, Gerbaix, La Giettaz, Gilly-sur-Isère, Grand-Aigueblanche, Grésy-sur-Aix, Grésy-sur-Isère, Grignon, Hautecour, Hauteluce, Hauteville, Jacob-Bellecombette, Jarrier, Jarsy, Jongieux, Laissaud, Landry, La Léchère, Lépin-le-Lac, Lescheraines, Loisieux, Lucey, Marcieux, Marthod, Mercury, Méry, Meyrieux-Trouet, Modane, Les Mollettes, Montagnole, Montagny, Montailleur, Montcel, Montendry, Montgilbert, Monthion, Montmélian, Montricher-Albanne, Montsapey, Montvalezan, Montvernier, La Motte-en-Bauges, La Motte-Servolex, Motz, Moûtiers, Mouxy, Myans, Nances, Notre-Dame-de-Bellecombe, Notre-Dame-des-Millières, Notre-Dame-du-Cruet, Notre-Dame-du-Pré, Novalaise, Le Noyer, Ontex, Orelle, Pallud, Peisey-Nancroix, La Plagne Tarentaise, Planaise, Planay, Plancherine, Le Pont-de-Beauvoisin, Le Pontet, Porte-de-Savoie, Pralognan-la-Vanoise, Presle, Pugny-Chatenod, Puygros, Queige, La Ravoire, Rochefort, Rognaix, Rotherens, Ruffieux, Saint-Alban-d'Hurtières, Saint-Alban-de-Montbel, Saint-Alban-des-Villards, Saint-Alban-Leysse, Saint-André, Saint-Avre, Saint-Baldoph, Saint-Béron, Saint-Cassin, Saint-Christophe, Saint-Colomban-des-Villards, Saint-Étienne-de-Cuines, Saint-Franc, Saint-François-de-Sales, Saint François Longchamp, Saint-Genix-les-Villages, Saint-Georges-d'Hurtières, Saint-Jean-d'Arves, Saint-Jean-d'Arvey, Saint-Jean-de-Chevelu, Saint-Jean-de-Couz, Saint-Jean-de-la-Porte, Saint-Jean-de-Maurienne, Saint-Jeoire-Prieuré, Saint-Julien-Mont-Denis, Saint-Léger, Saint-Marcel, Saint-Martin-d'Arc, Saint-Martin-de-la-Porte, Saint-Martin-sur-la-Chambre, Saint-Michel-de-Maurienne, Saint-Nicolas-la-Chapelle, Saint-Offenge, Saint-Ours, Saint-Pancrace, Saint-Paul-sur-Isère, Saint-Paul-sur-Yenne, Saint-Pierre-d'Albigny, Saint-Pierre-d'Alvey, Saint-Pierre-d'Entremont, Saint-Pierre-de-Belleville, Saint-Pierre-de-Curtille, Saint-Pierre-de-Genebroz, Saint-Pierre-de-Soucy, Saint-Rémy-de-Maurienne, Saint-Sorlin-d'Arves, Saint-Sulpice, Saint-Thibaud-de-Couz, Saint-Vital, Sainte-Foy-Tarentaise, Sainte-Hélène-du-Lac, Sainte-Hélène-sur-Isère, Sainte-Marie-d'Alvey, Sainte-Marie-de-Cuines, Sainte-Reine, Salins-Fontaine, Séez, Serrières-en-Chautagne, Sonnaz, La Table, Thénésol, Thoiry, La Thuile, Tignes, La Tour-en-Maurienne, Tournon, Tours-en-Savoie, Traize, Tresserve, Trévignin, La Trinité, Ugine, Val-Cenis, Val-d'Arc, Val-d'Isère, Valgelon-La Rochette, Valloire, Valmeinier, Venthon, Verel-de-Montbel, Verel-Pragondran, Le Verneil, Verrens-Arvey, Verthemex, Villard-d'Héry, Villard-Léger, Villard-Sallet, Villard-sur-Doron, Villarembert, Villargondran, Villarodin-Bourget, Villaroger, Villaroux, Vimines, Vions, Viviers-du-Lac, Voglans, Yenne.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;