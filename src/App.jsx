import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AIPoweredXRSolutions,
  AugmentedReality,
  ClientTestimonials,
  CompanyValues,
  FeaturedProjects,
  HomePage,
  InteractiveInstallations,
  MeetTheTeam,
  MixedReality,
  OurVision,
  VirtualReality,
  WhyChoose5dVr,
  _360PhotographyAndVideoGraphic,
  _3DModelingAndAnimation,
  TrainingAndCourses,
} from "./pages";
import { Navbar, Footer } from "@components";
import DummyPage from "./pages/DummyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* home page route  */}
        <Route path="/" element={<HomePage />} />
        {/* Services Routes */}
        <Route path="virtual-reality" element={<VirtualReality />} />
        <Route path="augmented-reality" element={<AugmentedReality />} />
        <Route path="mixed-reality" element={<MixedReality />} />
        <Route
          path="ai-powered-xr-solutions"
          element={<AIPoweredXRSolutions />}
        />
        <Route
          path="360-photography-and-Video-graphic"
          element={<_360PhotographyAndVideoGraphic />}
        />
        <Route
          path="3d-modeling-and-animation"
          element={<_3DModelingAndAnimation />}
        />
        <Route
          path="interactive-installations"
          element={<InteractiveInstallations />}
        />
        <Route path="training-and-courses" element={<TrainingAndCourses />} />

        {/*Profile routes */}
        <Route path="featured-projects" element={<FeaturedProjects />} />
        {/* about us routes */}
        <Route path="dummy-page" element={<DummyPage />} />
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
