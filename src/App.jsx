import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import { useScrollTriggerRefresh } from "./hooks/useAnimations";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Initialize and optimize ScrollTrigger
  useScrollTriggerRefresh();
  
  const sectionRefs = useRef([]);

  return (
    <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
