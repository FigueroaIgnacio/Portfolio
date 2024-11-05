// Hooks
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Components
import { Link } from "react-router-dom";

// Icons
import { Menu } from "@/icons/Menu.tsx";
import { X } from "@/icons/X.tsx";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navItems = t('ui.navigation', { returnObjects: true }) as NavItem[];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-end items-center py-4 z-20">
        <div className="md:hidden"
             onClick={toggleMenu}>
          <Menu />
        </div>
        <nav
          className={`absolute top-0 left-0 w-52 transition-transform bg-background md:bg-transparent min-h-dvh lg:min-h-0 duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex md:items-center md:translate-x-0 md:h-auto z-30`}>
          <div className="flex justify-end p-2">
            <button onClick={toggleMenu}
                    aria-label="Close menu"
                    className="lg:hidden">
              <X />
            </button>
          </div>
          <ul className="flex flex-col md:flex-row space-y-5 px-5 md:space-y-0 md:px-0 md:space-x-6">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.href}
                      className="text-muted-foreground hover:text-muted font-semibold duration-100">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-10"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
