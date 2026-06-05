"use client";

import { useEffect, useState } from "react";

export default function useKeyboardControls() {
  const [keys, setKeys] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prev) => ({
        ...prev,
        [event.key]: true,
      }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prev) => ({
        ...prev,
        [event.key]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keys;
}