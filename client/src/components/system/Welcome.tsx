'use client'

import { useEffect, useState } from 'react'
import styles from "../../styles/Welcome.module.css";

const Welcome = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div className={styles.welcome}>
      <div className={`${styles.text} ${isAnimating ? styles.animating : ''}`}>
        <div>S</div>
        <div>u</div>
        <div>r</div>
        <div>y</div>
        <div>a</div>
        <div>n</div>
        <div>k</div>
        <div>a</div>
      </div>
    </div>
  );
};

export default Welcome;