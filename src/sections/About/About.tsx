// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./About.module.css";

export function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutBox}>
      <h2 className={styles.aboutTitle}>{t("aboutMe.title")}</h2>
      <p>{t("aboutMe.description")}</p>
    </section>
  );
}
