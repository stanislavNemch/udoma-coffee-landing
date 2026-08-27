import { motion } from "motion/react";
import styles from "./Menu.module.css";
import { MENU } from "../../../shared/constants";

const groups = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
};

const groupItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const,
  },
};

export default function Menu() {
  return (
    <section id="menu" className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <motion.aside
          className={styles.aside}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">наше меню</span>
          <h2 className="title">Світло, чесно й з душею</h2>
          <p className="section-lead">
            Коротке меню для тихих ранків, швидких вітальних і неспішних розмов.
            Все просто, але в кожній чашці — відчуття дому.
          </p>
          <p className={styles.handNote}>
            улюбленець двору — карамельний раф ↓
          </p>
          <a href="#contact" className={`btn btn-ghost ${styles.asideCta}`}>
            Забронювати столик
          </a>
        </motion.aside>

        <motion.div
          className={styles.list}
          variants={groups}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {MENU.map((group) => (
            <div key={group.title} className={styles.group}>
              <motion.h3 className={styles.groupTitle} variants={groupItem}>
                {group.title}
              </motion.h3>
              <ul>
                {group.items.map((item) => (
                  <motion.li
                    key={item.name}
                    className={styles.item}
                    variants={groupItem}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  >
                    <div className={styles.itemHead}>
                      <span className={styles.itemName}>{item.name}</span>
                      {item.hit && (
                        <span className={styles.badge}>улюбленець сусідів</span>
                      )}
                      <span className={styles.dots} aria-hidden="true" />
                      <span className={styles.price}>{item.price}</span>
                    </div>
                    {item.desc && (
                      <p className={styles.itemDesc}>{item.desc}</p>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
