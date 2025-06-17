import { useState, useEffect } from "react"
import { Navbar } from "./components/navbar"
import { Sidebar } from "./components/sidebar"
import { ArtworkGrid } from "./components/artwork-grid"
// import { useLanguage } from "./contexts/language-context"

function App() {
  const [activeArtwork, setActiveArtwork] = useState<string>("");
  // const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const artworkElements = document.querySelectorAll("[data-artwork-id]");
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = artworkElements.length - 1; i >= 0; i--) {
        const element = artworkElements[i] as HTMLElement;
        const elementTop = element.offsetTop;

        if (scrollPosition >= elementTop) {
          const artworkId = element.getAttribute("data-artwork-id");
          if (artworkId && artworkId !== activeArtwork) {
            setActiveArtwork(artworkId);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeArtwork]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex">
        <Sidebar activeArtwork={activeArtwork} />

        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t("title")}
              </h1>
              <p className="text-xl text-gray-600">{t("description")}</p>
            </div> */}

            <ArtworkGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App
