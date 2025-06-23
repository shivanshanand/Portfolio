import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
