"use client";

import React, { useEffect, useState } from "react";

interface DigitadorProps {
  text: string;
}

export const Digitador: React.FC<DigitadorProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      } else if (!isDeleting && currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pausa ao terminar de escrever
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    };

    const intervalId = setInterval(handleTyping, 150); // Ajuste o intervalo conforme desejado

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [text, isDeleting, currentIndex]);

  return (
    <div className="font-serif font-bold text-lg mt-[20%]">{displayedText}</div>
  );
};
