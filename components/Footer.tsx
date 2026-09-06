export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--sandstone)", padding: "48px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            fontWeight: 500,
            fontSize: "18px",
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          FriMe（仮称）
        </p>

        <p
          style={{
            fontSize: "13px",
            color: "var(--ink)",
            lineHeight: 1.7,
            marginBottom: "24px",
            opacity: 0.7,
          }}
        >
          本ページは、開発前のサービスに関する意見募集を目的としたページです。
        </p>

        {/* Contact placeholder */}
        <p
          style={{
            fontSize: "13px",
            color: "var(--ink)",
            opacity: 0.5,
            marginBottom: "32px",
          }}
        >
          お問い合わせ先：frime.info@gmail.com
        </p>

        <p
          style={{
            fontSize: "12px",
            color: "var(--ink)",
            opacity: 0.45,
          }}
        >
          © 2026 FriMe
        </p>
      </div>
    </footer>
  );
}
