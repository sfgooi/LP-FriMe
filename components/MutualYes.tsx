import FadeIn from "./FadeIn";

const choices = [
  { label: "会いたい", coral: true },
  { label: "もう15分話す", coral: false },
  { label: "やめておく", coral: false },
];

export default function MutualYes() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:gap-16 md:items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: heading */}
        <div className="md:w-[300px] md:shrink-0 mb-9 md:mb-0">
          <FadeIn>
            <h2 className="section-title">
              「会いたい」は、<br/>2人ともYESのときだけ。
            </h2>
          </FadeIn>
        </div>

        {/* Right: copy + pills + note */}
        <div className="md:flex-1">
          <FadeIn delay={80}>
            <p
              style={{
                fontSize: "15px",
                color: "var(--gray)",
                lineHeight: 1.65,
                marginBottom: "36px",
              }}
            >
              15分が終わったら、それぞれが答えます。相手の回答内容は、お互いに見えません。
            </p>
          </FadeIn>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            {choices.map((c, i) => (
              <FadeIn key={i} delay={120 + i * 60}>
                <div
                  style={{
                    backgroundColor: c.coral ? "var(--coral)" : "var(--white)",
                    color: c.coral ? "var(--white)" : "var(--ink)",
                    borderRadius: "50px",
                    padding: "18px 28px",
                    fontSize: "17px",
                    fontWeight: c.coral ? 500 : 400,
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {c.coral && (
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "var(--white)",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {c.label}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "24px",
                padding: "20px 24px",
                fontSize: "14px",
                color: "var(--gray)",
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>次のステップに進めるのは、2人の気持ちが一致したときだけ。2人とも「会いたい」なら、AIと一緒に初デートプランを作ります。</strong>「もう少し話したい」なら、2人の同意であと15分だけお話しできます。「今回はやめておく」をどちらかが選んだ場合、そのお相手と今後マッチングすることはありません。
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
