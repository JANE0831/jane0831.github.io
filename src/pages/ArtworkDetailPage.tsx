import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Button } from "../components/ui/button";
import { Carousel } from "../components/ui/carousel";
import { ArrowLeft } from "lucide-react";

export function ArtworkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const artwork = artworks.find((art) => art.id === id);

  if (!artwork) {
    return (
      <div className="flex mt-40 min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            {language === "zh" ? "作品未找到" : "Artwork not found"}
          </h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "zh" ? "返回首页" : "Back to Home"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-40 pb-8 px-6">
      <div className="max-w-8xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-6 text-gray-100 border-gray-600 hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "zh" ? "返回首页" : "Back to Home"}
        </Button>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-100 text-center">
            {artwork.title[language]}
          </h1>

          <Carousel images={artwork.assets} className="w-full" />
        </div>
      </div>
    </div>
  );
}
