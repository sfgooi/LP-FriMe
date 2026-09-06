import FadeIn from "./FadeIn";

const slots = [
  { label: "土 午前", active: false },
  { label: "土 午後", active: true },
  { label: "土 夜", active: false },
  { label: "日 午前", active: false },
  { label: "日 午後", active: false },
  { label: "日 夜", active: false },
];

export default function Weekend() {
  return (
    <section style={{ backgroundColor: "var(--white)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:gap-16 md:items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: heading */}
        <div className="md:w-[300px] md:shrink-0 mb-9 md:mb-0">
          <FadeIn>
            <h2 className="section-title">
              翌日か翌々日で、<br className="hidden md:inline" />2人で決める。
            </h2>
          </FadeIn>
        </div>

        {/* Right: chips + note */}
        <div className="md:flex-1">
          <FadeIn delay={80}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {slots.map((slot, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: slot.active ? "var(--green)" : "var(--cream)",
                    color: slot.active ? "var(--ink)" : "var(--gray)",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontSize: "15px",
                    fontWeight: slot.active ? 500 : 400,
                  }}
                >
                  {slot.label}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: 1.65 }}>
              時間も場所も、2人の合意で決まります。
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
