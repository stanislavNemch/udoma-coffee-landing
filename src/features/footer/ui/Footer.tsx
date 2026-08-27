import { motion } from "motion/react";
import styles from "./Footer.module.css";
import { NAV_LINKS } from "../../../shared/constants";

const easeOut = [0.22, 1, 0.36, 1] as const;

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <a
            href="#top"
            className={styles.brandLogo}
            aria-label="Кав'ярня «У дома» — наверх"
          >
            <CupLogo />
            <span className={styles.brandName}>
              У&nbsp;<em>дома</em>
            </span>
          </a>
          <p className={styles.tagline}>
            Кав'ярня в двох кроках від вашого двору — для ранків, які хочеться
            повторити, і для розмов, що починаються з першої чашки.
          </p>
          <span className={styles.handNote}>двері завжди відчинені ☕</span>
        </motion.div>

        <motion.nav
          aria-label="Навигация в подвале"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
        >
          <h3 className={styles.colTitle}>Розділи</h3>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </motion.nav>

        <motion.address
          className={styles.contacts}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
        >
          <h3 className={styles.colTitle}>Контакти</h3>
          <a className={styles.contactLine} href="tel:+380971234567">
            +380 (97) 123-45-67
          </a>
          <span className={styles.contactLine}>
            вул. Садова, 12 · під'їзд 3
          </span>
          <span className={styles.contactLine}>щодня з 7:00 до 21:00</span>
        </motion.address>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          © 2026 Кав'ярня «У дома». Зроблено з любов'ю, теплом і подвійним
          еспресо.
        </p>
        <button
          type="button"
          className={styles.topBtn}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Нагору
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
