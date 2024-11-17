import styles from './styles/App.module.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/system/Navbar';
import Home from './components/system/Home';
import About from './components/system/About';
import Works from './components/system/Works';
import Contact from './components/system/Contact';
import Welcome from './components/system/Welcome';

const App = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const handleMouseMove = (ev: MouseEvent) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <div
          className={`${styles.cursor} ${isHovering ? styles.hovered : ''}`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
        {showWelcome && <Welcome />}
        {!showWelcome && <Navbar />}
        <div className={`${styles.main} ${isDark ? styles.dark : styles.light}`}>
          {!showWelcome && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>
      </Router>
    </>
  );
};

export default App;