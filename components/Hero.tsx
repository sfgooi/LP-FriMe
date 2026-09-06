import { formUrl } from "@/lib/config";
import ScrollHint from "./ScrollHint";
import VideoCallDemo from "./VideoCallDemo";

const conditions = [
  { text: "15分、顔を見ながら話します", color: "var(--green)" },
  { text: "2人ともYESのときだけ、次に進みます", color: "var(--blue)" },
  {
    text: "AIが2人ともの意見を参考に、初デートを考えます",
    color: "var(--coral)",
  },
];

export default function Hero() {
  return (
    <section
      className="flex flex-col"
      style={{ flex: 1, backgroundColor: "var(--cream)" }}
    >
      <div
        className="flex-1 flex flex-col max-md:justify-evenly md:grid md:grid-cols-[1fr_380px] md:gap-x-16 md:items-center px-5 pt-3 pb-2 md:px-6 md:pt-8 md:pb-6"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="max-md:contents md:flex md:flex-col">
        {/* ── Copy ── */}
        <div className="flex flex-col max-md:gap-3 max-md:order-1">
          {/* Category label */}
          <div
            className="md:mb-5"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "var(--coral)",
                display: "block",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "13px", color: "var(--gray)" }}>
              週末デートサービスを検討しています
            </span>
          </div>

          {/* Headlines */}
          <div className="md:mb-6">
            <h1
              className="heading-display text-[28px] md:text-[clamp(34px,9vw,54px)]"
              style={{
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: "6px",
              }}
            >
              金曜21時、
              <br className="sm:hidden" />
              15分だけ話す。
            </h1>
            <p
              className="heading-display text-[28px] md:text-[clamp(34px,9vw,54px)]"
              style={{
                fontWeight: 400,
                color: "var(--gray)",
              }}
            >
              気が合えば、
              <br className="sm:hidden" />
              その週末に会う。
            </p>
          </div>

          {/* Description */}
          <p
            className="md:mb-6 text-[14px] md:text-[16px]"
            style={{
              lineHeight: 1.5,
              color: "var(--ink)",
              maxWidth: "480px",
            }}
          >
            相手を探さない。長いメッセージも要らない。まず15分だけ話して、2人とも「会いたい」なら、翌日か翌々日に会います。
          </p>

          {/* Conditions */}
          <div className="flex flex-col gap-2 md:gap-3 md:mb-8">
            {conditions.map((c, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{ gap: "12px" }}
              >
                <span
                  className="shrink-0"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: c.color,
                    display: "block",
                  }}
                />
                <span
                  style={{
                    fontSize: "15px",
                    color: "var(--ink)",
                    lineHeight: 1.5,
                  }}
                >
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="max-md:order-3">
            <a
              href={formUrl("hero")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span className="cta-dot" />
              アンケートに答える
            </a>
            <p
              className="mt-1.5 md:mt-3"
              style={{
                fontSize: "13px",
                color: "var(--gray)",
                textAlign: "center",
              }}
            >
              約2分／開催日(リリース日)はまだ決まっていません
            </p>
          </div>
        </div>

        {/* ── Demo: below copy on SP, right column on PC ── */}
        <div className="w-full max-w-[380px] mx-auto max-md:order-2 md:mx-0 md:w-[380px] md:max-w-none">
          <VideoCallDemo />
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
