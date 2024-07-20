import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      {/* <h1>For movie lovers</h1> */}
      <h2>Eternal World</h2>
      <p>
        Download to Read international Maga, Manwha series,
        Anime and 18+ right now.
      </p>
      <div className={styles.heroButtons}>
        <a
          href="https://109110.b-cdn.net/Em-Latest.apk"
          className={styles.heroButton}
          download
        >
          Download
        </a>
        <a
          href="https://t.me/eternalxemcoinsbot"
          className={styles.heroButton}
        >
          Help
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;

