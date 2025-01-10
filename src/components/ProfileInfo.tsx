// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Actions } from "@/sections/Actions";
import { Link } from "react-router-dom";
import { Separator } from "./Separator";

export function ProfileInfo() {
  const { t } = useTranslation();

  return (
    <>
      <section className="lg:border-r lg:border-border h-full p-3 lg:p-6 space-y-6 lg:space-y-5">
        <p className="text-muted-foreground text-sm">
          {t("sections.profile.welcome")}
        </p>
        <Link to="/" className="text-xs underline">
          ignaciofigueroa.vercel.app
        </Link>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold">Ignacio Figueroa</h2>
            <h3 className="text-sm">{t("sections.profile.subtitle")}</h3>
          </div>
        </div>
        <p className="text-xs">{t("sections.profile.text")}</p>
        <Actions />
      </section>

      <Separator className="my-7 flex lg:hidden" />
    </>
  );
}
