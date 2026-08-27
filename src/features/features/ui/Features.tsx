import { motion } from "motion/react";
import styles from "./Features.module.css";

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } as const,
  },
};

const FEATURES = [
  {
    title: "Спеціальна обсмажка",
    text: "Зерно обсмажуємо в малих партіях, щоб у кожній чашці було більше аромату, ніж шуму й поспіху.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
        <path d="M9.2 6.4c3.4 3.2 3.4 8 2.6 11.4" />
      </svg>
    ),
  },
  {
    title: "Домашня випічка",
    text: "До семи ранку в вітрині — свіжі круасани, булочки та дрібнички, які пахнуть так, ніби вас вже давно знають тут.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v18" />
        <path d="M12 8c-2.6 0-4.4-1.4-5-3.6C9.4 4.4 11.2 5.6 12 8Zm0 0c2.6 0 4.4-1.4 5-3.6C14.6 4.4 12.8 5.6 12 8Zm0 5c-2.6 0-4.4-1.4-5-3.6 2.4 0 4.2 1.2 5 3.6Zm0 0c2.6 0 4.4-1.4 5-3.6-2.4 0-4.2 1.2-5 3.6Zm0 5c-2.6 0-4.4-1.4-5-3.6 2.4 0 4.2 1.2 5 3.6Zm0 0c2.6 0 4.4-1.4 5-3.6-2.4 0-4.2 1.2-5 3.6Z" />
      </svg>
    ),
  },
  {
    title: "Знаємо по імені",
    text: "Бариста пам'ятає, що ви любите, ще до того, як ви сіли. Тут не про повторення — тут про знайомий ритм ранку.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20.5C7 16.6 3.5 13.6 3.5 9.9A4.6 4.6 0 0 1 8.1 5.3c1.6 0 3 .8 3.9 2a5.1 5.1 0 0 1 3.9-2 4.6 4.6 0 0 1 4.6 4.6c0 3.7-3.5 6.7-8.5 10.6Z" />
      </svg>
    ),
  },
  {
    title: "Комфорт і розетки",
    text: "М'які крісла, тепле світло й розетка біля кожного столика — для тихих робочих ранків і довгих розмов за чашкою.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M4 9.5a12 12 0 0 1 16 0" />
        <path d="M7 13a8 8 0 0 1 10 0" />
        <path d="M10 16.4a4 4 0 0 1 4 0" />
        <circle cx="12" cy="19.5" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="eyebrow">чому саме ми</span>
            <h2 className="title">
              Не просто кав'ярня — а звичка з добрим настроєм
            </h2>
          </div>
          <p className="section-lead">
            Ми маленькі й навмисне такі: щоб знати кожного гостя, кожну партію
            зерна й кожну випічку. Тут не тільки п'ють каву — тут повертаються
            до найкращого ранку в дворі.
          </p>
        </motion.div>

        <motion.ul
          className={styles.grid}
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURES.map((f, i) => (
            <motion.li
              key={f.title}
              className={`${styles.card} ${styles[`r${i}`]}`}
              variants={card}
            >
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardText}>{f.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
