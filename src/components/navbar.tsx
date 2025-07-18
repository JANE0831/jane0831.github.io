import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="px-6 pt-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-32 w-auto lg:ml-10" />
        </Link>

        <div className="flex items-center space-x-8">
          <Link
            to="/trajectory"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("trajectory")}
          </Link>

          <Link
            to="/explore"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("explore")}
          </Link>

          <Link
            to="/interpretation"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("interpretation")}
          </Link>

          <Link
            to="/code"
            className="text-red-400 hover:text-red-600 transition-colors"
          >
            {t("code")}
          </Link>
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
