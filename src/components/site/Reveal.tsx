import { type ReactNode, type ElementType, type CSSProperties } from "react";

/**
 * Reveal — SSR-safe fade/rise in. Always renders visible; animation is purely
 * a polish layer using a CSS keyframe so the content never depends on JS.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const Comp = Tag as any;
  const style: CSSProperties = {
    animation: "guardafui-rise 700ms ease both",
    animationDelay: `${delay}ms`,
  };
  return (
    <Comp className={className} style={style}>
      {children}
    </Comp>
  );
}
