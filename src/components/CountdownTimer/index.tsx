"use client"; // Garante que este componente seja renderizado no lado do cliente

import React, { useState, useEffect } from "react";
import { Subtitle } from "../Subtitle";

const targetDate = new Date("2025-04-19T00:00:00").getTime();

export const CountdownCalendar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: "--",
    horas: "--",
    minutos: "--",
    segundos: "--",
  });

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { dias: "00", horas: "00", minutos: "00", segundos: "00" };
    }

    return {
      dias: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutos: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      ),
      segundos: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    setTimeLeft(getTimeRemaining()); // Atualiza logo após a montagem

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-full">
      <div className="bg-lemon w-full h-6 rounded-t-lg mb-3"></div>{" "}
      {/* Barra superior vermelha */}
      <Subtitle>Contagem Regressiva</Subtitle>
      <div className="grid grid-cols-4 gap-4 mt-4 text-center">
        {[
          { label: "Dias", value: timeLeft.dias },
          { label: "Horas", value: timeLeft.horas },
          { label: "Minutos", value: timeLeft.minutos },
          { label: "Segundos", value: timeLeft.segundos },
        ].map((time) => (
          <div
            key={time.label}
            className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow"
          >
            <span className="text-2xl md:text-4xl font-bold text-lemon-dark">
              {time.value}
            </span>
            <span className=" text-md md:text-xl text-gray-700 mt-1">
              {time.label}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-lemon w-full h-6 rounded-b-lg mt-4"></div>{" "}
      {/* Barra inferior vermelha */}
    </div>
  );
};
