import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Header.module.css";
import { NAV_LINKS } from "../../../shared/constants";
import type { Theme } from "../../../shared/types";
import { applyTheme, getInitialTheme, persistTheme } from "../../../shared/lib";
import { useMenuDismiss } from "../model";
import { CupLogo, MoonIcon, SunIcon } from "./HeaderIcons";

export default function Header() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavRef = useRef<HTMLElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const wasOpenRef = useRef(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const scrollToHashTarget = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) {
      window.location.hash = href;
      return;
    }

    const headerOffset = 84;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    history.pushState(null, "", href);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  };

  const handleMobileLinkClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    closeMenu();

    // Delay scrolling until body scroll lock is removed.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToHashTarget(href);
      });
    });
  };

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

  useMenuDismiss({
    isOpen: open,
    menuRef: mobileNavRef,
    triggerRef: burgerButtonRef,
    onClose: closeMenu,
  });

  useEffect(() => {
    if (open) {
      window.requestAnimationFrame(() => {
        firstMobileLinkRef.current?.focus();
      });
    }

    if (wasOpenRef.current && !open) {
      burgerButtonRef.current?.focus();
    }

    wasOpenRef.current = open;
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
            ref={burgerButtonRef}
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
          <>
            <motion.button
              type="button"
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Закрити меню"
            />

            <motion.nav
              id="mobile-nav"
              ref={mobileNavRef}
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
                  ref={
                    link.href === NAV_LINKS[0].href ? firstMobileLinkRef : null
                  }
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={(event) => handleMobileLinkClick(event, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={`btn btn-primary ${styles.mobileCta}`}
                onClick={(event) => handleMobileLinkClick(event, "#contact")}
              >
                Забронювати столик
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
