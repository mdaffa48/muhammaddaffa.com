import type { ComponentProps } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type MagneticLinkProps = Pick<ComponentProps<"a">, "href" | "children" | "target" | "rel">;

export default function MagneticLink({ href, children, target, rel }: MagneticLinkProps) {
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 280, damping: 20, mass: 0.6 });
  const y = useSpring(targetY, { stiffness: 280, damping: 20, mass: 0.6 });
  const reduceMotion = useReducedMotion();
  const reset = () => { targetX.set(0); targetY.set(0); };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        targetX.set(Math.max(-8, Math.min(8, (event.clientX - bounds.left - bounds.width / 2) * 0.18)));
        targetY.set(Math.max(-6, Math.min(6, (event.clientY - bounds.top - bounds.height / 2) * 0.18)));
      }}
      onPointerLeave={reset}
      onBlur={reset}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      className="inline-flex min-h-11 items-center rounded-full border border-white px-4 py-1 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#131310] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {children}
    </motion.a>
  );
}
