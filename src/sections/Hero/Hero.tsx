// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ActiveToWork } from "../../components/ActiveToWork/ActiveToWork";
import {
  FramerDiv,
  FramerH1,
  FramerH2,
  FramerParagraph,
} from "../../components/Framer";
import { SelectLanguage } from "../../components/SelectLanguage/SelectLanguage";

// Icons
import { Location } from "../../icons/Location";

// Constants
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from "../../constants/animations";

// Styles
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      <SelectLanguage />
      <ActiveToWork />
      <div>
        <div>
          <FramerH1
            className={styles.heroTitle}
            variants={FADE_LEFT_ANIMATION_VARIANTS}
          >
            {t("hero.title")}
          </FramerH1>
          <FramerH2
            variants={FADE_LEFT_ANIMATION_VARIANTS}
            className={styles.heroSubtitle}
          >
            {t("hero.subtitle")}
          </FramerH2>
        </div>
        <FramerParagraph
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className={styles.heroDescription}
        >
          {t("hero.description")}
        </FramerParagraph>
      </div>
      <FramerDiv
        className={styles.heroLocation}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <div className={styles.heroLocationBox}>
          <Location />
          <address>
            <span>{t("hero.location")}</span>
          </address>
        </div>
      </FramerDiv>
    </section>
  );
}
