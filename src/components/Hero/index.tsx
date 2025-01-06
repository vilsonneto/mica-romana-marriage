"use client";

import React from "react";

interface HeroProps {
  image: string;
  objectPosition: string;
  title?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({
  image,
  objectPosition,
  title,
  subtitle,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: objectPosition,
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center items-center"
    >
      <div className="mt-36 text-center drop-shadow uppercase font-">
        {title && <h2 className="text-dynamic-hero-title ">{title}</h2>}
        {subtitle && (
          <h3 className="text-dynamic-hero-subtitle mt-12">{subtitle}</h3>
        )}
      </div>
    </section>
  );
};
