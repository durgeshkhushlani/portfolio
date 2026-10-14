import type { ReactNode } from "react";

const corners = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export default function HudFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden border border-border bg-background-elevated/60 backdrop-blur transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {corners.map((corner) => (
        <span
          key={corner}
          className={`pointer-events-none absolute h-3 w-3 border-accent-strong ${corner}`}
        />
      ))}
      <div className="hud-ring pointer-events-none absolute inset-0">
        <div className="hud-ring-spin absolute inset-[-150%]" />
      </div>
      {children}
    </div>
  );
}
