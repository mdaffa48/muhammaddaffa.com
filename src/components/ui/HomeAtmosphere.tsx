import { useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export default function HomeAtmosphere({ children }: { children: ReactNode }) {
  const glow = useRef<HTMLDivElement>(null);
  const nextBurst = useRef(0);
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="home-atmosphere relative isolate w-full overflow-hidden bg-[#131310]"
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== "mouse" || !glow.current) return;
        glow.current.style.setProperty("--glow-x", `${event.clientX}px`);
        glow.current.style.setProperty("--glow-y", `${event.clientY}px`);
        glow.current.style.opacity = "1";
      }}
      onPointerLeave={() => { if (glow.current) glow.current.style.opacity = "0"; }}
      onClick={(event) => {
        if (reduceMotion || event.button !== 0 || !(event.target instanceof Element)) return;
        if (event.target.closest("a, button, input, textarea, select, [role='button'], .titles, .contact__info")) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const burst = { id: nextBurst.current++, x: event.clientX - bounds.left, y: event.clientY - bounds.top };
        setBursts((active) => [...active.slice(-2), burst]);
      }}
    >
      <div ref={glow} aria-hidden="true" className="home-glow" />
      {bursts.map((burst) => (
        <div key={burst.id} aria-hidden="true" className="home-meteor-burst" style={{ left: burst.x, top: burst.y }}>
          {Array.from({ length: 8 }, (_, index) => (
            <span
              key={index}
              className="home-burst-meteor"
              style={{
                left: (index - 3.5) * 24,
                top: (index % 3) * -22,
                animationDelay: `${index * 35}ms`,
                animationDuration: `${800 + index * 55}ms`,
                "--meteor-x": `${180 + index * 18}px`,
                "--meteor-y": `${130 + index * 12}px`,
              } as CSSProperties}
              onAnimationEnd={index === 7 ? () => setBursts((active) => active.filter((entry) => entry.id !== burst.id)) : undefined}
            />
          ))}
        </div>
      ))}
      {children}
    </main>
  );
}
