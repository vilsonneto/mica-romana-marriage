"use client";

import React, { createContext, useRef, useEffect } from "react";

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
  const [isMuted, setIsMuted] = React.useState(false);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <AudioContext.Provider value={{ audioRef, toggleMute, isMuted }}>
      <audio
        ref={audioRef}
        src="/music/o-melhor-pra-mim.mp3"
        controls={false}
        loop
      />
      {children}
    </AudioContext.Provider>
  );
};
