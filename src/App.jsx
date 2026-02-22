import './index.css';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import ValueProposition from './components/ValueProposition';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParallaxBg from './components/ParallaxBg';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParallaxBg />
      <div className="animated-bg">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <BentoGrid />
        <ValueProposition />
        <Experience />
        <Projects />
        <BottomSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
