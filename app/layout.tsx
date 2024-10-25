import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://surf-photo.vercel.app/"),
  title: {
    template: "%s | surf photo",
    default: "surf photo",
  },
  description: "surf photo",
  openGraph: {
    title: " surf photo",
    description: "surf photo",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://surf-photo.vercel.app/",
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
