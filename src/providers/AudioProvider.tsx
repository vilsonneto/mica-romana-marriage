"use client";

import React, { createContext, useRef, useState, useEffect } from "react";
import WelcomeModal from "../components/WelcomeModal";

interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement>;
  toggleMute: () => void;
  isMuted: boolean;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true); // O modal aparece inicialmente

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      // Impede o scroll no body quando o modal estiver visível
      document.body.style.overflow = "hidden";
    } else {
      // Restaura o scroll no body quando o modal for fechado
      document.body.style.overflow = "auto";
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalVisible]);

  const handleModalClose = () => {
    setIsModalVisible(false);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => console.error("Erro ao iniciar áudio:", err));
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, toggleMute, isMuted }}>
      <audio
        ref={audioRef}
        src="/music/o-melhor-pra-mim.mp3"
        loop
        muted={isMuted}
      />
      {isModalVisible && <WelcomeModal onClose={handleModalClose} />}
      {children}
    </AudioContext.Provider>
  );
};
