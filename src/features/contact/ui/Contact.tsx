import { useRef, useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./Contact.module.css";
import {
  CONTACT_ITEMS,
  INITIAL_FORM_VALUES,
  MESSAGE_LIMIT,
  SOCIAL_LINKS,
} from "../../../shared/constants";
import type {
  FieldName,
  FormErrors,
  FormValues,
  Status,
} from "../../../shared/types";
import { validateAll, validateField } from "../model";
import { ContactIcon, PlaneIcon, SendIcon } from "./ContactIcons";

export default function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const fieldRefs = useRef<
    Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>
  >({});

  const setField =
    (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...values, [field]: event.target.value };
      setValues(next);
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: validateField(field, next) }));
      }
    };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    const firstInvalid = (["name", "phone", "message"] as FieldName[]).find(
      (f) => nextErrors[f],
    );
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1400);
  };

  const handleReset = () => {
    setValues(INITIAL_FORM_VALUES);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="section contactSection">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">на зв'язку</span>
          <h2 className="title">Заходьте — або напишіть</h2>
          <p className="section-lead">
            Забронюйте столик, поцікавтеся про зерно або просто завітайте на
            чашку. Тут завжди раді знайомим і новим друзям двору.
          </p>
        </motion.div>

        <div className={styles.layout}>
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className={styles.infoList}>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className={styles.infoRow}>
                  <span className={styles.iconBadge}>
                    <ContactIcon icon={item.icon} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.href ? (
                      <a className={styles.infoValue} href={item.href}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.socials}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  className={styles.socialBtn}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.kind === "viber" ? (
                    <span className={styles.vkMark}>V</span>
                  ) : (
                    <PlaneIcon />
                  )}
                  {social.label}
                </a>
              ))}
            </div>

            <p className={styles.handNote}>і так, кіт Барні не кусає →</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08,
            }}
          >
            <div className={styles.formCard}>
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    className={styles.success}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <svg
                      className={styles.successIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.5 2.4 2.4 4.6-5.4" />
                    </svg>
                    <h3 className={styles.successTitle}>Заявка у нас!</h3>
                    <p className={styles.successText}>
                      Перетелефонуємо протягом години і приберемо найкращий
                      диван біля вікна. А поки — завітайте: вул. Садова, 12,
                      під'їзд 3.
                    </p>
                    <button
                      type="button"
                      className={`btn btn-ghost ${styles.againBtn}`}
                      onClick={handleReset}
                    >
                      Написати ще
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    noValidate
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.formHead}>
                      <span className="eyebrow">форма-квиток</span>
                      <h3 className={styles.formTitle}>Забронювати столик</h3>
                      <p className={styles.formSub}>
                        Залиште контакти — передзвонимо протягом години.
                      </p>
                    </div>

                    <div className={styles.field}>
                      <div className={styles.labelRow}>
                        <label className={styles.label} htmlFor="contact-name">
                          Ім'я
                        </label>
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Як до вас звертатись?"
                        className={`${styles.input} ${errors.name ? styles.invalid : ""}`.trim()}
                        value={values.name}
                        onChange={setField("name")}
                        ref={(el) => {
                          fieldRefs.current.name = el;
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p className={styles.errorText} id="contact-name-error">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className={styles.field}>
                      <div className={styles.labelRow}>
                        <label className={styles.label} htmlFor="contact-phone">
                          Телефон
                        </label>
                      </div>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+380 97 000-00-00"
                        className={`${styles.input} ${errors.phone ? styles.invalid : ""}`.trim()}
                        value={values.phone}
                        onChange={setField("phone")}
                        ref={(el) => {
                          fieldRefs.current.phone = el;
                        }}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "contact-phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <p
                          className={styles.errorText}
                          id="contact-phone-error"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className={styles.field}>
                      <div className={styles.labelRow}>
                        <label
                          className={styles.label}
                          htmlFor="contact-message"
                        >
                          Кілька слів
                        </label>
                        <span className={styles.counter}>
                          {values.message.length}/{MESSAGE_LIMIT}
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Наприклад: столик на двох у п'ятницю ввечері, біля вікна"
                        className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`.trim()}
                        value={values.message}
                        onChange={setField("message")}
                        ref={(el) => {
                          fieldRefs.current.message = el;
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "contact-message-error" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          className={styles.errorText}
                          id="contact-message-error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <span className={styles.spinner} aria-hidden="true" />
                          Печемо…
                        </>
                      ) : (
                        <>
                          <span>Надіслати заявку</span>
                          <SendIcon />
                        </>
                      )}
                    </button>
                    <p className={styles.formNote}>
                      Жодної розсилки — лише відповідь на ваше питання.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
