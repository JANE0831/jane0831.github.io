import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Card, CardContent } from "./ui/card";


export function ArtworkGrid() {
  const { language } = useLanguage();

  return (
    <div className="space-y-12 mr-20 lg:mr-30">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          id={`artwork-${artwork.id}`}
          className="scroll-mt-8"
          data-artwork-title={artwork.title[language]}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow w-full mx-auto ml-5 lg:ml-8">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title[language]}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/100 pointer-events-none w-1/5"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
