import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MentalHeal - AI Powered Mental Health Support",
  description:
    "MentalHeal kullanıcılara yapay zeka destekli mental sağlık çözümleri sunarak stres, kaygı ve diğer ruh sağlığı sorunlarını yönetmeye yardımcı olur.",
  keywords:
    "mental sağlık, yapay zeka, psikoloji, terapi, stres yönetimi, kaygı bozukluğu, CBT, duygusal destek",
  authors: [{ name: "MentalHeal Team" }],
  creator: "MentalHeal",
  publisher: "MentalHeal",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mentalheal.ai",
    siteName: "MentalHeal",
    title: "MentalHeal - Yapay Zeka ile Mental Sağlık Desteği",
    description:
      "Yapay zeka destekli mental sağlık çözümleri ile stres ve kaygılarınızı yönetin.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "MentalHeal OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MentalHeal - Yapay Zeka ile Mental Sağlık Desteği",
    description:
      "Yapay zeka destekli mental sağlık çözümleri ile stres ve kaygılarınızı yönetin.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mentalheal.ai",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={orbitron.variable}>
      <body className="font-orbitron antialiased">{children}</body>
    </html>
  );
}
