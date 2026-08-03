import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Creative", href: "/creative" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        {links.map((link) => {
          const isActive = router.pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                isActive ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}