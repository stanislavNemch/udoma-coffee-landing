import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Header.module.css";
import { NAV_LINKS } from "../../../shared/constants";
import type { Theme } from "../../../shared/types";
import { applyTheme, getInitialTheme, persistTheme } from "../../../shared/lib";
import { CupLogo, MoonIcon, SunIcon } from "./HeaderIcons";

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
