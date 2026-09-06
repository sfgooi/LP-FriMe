import FadeIn from "./FadeIn";

const plan = [
  { time: "14:00", text: "渋谷駅集合" },
  { time: "14:15", text: "静かなカフェで話す" },
  { time: "15:30", text: "近くの展示やギャラリーへ" },
  { time: "17:00", text: "解散" },
];

export default function AiPlan() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:items-center md:gap-12"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: text */}
        <div className="md:flex-1 mb-8 md:mb-0">
          <FadeIn>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              会うことが決まったら、<br />AIが初デートを考える。
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p
              style={{
                fontSize: "15px",
                color: "var(--gray)",
                lineHeight: 1.65,
              }}
            >
              AIだけで決めるのではなく、AIが2人のデートを考えます。予約不要の場所を中心に、当日でも動きやすいプランを提案します。
            </p>
          </FadeIn>
        </div>

        {/* Right: plan card */}
        <div className="md:flex-1">
          <FadeIn delay={140}>
            <div
              style={{
                backgroundColor: "var(--white)",
                borderRadius: "24px",
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--gray)",
                  marginBottom: "20px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                プラン例（土曜午後）
              </p>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {plan.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                      paddingBottom: i < plan.length - 1 ? "20px" : "0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                        width: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: i === 0 ? "var(--blue)" : "var(--hairline)",
                          display: "block",
                          flexShrink: 0,
                          marginTop: "4px",
                        }}
                      />
                      {i < plan.length - 1 && (
                        <span
                          style={{
                            width: "1px",
                            flex: 1,
                            backgroundColor: "var(--hairline)",
                            display: "block",
                            minHeight: "24px",
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "var(--gray)",
                          display: "block",
                          marginBottom: "2px",
                        }}
                      >
                        {item.time}
                      </span>
                      <span style={{ fontSize: "15px", color: "var(--ink)" }}>
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
