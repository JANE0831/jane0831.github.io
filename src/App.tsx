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
      const artworkElements = document.querySelectorAll("[data-artwork-title]");
      const scrollPosition = window.scrollY + 500; // Offset for better detection

      for (let i = artworkElements.length - 1; i >= 0; i--) {
        const element = artworkElements[i] as HTMLElement;
        const elementTop = element.offsetTop;

        if (scrollPosition >= elementTop) {
          const artworkTitle = element.getAttribute("data-artwork-title");
          if (artworkTitle && artworkTitle !== activeArtwork) {
            setActiveArtwork(artworkTitle);
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
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />

      <div className="flex mt-40">
        <Sidebar activeArtwork={activeArtwork} />

        <main className="flex-1 pb-8">
          <div className="max-w-8xl -ml-40 -mt-11 -z-1 lg:-ml-20">
            {/* <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t("title")}
              </h1>
              <p className="text-xl text-gray-600">{t("description")}</p>
            </div> */}
            <div className="relative overflow-hidden">
              <img
                src={"cover.png"}
                alt={"cover"}
                className="object-cover transition-transform duration-300 mb-12 lg:mb-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/100 pointer-events-none w-1/5"></div>
            </div>

            <ArtworkGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App
