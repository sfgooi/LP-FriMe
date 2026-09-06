import Image from "next/image";
import Link from "next/link";
import { formUrl } from "@/lib/config";
import logoMark from "@/public/logo-mark.png";

export default function Nav() {
  return (
    <header
      className="pt-2 md:pt-[14px]"
      style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        marginBottom: "-14px",
      }}
    >
      <nav
        className="flex items-center justify-between px-5 py-2 md:px-6 md:py-[14px]"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src={logoMark}
            alt=""
            width={262}
            height={238}
            priority
            className="h-8 md:h-10 w-auto"
            style={{ width: "auto" }}
          />
          <span
            aria-label="FriMe"
            style={{
              color: "var(--ink)",
              fontWeight: 500,
              fontSize: "20px",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            FriMe
          </span>
        </Link>

        <a
          href={formUrl("nav")}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{
            backgroundColor: "var(--coral)",
            color: "var(--white)",
            borderRadius: "50px",
            fontWeight: 500,
            fontSize: "14px",
            padding: "8px 18px",
            textDecoration: "none",
            transition: "opacity 0.2s",
            display: "inline-block",
          }}
        >
          アンケート
        </a>
      </nav>
    </header>
  );
}
