import React, { useState } from "react";
import i18n from "i18next";
import spain from "../Assets/Flags/flagspain.png";
import english from "../Assets/Flags/english.png";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languages = [
    { code: "en", label: "English", icon: english },
    { code: "es", label: "Español", icon: spain },
  ];

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botón para abrir/cerrar el menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 border  text-white border-gray-300 rounded p-2 flex items-center"
      >
        {/* Muestra la bandera del idioma seleccionado */}
        <img
          src={languages.find((lang) => lang.code === selectedLanguage).icon}
          alt="Selected Language"
          className="w-6 h-4 mr-2"
        />
        {/* Muestra el nombre del idioma seleccionado */}
        {languages.find((lang) => lang.code === selectedLanguage).label}
        {/* Icono para mostrar que es un selector */}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {/* Lista desplegable personalizada */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-full text-white bg-blue-700  border border-gray-300 rounded shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className="flex items-center p-2 cursor-pointer hover:bg-blue-800 text-sm"
            >
              <img src={lang.icon} alt={lang.label} className="w-6 h-4 mr-2" />
              {lang.label} ({lang.code})
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
