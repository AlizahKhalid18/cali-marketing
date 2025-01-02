import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import ServicesSection from "./components/ServicesSection";
import ITServicesSection from "./components/ItServices";
import AboutUs from "./pages/AboutUs";
import "./App.css";
import WhyCaliMarketing from "./components/WhyCaliMarketing";
import ContactUs from "./pages/ContactUs";
import PricingData from "./pages/PricingData";
import OurApproach from "./components/OurApproach";
import Footer from "./components/Footer";
import PlanDetails from "./pages/PlanDetails";
import KnowOurStory from "./components/KnowOurStory";
import FAQSection from "./components/FAQSection";

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
                <WhyCaliMarketing />
                <OurApproach/>
                <KnowOurStory/>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<PricingData/>} />
          <Route path="/plan-details/:planTitle" element={<PlanDetails />} />
          <Route path="/faq" element={< FAQSection />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
