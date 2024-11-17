import TextEffect from './TextEffect'
import styles from '../../styles/Home.module.css'

import { useEffect, useState } from 'react';

function Home() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.body} ${isDark ? styles.dark : styles.light}`}>
        <TextEffect />
      </div>
    </>
  )
}

export default Home