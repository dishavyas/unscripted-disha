import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Packages from "./pages/Packages/Packages";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* =========================================
          COMMON NAVBAR
      ========================================= */}

      <Navbar />


      {/* =========================================
          ROUTES
      ========================================= */}

      <Routes>

        {/* =========================================
            HOME
        ========================================= */}

        <Route
          path="/"
          element={
            <main className="site-content">

              <Hero />

              <Services />

              <Portfolio />

              <About />

              <Testimonials />

            </main>
          }
        />


        {/* =========================================
            PACKAGES
        ========================================= */}

        <Route
          path="/packages/:slug"
          element={<Packages />}
        />


        {/* =========================================
            ABOUT
        ========================================= */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* =========================================
            PORTFOLIO
        ========================================= */}

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />


        {/* =========================================
            TESTIMONIALS
        ========================================= */}

        <Route
          path="/testimonials"
          element={<Testimonials />}
        />

      </Routes>
       <Footer />
    </>
  );
}

export default App;