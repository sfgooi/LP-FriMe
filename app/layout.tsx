import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sfgooi.github.io/LP-FriMe"),
  title: "FriMe｜金曜21時、15分だけ話す。気が合えば、その週末に会う。",
  description:
    "マッチすることではなく、実際に会うことをゴールにした新しいデートサービスを検討しています。開発前の意見を募集中です。",
  openGraph: {
    title: "FriMe｜金曜21時、15分だけ話す。気が合えば、その週末に会う。",
    description:
      "マッチすることではなく、実際に会うことをゴールにした新しいデートサービスを検討しています。開発前の意見を募集中です。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "FriMe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FriMe｜金曜21時、15分だけ話す。気が合えば、その週末に会う。",
    description:
      "マッチすることではなく、実際に会うことをゴールにした新しいデートサービスを検討しています。開発前の意見を募集中です。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
