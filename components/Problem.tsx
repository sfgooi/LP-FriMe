import FadeIn from "./FadeIn";

const problems = [
  "マッチしたけど、メッセージが続かない",
  "何日もやり取りして、結局会わない",
  "会う前に相手がどんな人か分からない",
  "初デートに誘うタイミングが難しい",
  "実際に会うのが、少し不安",
];

export default function Problem() {
  return (
    <section style={{ backgroundColor: "var(--white)", padding: "64px 20px 72px" }}>
      <div
        className="md:flex md:flex-row md:gap-16 md:items-center"
        style={{ maxWidth: "1100px", margin: "0 auto" }}
      >
        {/* Left: heading */}
        <div className="md:w-[300px] md:shrink-0 mb-9 md:mb-0">
          <FadeIn>
            <h2 className="section-title">
              マッチングしても、<br className="md:hidden" />なかなか会わない。
            </h2>
          </FadeIn>
        </div>

        {/* Right: problem cards — 2-col grid on desktop */}
        <div className="md:flex-1">
          <div
            className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3"
          >
            {problems.map((p, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div
                  style={{
                    backgroundColor: "var(--cream)",
                    borderRadius: "50px",
                    padding: "18px 24px",
                    fontSize: "15px",
                    color: "var(--ink)",
                    lineHeight: 1.55,
                    height: "100%",
                  }}
                >
                  {p}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
