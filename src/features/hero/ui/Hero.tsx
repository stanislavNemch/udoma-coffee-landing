import { motion } from "motion/react";
import styles from "./Hero.module.css";

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

function CupIllustration() {
  return (
    <svg viewBox="0 0 320 320" fill="none" aria-hidden="true">
      <motion.g
        className={styles.steamGroup}
        stroke="var(--muted)"
        strokeWidth="5"
        strokeLinecap="round"
        animate={{
          x: [0, -1.5, 1.5, 0],
          rotate: [0, -1, 1, 0],
        }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.path
          className={styles.steam}
          d="M128 96c-8-10 8-14 0-26"
          animate={{
            opacity: [0.1, 0.72, 0.45, 0.06],
            y: [9, -2, -14, -27],
            x: [0, -2, -5, -8],
            rotate: [-2, -5, -9, -13],
            scaleX: [0.95, 1.03, 1.1, 1.18],
            scaleY: [0.94, 1.01, 1.08, 1.14],
          }}
          transition={{ duration: 3.25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          className={`${styles.steam} ${styles.steam2}`}
          d="M160 88c-8-12 8-16 0-30"
          animate={{
            opacity: [0.1, 0.82, 0.5, 0.06],
            y: [10, -3, -16, -30],
            x: [0, 1, -1, 1],
            rotate: [-1, 1, -2, 3],
            scaleX: [0.96, 1.04, 1.1, 1.16],
            scaleY: [0.94, 1.02, 1.09, 1.14],
          }}
          transition={{
            duration: 3.9,
            repeat: Infinity,
            delay: 0.4,
            ease: "easeInOut",
          }}
        />
        <motion.path
          className={`${styles.steam} ${styles.steam3}`}
          d="M192 96c-8-10 8-14 0-26"
          animate={{
            opacity: [0.1, 0.72, 0.45, 0.06],
            y: [9, -2, -14, -27],
            x: [0, 2, 5, 8],
            rotate: [2, 5, 9, 13],
            scaleX: [0.95, 1.03, 1.1, 1.18],
            scaleY: [0.94, 1.01, 1.08, 1.14],
          }}
          transition={{
            duration: 4.15,
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      <g
        stroke="var(--ink)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="160" cy="258" rx="104" ry="17" />
        <path d="M92 148h136v28a68 62 0 0 1-136 0v-28Z" fill="var(--surface)" />
        <path d="M228 158h16a27 27 0 0 1 0 54h-22" />
        <ellipse cx="160" cy="148" rx="68" ry="13" fill="var(--bg)" />
      </g>

      <ellipse
        cx="160"
        cy="148"
        rx="57"
        ry="9.5"
        fill="var(--accent)"
        opacity="0.9"
      />
      <path
        d="M160 152c-3.4-4.6-9.4-5-11.4-1.2-1.6 3 .6 6.6 11.4 12.4 10.8-5.8 13-9.4 11.4-12.4-2-3.8-8-3.4-11.4 1.2Z"
        fill="var(--accent-contrast)"
        opacity="0.95"
      />
    </svg>
  );
}

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
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
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
            <CupIllustration />
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
