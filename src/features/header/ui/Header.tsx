import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Header.module.css";
import { NAV_LINKS } from "../../../shared/constants";
import type { Theme } from "../../../shared/types";
import { applyTheme, getInitialTheme, persistTheme } from "../../../shared/lib";

function CupLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 21h22v7a11 11 0 0 1-11 11 11 11 0 0 1-11-11v-7Z" />
      <path d="M31 24h3.5a4.5 4.5 0 0 1 0 9H31" />
      <path d="M7 43h26" />
      <path d="M16 6c-1.8 2.2 1.8 3.4 0 5.6" opacity="0.85" />
      <path d="M23 6c-1.8 2.2 1.8 3.4 0 5.6" opacity="0.85" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.6 14.2A8.8 8.8 0 0 1 9.8 3.4a8.8 8.8 0 1 0 10.8 10.8Z" />
    </svg>
  );
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    persistTheme(next);
  };

  return (
    <header
      className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.logo}
          aria-label="Кав'ярня «У дома» — на головну"
        >
          <CupLogo />
          <span className={styles.logoText}>
            У&nbsp;<em>дома</em>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Основна навігація">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Увімкнути світлу тему"
                : "Увімкнути темну тему"
            }
            title={theme === "dark" ? "Світла тема" : "Темна тема"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
            Забронювати столик
          </a>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            aria-label="Мобільна навігація"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={() => setOpen(false)}
            >
              Забронювати столик
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
