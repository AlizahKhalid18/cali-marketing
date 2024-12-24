import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import ServicesSection from "./components/ServicesSection";
import ITServicesSection from "./components/ItServices";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LogoSlider />
                <ServicesSection />
                <ITServicesSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
