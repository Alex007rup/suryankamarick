import TextEffect from './TextEffect'
import styles from '../../styles/Home.module.css'

import { useEffect, useState } from 'react';
import HeroHome1 from './HeroHome1';

function Home() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.body} ${isDark ? styles.dark : styles.light}`}>
        <TextEffect />
        {isDark && <HeroHome1 />}
      </div>
    </>
  )
}

export default Home