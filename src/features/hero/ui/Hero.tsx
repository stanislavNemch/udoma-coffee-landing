import { motion } from "motion/react";
import styles from "./Hero.module.css";
import { CupIllustration, HeroCtaArrowIcon } from "./HeroIcons";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } as const,
  },
};

const TICKER_ITEMS = [
  "Еспресо",
  "Капучино",
  "Раф",
  "Флет-вайт",
  "Латте",
  "Мокко",
  "Дрип-кава",
  "Свіжа випічка",
  "Обсмажка по середах",
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={item}>
            добрий ранок, друже
          </motion.p>

          <motion.h1 className={styles.title} variants={item}>
            <span className={styles.line}>Кава, яка</span>
            <span className={styles.line}>знає вас</span>
            <span className={styles.line}>
              <em className={styles.accentWord}>по імені</em>
            </span>
          </motion.h1>

          <motion.p className={styles.lead} variants={item}>
            Невелика кав'ярня в двох кроках від вашого двору: спеціяльна
            обсмажка, домашня випічка до семи й бариста, який пам'ятає ваше
            замовлення ще до того, як ви сіли.
          </motion.p>

          <motion.div className={styles.ctaRow} variants={item}>
            <a href="#menu" className="btn btn-primary">
              Переглянути меню
              <HeroCtaArrowIcon />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Як нас знайти
            </a>
          </motion.div>

          <motion.p className={styles.handNote} variants={item}>
            почнімо ранок разом →
          </motion.p>
        </motion.div>

        <div className={styles.visual} aria-hidden="true">
          <motion.div
            className={styles.cupWrap}
            initial={{ opacity: 0, scale: 0.82, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CupIllustration styles={styles} />
          </motion.div>

          <span className={`${styles.chip} ${styles.chip1}`}>
            обжарка в маленькій партії
          </span>
          <span className={`${styles.chip} ${styles.chip2}`}>
            випічка до 7:00 🥐
          </span>
          <span className={`${styles.chip} ${styles.chip3}`}>
            2 хвилини від двору
          </span>
        </div>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[0, 1].map((copy) => (
            <span key={copy} className={styles.tickerGroup}>
              {TICKER_ITEMS.map((t) => (
                <span key={`${copy}-${t}`} className={styles.tickerItem}>
                  {t} <i>✦</i>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
