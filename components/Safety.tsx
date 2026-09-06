import FadeIn from "./FadeIn";

const items = [
  "通話の録画機能は実装しない予定です",
  "相手の回答内容はお互いに公開しません",
  "通報・ブロックなどの安全機能を予定しています",
  "年齢確認・本人確認を含む安全設計を検討しています",
  "実証段階では運営が手動で進行します",
];

export default function Safety() {
  return (
    <section style={{ backgroundColor: "var(--white)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:gap-16 md:items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: heading + note */}
        <div className="md:w-[300px] md:shrink-0 mb-9 md:mb-0">
          <FadeIn>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              安心して、<br className="hidden md:inline" />最初の15分を。
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p style={{ fontSize: "14px", color: "var(--gray)", lineHeight: 1.6 }}>
              以下はすべて「予定」「検討中」の内容です。
            </p>
          </FadeIn>
        </div>

        {/* Right: items */}
        <div className="md:flex-1">
          <div className="flex flex-col">
            {items.map((item, i) => (
              <FadeIn key={i} delay={100 + i * 50}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--hairline)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--green)",
                      display: "block",
                      marginTop: "6px",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>
                    {item}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
