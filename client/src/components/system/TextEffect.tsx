import React, { useEffect, useState } from 'react';
import styles from '../../styles/TextEffect.module.css';

const TextEffect: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedPosition = e.pageX / (windowWidth / 2) - 1;
      const speedSlow = 100 * normalizedPosition;
      const speedFast = 200 * normalizedPosition;

      document.querySelectorAll(`.${styles.spanSlow}`).forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedSlow}px)`;
      });

      document.querySelectorAll(`.${styles.spanFast}`).forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedFast}px)`;
      });
    };

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = Math.max(1 - scrollPosition / window.innerHeight, 0); // Scale from 1 to 0 based on scroll position
      setScale(scaleValue);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowWidth]);

  return (
    <div className={styles.main}>
      <div className={styles.wrap} style={{ transform: `scale(${scale})` }}>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>CREATING</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>CREATING</span>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>WITH PURPOSE</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>WITH PURPOSE</span>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanFast}>BUILDING</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanFast}>BUILDING</span>
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.left}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>WITH PASSION</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <span className={styles.spanSlow}>WITH PASSION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEffect;