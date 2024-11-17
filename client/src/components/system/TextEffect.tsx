import React, { useEffect, useState } from 'react';
import styles from '../../styles/TextEffect.module.css';

const TextEffect: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
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