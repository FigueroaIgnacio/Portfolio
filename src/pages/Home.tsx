import React from "react"

// Hooks
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

// Icons
import { Chevron, User } from "@/components/Icons.tsx"

// Utils
import { motion } from "framer-motion"
import { containerVariants, fadeUpVariants } from "@/constants/animations.ts";

export function Home() {
  const { t } = useTranslation()

  const links: { href: string; label: string; icon: React.ReactNode }[] = [
    {
      label: t("sections.home.links.projects.label"),
      href: "/projects",
      icon: <Chevron />,
    },
    {
      label: t("sections.home.links.about.label"),
      href: "/about",
      icon: <User />,
    },
  ]

  return (
    <motion.section
      className="min-h-[80dvh] flex flex-col justify-center gap-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-bold py-2"
        variants={fadeUpVariants}>
        {t("sections.home.title")}
      </motion.h1>
      <motion.h2
        className="text-muted-foreground"
        variants={fadeUpVariants}>
        <Trans
          i18nKey="sections.home.subtitle"
          components={{ span: <span className="gradient-text" /> }}
        />
      </motion.h2>
      <div
        className="flex gap-x-2"
      >
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}>
            <Link
              to={link.href}
              className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
            >
              {link.label}
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}