import FadeIn from "./FadeIn";

const principles = [
  { text: "相手を自分で探さない", strike: true },
  { text: "長いメッセージをしない", strike: true },
  { text: "まず15分、顔を見ながら話す", strike: false },
];

export default function Concept() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Big statement */}
        <FadeIn>
          <p
            style={{
              fontSize: "clamp(13px, 2.5vw, 16px)",
              color: "var(--gray)",
              fontWeight: 400,
              marginBottom: "16px",
              letterSpacing: "0.04em",
            }}
          >
            だから、FriMe は
          </p>
          <h2
            className="heading-display"
            style={{
              fontSize: "clamp(36px, 8vw, 64px)",
              fontWeight: 500,
              color: "var(--ink)",
              marginBottom: "40px",
              maxWidth: "800px",
            }}
          >
            最初から「会う」ことを<br className="md:hidden" />
            ゴールにする。
          </h2>
        </FadeIn>

        {/* Principles */}
        <div
          className="md:flex md:flex-row md:gap-4"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {principles.map((p, i) => (
            <FadeIn key={i} delay={80 + i * 80}>
              <div
                className="md:flex-1"
                style={{
                  backgroundColor: "var(--white)",
                  borderRadius: "50px",
                  padding: "20px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <span
                  className="shrink-0"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    backgroundColor: p.strike ? "var(--sandstone)" : "var(--green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {p.strike ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <line x1="1" y1="1" x2="9" y2="9" stroke="#80827f" strokeWidth="2" strokeLinecap="round" />
                      <line x1="9" y1="1" x2="1" y2="9" stroke="#80827f" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                      <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: p.strike ? "var(--gray)" : "var(--ink)",
                    fontWeight: p.strike ? 400 : 500,
                  }}
                >
                  {p.text}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
