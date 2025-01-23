import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import ServicesSection from "./components/ServicesSection";
import OurServicesSection from "./components/OurServices";
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
import OurWorks from "./components/OurWorks";
import logo from "../src/assets/logo.jpg"
import AOS from "aos";
import Career from "./pages/Career";

function App() {
  useEffect(() => {

    document.title = "CALI DIGITAL MARKETING";

   
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.setAttribute("href", logo); 
      link.setAttribute("sizes", "32x32"); 
    }
  }, []);

  useEffect(() => {
    AOS.init(); 
  }, []);

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
                <OurServicesSection />
                <WhyCaliMarketing />
                <OurApproach />
                <KnowOurStory />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<PricingData />} />
          <Route path="/plan-details/:planTitle" element={<PlanDetails />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/work" element={<OurWorks />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
