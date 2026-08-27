import { motion } from "motion/react";
import { ArrowRightIcon } from "../../../shared/ui/icons";

type HeroIconStyles = {
  readonly [key: string]: string;
};

export function HeroCtaArrowIcon() {
  return <ArrowRightIcon size={17} strokeWidth={2.4} />;
}

export function CupIllustration({ styles }: { styles: HeroIconStyles }) {
  return (
    <svg viewBox="0 0 320 320" fill="none" aria-hidden="true">
      <motion.g
        className={styles["steamGroup"]}
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
          className={styles["steam"]}
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
          className={`${styles["steam"]} ${styles["steam2"]}`}
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
          className={`${styles["steam"]} ${styles["steam3"]}`}
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
