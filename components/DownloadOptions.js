import { useEffect } from 'react';
import styles from '../styles/DownloadOptions.module.css';

const DownloadOptions = () => {
  useEffect(() => {
    let currentRotation = 0;
    const interval = setInterval(() => {
      currentRotation += 90;
      document.querySelector(`.${styles.cube}`).style.transform = `rotateY(${currentRotation}deg)`;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.download}>
      <h2>Download Our App</h2>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}><img src="/images/front.png" alt="Front face" /></div>
        <div className={`${styles.face} ${styles.back}`}><img src="/images/back.png" alt="Back face" /></div>
        <div className={`${styles.face} ${styles.left}`}><img src="/images/left.png" alt="Left face" /></div>
        <div className={`${styles.face} ${styles.right}`}><img src="/images/right.png" alt="Right face" /></div>
      </div>
      {/* <div className={styles.buttons}>
        <button onClick={() => rotateCube('left')}>Rotate Left</button>
        <button onClick={() => rotateCube('right')}>Rotate Right</button>
      </div> */}
    </section>
  );
};

const rotateCube = (direction) => {
  const cube = document.querySelector(`.${styles.cube}`);
  const currentRotation = cube.style.transform.match(/rotateY\((.*)deg\)/);
  let newRotation = currentRotation ? parseInt(currentRotation[1], 10) : 0;
  newRotation = direction === 'left' ? newRotation - 90 : newRotation + 90;
  cube.style.transform = `rotateY(${newRotation}deg)`;
};

export default DownloadOptions;
