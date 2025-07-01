import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-black px-6 pt-4">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold text-red-600 text-shadow-red-800 text-shadow-md"
        >
          <span className="text-9xl">J</span>
          <span className="text-6xl">ane</span>
          <span className="text-8xl">.Z</span>
          <span className="text-6xl">eng</span>
          <span className="text-2xl">曾翔羽</span>
        </a>

        <div className="flex items-center space-x-8">
          <a
            href="/trajectory"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("trajectory")}
          </a>

          <a
            href="/interpretation"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("interpretation")}
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <span className="text-red-400 hover:text-red-600 transition-colors">
                  {t("language")}
                </span>
                <ChevronDown className="h-4 w-4" color="red" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 shadow-lg">
              <DropdownMenuItem
                onClick={() => setLanguage("zh")}
                className={
                  language === "zh"
                    ? "bg-red-800 text-gray-100"
                    : "text-red-600"
                }
              >
                {t("chinese")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={
                  language === "en" ? "bg-red-800 text-white" : "text-red-600"
                }
              >
                {t("english")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
