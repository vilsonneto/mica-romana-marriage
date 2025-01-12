"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { text } from "stream/consumers";

interface HeaderProps {
  underlineLink?: string;
}

export const Header: React.FC<HeaderProps> = ({ underlineLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla se o menu está aberto ou fechado
  const [isScrolled, setIsScrolled] = useState(false); // Controla se o usuário rolou a página

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <header
      id="header"
      className={`transition-colors top-0 left-0 right-0 duration-500 z-50 ${
        isScrolled
          ? "animate-fadeIn"
          : isMenuOpen
          ? "bg-lemon fixed"
          : "bg-transparent absolute"
      } text-white font-bold drop-shadow-2xl p-4 text-lg flex lg:justify-around justify-between items-center py-11 px-12`}
    >
      <h1
        className={`text-xl font-bold w-[100px] ${
          isMenuOpen ? "text-white" : "text-lemon"
        }`}
      >
        M & R
      </h1>
      {/* Ícone de hambúrguer para dispositivos móveis */}
      <button
        className="lg:hidden p-2 flex flex-col justify-center items-center"
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <div
          className={`bg-white block transition-all duration-500 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
        ></div>
        <div
          className={`bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`bg-white block transition-all duration-500 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
        ></div>
      </button>

      {/* Menu de navegação */}
      <nav
        className={`lg:flex lg:gap-7 lg:justify-end absolute lg:static top-20 left-0 w-full bg-lemon lg:bg-transparent transition-colors duration-500 ease-in-out ${
          isMenuOpen
            ? "h-screen flex flex-col items-center justify-start pt-[20vh] text-3xl gap-1"
            : "hidden"
        }`}
      >
        <div>
          <Link
            href="/"
            aria-current="page"
            className={underlineLink === "/" ? "underline" : ""}
          >
            Nós vamos nos casar!
          </Link>
        </div>
        <div>
          <Link
            href="/location"
            data-animation-role="header-element"
            className={underlineLink === "/location" ? "underline" : ""}
          >
            Local
          </Link>
        </div>
        {/* <div>
          <Link
            href="/event-details"
            data-animation-role="header-element"
            className={underlineLink === "/event-details" ? "underline" : ""}
          >
            Detalhes do evento
          </Link>
        </div> */}
        {/* <div>
          <Link
            href="/dress-code"
            data-animation-role="header-element"
            className={underlineLink === "/dress-code" ? "underline" : ""}
          >
            Dress code
          </Link>
        </div> */}
        <div>
          <Link
            href="/registry"
            data-animation-role="header-element"
            className={underlineLink === "/registry" ? "underline" : ""}
          >
            Confirmação
          </Link>
        </div>
        {/* <div>
          <Link
            href="/videos"
            data-animation-role="header-element"
            className={underlineLink === "/videos" ? "underline" : ""}
          >
            Vídeos
          </Link>
        </div> */}
        {/* <div>
          <Link
            href="/photos"
            data-animation-role="header-element"
            className={underlineLink === "/photos" ? "underline" : ""}
          >
            Fotos
          </Link>
        </div> */}
      </nav>
    </header>
  );
};
