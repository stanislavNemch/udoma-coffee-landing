import { motion } from "motion/react";
import styles from "./Footer.module.css";
import { NAV_LINKS } from "../../../shared/constants";
import { CupLogo, TopArrowIcon } from "./FooterIcons";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
          <TopArrowIcon />
        </button>
      </div>
    </footer>
  );
}
