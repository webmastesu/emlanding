// Header.js using React hooks

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Clean-up
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className={styles.logoImg} />
          </Link>
        </div>
        <div className={styles.menu}>
          <div className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu}>
            <div className={styles.menuIcon}>
              <div className={styles.menuLine}></div>
              <div className={styles.menuLine}></div>
              <div className={styles.menuLine}></div>
            </div>
          </div>
          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className={styles.navLink}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/download" passHref legacyBehavior>
                <a className={styles.navLink}>Download</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a className={styles.navLink}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/screenshots" passHref legacyBehavior>
                <a className={styles.navLink}>Screenshots</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
