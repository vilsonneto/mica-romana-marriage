"use client";

import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <h2 className="text-lemon-dark text-center md:text-4xl text-3xl uppercase md:mx-0 mx-3">
      {children}
    </h2>
  );
};
