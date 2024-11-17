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
  const [showWelcome, setShowWelcome] = useState(true);


  const handleMouseMove = (ev: MouseEvent) => {
    setMousePosition({
      x: ev.clientX,
      y: ev.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <div
          className={styles.cursor}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
        {showWelcome && <Welcome />}
        {!showWelcome && <Navbar />}
        {!showWelcome && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;