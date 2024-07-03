// HeroSection.js

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
        <a href="/download" className={styles.heroButton}>Download</a>
        <a href="/help" className={styles.heroButton}>Help</a>
      </div>
    </div>
  </section>
);

export default HeroSection;
