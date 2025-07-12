import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/HomePage";
import { TrajectoryPage } from "./pages/TrajectoryPage";
import { ExplorePage } from "./pages/ExplorePage";
import { InterpretationPage } from "./pages/InterpretationPage";
import { CodePage } from "./pages/CodePage";
import { ArtworkDetailPage } from "./pages/ArtworkDetailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trajectory" element={<TrajectoryPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/interpretation" element={<InterpretationPage />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/artwork/:id" element={<ArtworkDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
