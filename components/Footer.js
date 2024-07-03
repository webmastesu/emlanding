import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <nav>
      <Link href="/roadmap" legacyBehavior><a className={styles.footerLink}>Road Map</a></Link>
      <Link href="/privacy" legacyBehavior><a className={styles.footerLink}>Privacy Policy</a></Link>
      <Link href="/refund" legacyBehavior><a className={styles.footerLink}>Refund Policy</a></Link>
      <Link href="/terms" legacyBehavior><a className={styles.footerLink}>Terms of Service</a></Link>
    </nav>
  </footer>
);

export default Footer;
