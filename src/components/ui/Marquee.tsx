import { cn } from "../../lib/utils";

interface MarqueeProps {
  className?: string;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

export default function Marquee({ className, children, vertical = false, repeat = 4, ...props }: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              //   "animate-marquee flex-row": !vertical,
              //   "animate-marquee-vertical flex-col": vertical,
              //   "group-hover:[animation-play-state:paused]": false,
              //   "[animation-direction:reverse]": false,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
