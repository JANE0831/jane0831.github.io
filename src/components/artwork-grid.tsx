import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";


export function ArtworkGrid() {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          id={`artwork-${artwork.id}`}
          className="scroll-mt-8"
          data-artwork-id={artwork.id}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="relative aspect-[21/9] overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title[language]}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardContent>
            <CardFooter className="p-6">
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
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
