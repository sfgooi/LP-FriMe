"use client";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";

export default function FifteenMinutes() {
  const [totalSeconds, setTotalSeconds] = useState(15 * 60);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 0) return 15 * 60;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  const display = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <section style={{ backgroundColor: "var(--white)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:items-center md:gap-12"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: text */}
        <div className="md:flex-1 mb-12 md:mb-0">
          <FadeIn>
            <h2 className="section-title" style={{ marginBottom: "20px" }}>
              まず15分。
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p
              style={{
                fontSize: "15px",
                color: "var(--gray)",
                lineHeight: 1.65,
              }}
            >
              15分は短い。でも、「また話したい」と思うかどうかは、最初の15分でだいたい分かります。
            </p>
          </FadeIn>
        </div>

        {/* Right: timer card */}
        <div className="md:flex-1">
          <FadeIn delay={120}>
            <div
              style={{
                backgroundColor: "var(--cream)",
                borderRadius: "50px",
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div
                className="timer-display"
                aria-label={`残り時間 ${mins}分${secs}秒`}
              >
                {display}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "24px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--green)",
                    display: "block",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: "14px", color: "var(--gray)" }}>
                  タイマーが切れたら、それぞれ答えます
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
