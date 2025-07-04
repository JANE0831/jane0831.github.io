import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Card, CardContent } from "./ui/card";


export function ArtworkGrid() {
  const { language } = useLanguage();

  return (
    <div className="space-y-12">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          id={`artwork-${artwork.id}`}
          className="scroll-mt-8"
          data-artwork-id={artwork.id}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow w-full mx-auto">
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
            {/* <CardFooter className="p-6">
              <div className="w-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-2">
                  {artwork.title[language]}
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  {artwork.medium[language]} • {artwork.year} •{" "}
                  {artwork.dimensions}
                </p>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  {artwork.description[language]}
                </p>
                <a href={`/artwork/${artwork.id}`}>
                  <Button variant="outline" size="default">
                    {t("viewDetails")}
                  </Button>
                </a>
              </div>
            </CardFooter> */}
          </Card>
        </div>
      ))}
    </div>
  );
}
