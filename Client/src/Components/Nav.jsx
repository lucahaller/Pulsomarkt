import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/Images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed z-20 w-full bg-blue-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src={logo} className="w-auto h-12" alt="Logo" />
        <button
          className="text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-0 left-0 w-full lg:w-auto lg:bg-transparent bg-blue-800 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <button
            className="text-2xl lg:hidden flex ml-auto px-2 py-4"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <LanguageSwitcher />
          <a
            href="/"
            className="block lg:inline-block py-2 px-4 hover:text-blue-200"
          >
            {t("HOME")}
          </a>
          <a
            href="/#services"
            className="block lg:inline-block py-2 px-4 hover:text-blue-200"
          >
            {t("SERVICES")}
          </a>
          <a
            href="/#about"
            className="block lg:inline-block py-2 px-4 hover:text-blue-200"
          >
            {t("ABOUT")}
          </a>
          <a
            href="/#contacto"
            className="block lg:inline-block py-2 px-4 hover:text-blue-200"
          >
            {t("CONTACT")}
          </a>
        </div>
      </div>
    </nav>
  );
}
