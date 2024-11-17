import styles from '../../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
    </div>
  );
};

export default Loading;