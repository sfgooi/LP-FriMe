import FadeIn from "./FadeIn";

const steps = [
  {
    num: "①",
    title: "スマホアプリをインストール",
    body: "※スマホアプリを開発予定",
  },
  {
    num: "②",
    title: "金曜21:00、相手と話す",
    body: "運営／AIが選んだ相手と、15分だけ顔を見ながら話します。1晩に最大3人と話せます。",
  },
  {
    num: "③",
    title: "タイマー終了後、それぞれが答える",
    body: "「会いたい」「もう15分話す」「やめておく」の3択。相手の回答内容は見えません。",
  },
  {
    num: "④",
    title: "必要なら延長する",
    body: "両者が「もう15分話す」か、どちらかが「会いたい」を選んだ場合、その場で15分延長します。",
  },
  {
    num: "⑤",
    title: "2人ともYESのときだけ次へ",
    body: "2人とも「会いたい」だったときのみ、週末のステップに進みます。",
  },
  {
    num: "⑥",
    title: "週末、実際に会う",
    body: "AIが初デートのプランを提案します。時間も場所も2人の合意で決めて、翌日か翌々日に会います。",
  },
];

export default function Solution() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "72px 20px" }}>
      <div
        className="md:flex md:flex-row md:gap-16 md:items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: heading */}
        <div className="md:w-[300px] md:shrink-0 mb-10 md:mb-0">
          <FadeIn>
            <h2 className="section-title">
              だから、最初から
              <br className="md:hidden" />
              「会う」ことを
              <br className="hidden md:inline" />
              ゴールにする。
            </h2>
          </FadeIn>
        </div>

        {/* Right: step cards — 2-col grid on desktop */}
        <div className="md:flex-1">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div
                  style={{
                    backgroundColor: "var(--white)",
                    borderRadius: "24px",
                    padding: "24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    height: "100%",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "var(--cream)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "var(--ink)",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: "15px",
                        color: "var(--ink)",
                        marginBottom: "6px",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--gray)",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
