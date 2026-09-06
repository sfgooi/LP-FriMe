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
              このサービスは、まだ作っていません。
              <br />
              <br />
              そもそもマッチングしない、もしくはマッチしても会えなかった、という意見を見かけたことがあります。その課題を解決するため、このサービスを作る前に、これが本当に欲しいものなのかを知りたいので、ご意見をお聞かせください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
