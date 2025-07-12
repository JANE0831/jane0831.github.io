import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/language-context";
import { artworks } from "../data/artworks";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft } from "lucide-react";

export function ArtworkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

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
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-6 text-gray-100 border-gray-600 hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {language === "zh" ? "返回首页" : "Back to Home"}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="overflow-hidden bg-gray-900 border-gray-700">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title[language]}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-gray-100">
                    {artwork.title[language]}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="bg-red-800 text-gray-100"
                  >
                    {artwork.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {language === "zh" ? "描述" : "Description"}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {artwork.description[language]}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-2">
                      {language === "zh" ? "作品信息" : "Artwork Information"}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>{language === "zh" ? "作品编号:" : "ID:"}</span>
                        <span>{artwork.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === "zh" ? "类别:" : "Category:"}</span>
                        <span className="capitalize">{artwork.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          {language === "zh"
                            ? "标题 (中文):"
                            : "Title (Chinese):"}
                        </span>
                        <span>{artwork.title.zh}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          {language === "zh"
                            ? "标题 (英文):"
                            : "Title (English):"}
                        </span>
                        <span>{artwork.title.en}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-100">
                  {language === "zh" ? "相关作品" : "Related Artworks"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {artworks
                    .filter(
                      (art) =>
                        art.category === artwork.category &&
                        art.id !== artwork.id
                    )
                    .slice(0, 4)
                    .map((relatedArt) => (
                      <div
                        key={relatedArt.id}
                        className="cursor-pointer group"
                        onClick={() => navigate(`/artwork/${relatedArt.id}`)}
                      >
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={relatedArt.image || "/placeholder.svg"}
                            alt={relatedArt.title[language]}
                            className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                        </div>
                        <p className="text-xs text-gray-300 mt-2 truncate">
                          {relatedArt.title[language]}
                        </p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
