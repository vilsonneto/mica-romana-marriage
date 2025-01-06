"use client";

import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <h2 className="text-lemon-dark text-center text-4xl uppercase">
      {children}
    </h2>
  );
};
