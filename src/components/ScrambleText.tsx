"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#@~Δ";
const FRAME_MS = 65;
const REVEAL_STEP = 1;
const HOLD_MS = 2600;

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export default function ScrambleText({ words }: { words: readonly string[] }) {
  const [display, setDisplay] = useState(words[0] ?? "");
  const wordIndex = useRef(0);
  const frame = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (words.length <= 1) return;

    function scrambleTo(target: string) {
      let revealed = 0;
      if (frame.current) clearInterval(frame.current);
      frame.current = setInterval(() => {
        revealed += REVEAL_STEP;
        if (revealed >= target.length) {
          setDisplay(target);
          if (frame.current) clearInterval(frame.current);
          timeout.current = setTimeout(() => {
            wordIndex.current = (wordIndex.current + 1) % words.length;
            scrambleTo(words[wordIndex.current]);
          }, HOLD_MS);
          return;
        }
        const next = target
          .split("")
          .map((char, i) => (i < revealed ? char : randomChar()))
          .join("");
        setDisplay(next);
      }, FRAME_MS);
    }

    timeout.current = setTimeout(() => {
      wordIndex.current = 1 % words.length;
      scrambleTo(words[wordIndex.current]);
    }, HOLD_MS);

    return () => {
      if (frame.current) clearInterval(frame.current);
      if (timeout.current) clearTimeout(timeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words]);

  return (
    <span className="inline-flex items-center gap-1">
      <span>{display}</span>
      <span className="inline-block h-[1em] w-[0.5em] animate-pulse bg-accent-strong align-middle" />
    </span>
  );
}
