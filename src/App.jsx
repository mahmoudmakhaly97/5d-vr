import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ClientTestimonials,
  CompanyValues,
  HomePage,
  MeetTheTeam,
  OurVision,
  WhyChoose5dVr,
} from "./pages";
import {Navbar} from "./components";
import { Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="our-vision" element={<OurVision />} />
        <Route path="company-values" element={<CompanyValues />} />
        <Route path="why-choose-5dvr" element={<WhyChoose5dVr />} />
        <Route path="meet-the-team" element={<MeetTheTeam />} />
        <Route path="client-testimonials" element={<ClientTestimonials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
