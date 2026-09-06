"use client";
import { useEffect, useRef } from "react";

export default function ScrollHint() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        el.classList.add("hidden-hint");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="scroll-hint-wrap"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        flexShrink: 0,
      }}
    >
      <span
        className="text-[11px] md:text-[16.5px]"
        style={{
          color: "var(--gray)",
          letterSpacing: "0.06em",
        }}
      >
        SCROLL
      </span>
      <svg
        className="scroll-hint w-4 h-[10px] md:w-6 md:h-[15px]"
        viewBox="0 0 16 10"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 1L8 8L15 1"
          stroke="var(--gray)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
