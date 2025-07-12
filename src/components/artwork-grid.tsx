import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

export function ArtworkGrid() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleArtworkClick = (artworkId: string) => {
    navigate(`/artwork/${artworkId}`);
  };

  return (
    <div className="space-y-12 mr-20 lg:mr-30">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          id={`artwork-${artwork.id}`}
          className="scroll-mt-8"
          data-artwork-title={artwork.title[language]}
        >
          <Card
            className="overflow-hidden hover:shadow-lg transition-shadow w-full mx-auto ml-5 lg:ml-8 cursor-pointer group"
            onClick={() => handleArtworkClick(artwork.id)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title[language]}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/100 pointer-events-none w-1/5"></div>

                {/* Overlay with artwork title on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {artwork.title[language]}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {artwork.description[language]}
                    </p>
                    <div className="mt-3 text-xs text-gray-300">
                      {language === "zh"
                        ? "点击查看详情"
                        : "Click to view details"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
