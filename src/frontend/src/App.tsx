import { useEffect, useState } from "react";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
