import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/header/Navbar";
import Footer from "./components/Layouts/footer/Footer";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import Services from "./pages/Services";
import Inclusion from "./pages/Inclusion";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Journey from "./components/Layouts/About/Journey";
import Team from "./components/Layouts/About/Team";
import Testimonial from "./components/Layouts/About/Testimonial";
import SmoothScroll from './components/SmoothScroll';


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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </SmoothScroll>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
