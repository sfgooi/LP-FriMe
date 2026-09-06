import FadeIn from "./FadeIn";

export default function Maker() {
  return (
    <section style={{ backgroundColor: "var(--cream)", padding: "72px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div
            className="md:max-w-3xl md:mx-auto"
            style={{
              backgroundColor: "var(--white)",
              borderRadius: "24px",
              padding: "36px 28px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "var(--ink)",
              }}
            >
              このサービスは、まだ何もありません。
              <br />
              <br />
              マッチングアプリで100人とマッチして誰にも会えなかった、という話をよく聞きます。なぜそうなるのかを考えて、この形にたどり着きました。作る前に、これが本当に欲しいものなのか知りたいので、意見を聞かせてください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
