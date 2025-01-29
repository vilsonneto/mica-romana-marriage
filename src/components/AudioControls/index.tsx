"use client";

import React, { useContext } from "react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { AudioContext } from "../../providers/AudioProvider";

export const AudioControls: React.FC = () => {
  const audioContext = useContext(AudioContext);

  if (!audioContext) {
    return null; // Evita erro caso o contexto não esteja disponível
  }

  const { toggleMute, isMuted } = audioContext;

  return (
    <button
      onClick={toggleMute}
      style={{ padding: "8px 20px", fontSize: "16px" }}
    >
      {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
    </button>
  );
};
