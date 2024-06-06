// Components
import { Badge } from "../../components/Badge/Badge";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Skills.module.css";

// Object to map
import { skills } from "./skills";

type mySkills = {
  skill: string;
  icon: string;
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <section className={styles.skillsBox}>
      <h2 className={styles.skillsTitle}>{t("skills.title")}</h2>
      <div className={styles.skills}>
        {skills.map((skill: mySkills, index: number) => (
          <div key={index}>
            <Badge skill={skill.skill} icon={skill.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}
