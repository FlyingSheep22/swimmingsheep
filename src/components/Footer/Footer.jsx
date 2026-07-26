import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Contact</h2>

      <a
        className={styles.email}
        href="mailto:kevinycbai@gmail.com"
      >
        kevinycbai@gmail.com
      </a>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} SwimmingSheep
      </p>
    </footer>
  );
}