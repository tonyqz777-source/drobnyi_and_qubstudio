import type { Metadata } from "next";
import ImageGuard from "@/components/ImageGuard/ImageGuard";
import { Unbounded, Schibsted_Grotesk, Roboto_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Антон Дробний — Продуктовий дизайнер",
  description: "7 років у product design. Шукаю місце, де дизайн має значення. Привіт, Qubstudio.",
  openGraph: {
    title: "Антон Дробний — Продуктовий дизайнер",
    description: "7 років у product design. Шукаю місце, де дизайн має значення. Привіт, Qubstudio.",
    url: "https://qubstudio-and-drobnyi.vercel.app",
    siteName: "Anton Drobnyi",
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${unbounded.variable} ${schibstedGrotesk.variable} ${robotoMono.variable}`}>
      <body>
        <ImageGuard />
        {children}
      </body>
    </html>
  );
}
