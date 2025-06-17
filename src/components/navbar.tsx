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
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-900">
          {t("title")}
        </a>

        <div className="flex items-center space-x-8">
          <a
            href="/trajectory"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {t("trajectory")}
          </a>

          <a
            href="/interpretation"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {t("interpretation")}
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <span>{t("language")}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg">
              <DropdownMenuItem
                onClick={() => setLanguage("zh")}
                className={language === "zh" ? "bg-gray-100" : ""}
              >
                {t("chinese")}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-gray-100" : ""}
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
