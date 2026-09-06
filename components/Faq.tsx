"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "これはもう使えるサービスですか？",
    a: "いいえ。まだ何も作っていません。作る前に意見を聞いている段階です。",
  },
  {
    q: "今回は何をするのですか？",
    a: "2分ほどのアンケートに答えていただくだけです。それ以上のことはありません。",
  },
  {
    q: "いつ始まりますか？",
    a: "決まっていません。第1回の開催が決まったら、ご希望の方にご案内します。",
  },
  {
    q: "顔出しは必要ですか？",
    a: "オンラインデートのため、顔を見ながら話すことを想定しています。",
  },
  {
    q: "合わなかった場合は？",
    a: "「やめておく」を選べます。あなたの回答内容は相手に公開しません。その方とは2度と会うことはありません。",
  },
  {
    q: "誰でも参加できますか？",
    a: "年齢確認・本人確認を含む安全設計を検討しています。参加条件は開催時にご案内します。",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "var(--white)", padding: "72px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="md:max-w-3xl md:mx-auto">
          <FadeIn>
            <h2 className="section-title" style={{ marginBottom: "36px", textAlign: "center" }}>
              よくある質問
            </h2>
          </FadeIn>

          <div style={{ borderTop: "1px solid var(--hairline)" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-btn"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <span
                    className="flex-shrink-0"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "var(--cream)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      color: "var(--ink)",
                      flexShrink: 0,
                      transition: "transform 0.2s ease",
                      transform: openIndex === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>

                {openIndex === i && (
                  <div className="faq-body">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
