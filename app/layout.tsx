import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ranapaint.vercel.app"),
  title: {
    template: "%s | SURFART | RANA PAINT",
    default: "SURFART | RANA PAINT",
  },
  description: "油絵のサーフアートを描いてます",
  openGraph: {
    title: " SURFART | RANA PAINT",
    description: "SURFART | RANA PAINT",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://ranapaint.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta
        name="google-site-verification"
        content="Fl7M9XOeeOfD1ygnKTqs6g_qIG5Ww3Hq9qesHrWtUQ0"
      />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-MNMJXCF4ZC" />
    </html>
  );
}
