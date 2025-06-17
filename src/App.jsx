import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";
import BgImage from "./components/backGroundImage";
import Footer from "./components/Footer";
import Admin from "./components/Admin"; // Import the new Admin component

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <BgImage />

      <div
        className={`flex flex-col min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black bg-opacity-30 text-gray-100 z-10`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex-grow p-4">
                  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <Home />
                  <About />
                  <Projects />
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
