"use client";

import React, { useState, useRef, useEffect } from "react";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

export const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  useEffect(() => {
    if (!!audioRef) {
      audioRef.current?.play();
    }
  }, [audioRef]);

  return (
    <div>
      <audio
        ref={audioRef}
        src="/music/o-melhor-pra-mim.mp3"
        controls={false}
        // autoPlay
      />
      <div>
        <button
          onClick={toggleMute}
          style={{ padding: "8px 20px", fontSize: "16px" }}
        >
          {isMuted ? <BiVolumeMute /> : <BiVolumeFull />}
        </button>
      </div>
    </div>
  );
};
