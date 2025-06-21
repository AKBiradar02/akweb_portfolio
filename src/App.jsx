import { useState, useEffect } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/projects";
import { Contact } from "./components/sections/contact";
import BgImage from "./components/backGroundImage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (animationDone && authReady) {
      setIsLoaded(true);
    }
  }, [animationDone, authReady]);

  const handleLoadingComplete = () => {
    setAnimationDone(true);
  };

  return (
    <>
      {!isLoaded && (
        <LoadingScreen onComplete={handleLoadingComplete} authReady={authReady} />
      )}
      <BgImage />
      <div
        className={`relative flex flex-col min-h-screen ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black/30 text-gray-100 z-10`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main className="flex-grow p-4 flex flex-col overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;