import { formUrl } from "@/lib/config";
import FadeIn from "./FadeIn";

export default function Cta({ source }: { source: string }) {
  return (
    <section
      style={{
        backgroundColor: source === "end" ? "var(--white)" : "var(--cream)",
        padding: "12px 20px 72px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            className="section-title"
            style={{ marginBottom: "12px", textAlign: "center" }}
          >
            ご意見をお聞かせてください。
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <p
            style={{
              fontSize: "15px",
              color: "var(--gray)",
              lineHeight: 1.65,
              marginBottom: "32px",
              maxWidth: "4250px",
            }}
          >
            まだ何も作っていない段階です。
            <br />
            それでも、この形に共感してくれる方の声をお聞きしたいです。
          </p>
        </FadeIn>

        <FadeIn delay={140}>
          <div style={{ width: "100%", maxWidth: "360px" }}>
            <a
              href={formUrl(source)}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span className="cta-dot" />
              アンケートに答える
            </a>
            <p
              style={{
                marginTop: "12px",
                fontSize: "13px",
                color: "var(--gray)",
                textAlign: "center",
              }}
            >
              約2分／開催日(リリース日)はまだ決まっていません
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
