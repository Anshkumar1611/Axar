import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Layouts/header/Navbar";
import Footer from "./components/Layouts/footer/Footer";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import Services from "./pages/Services";
import Inclusion from "./pages/Inclusion";
import Contact from "./pages/Contact";
import Journey from "./pages/About/Journey";
import Team from "./pages/About/Team";
import Testimonial from "./pages/About/Testimonial";
import SmoothScroll from "./components/SmoothScroll";
import Videos from "./pages/Gallery/Videos";
import Designs from "./pages/Gallery/Designs";
import GalleryImages from "./pages/Gallery/GalleryImages";
import Faq from "./pages/Faq";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollButton from "./components/common/buttons/ScrollButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/journey" element={<Journey />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/testimonial" element={<Testimonial />} />
          <Route path="/whyUs" element={<WhyUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inclusion" element={<Inclusion />} />
          <Route path="/gallery/images" element={<GalleryImages />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/gallery/designs" element={<Designs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollButton />
      </SmoothScroll>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
