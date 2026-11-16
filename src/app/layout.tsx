import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const serif = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" });

export const metadata: Metadata = {
  title: {
    default: "Thorlek Grum-Schwensen | Psykoterapi og drømmearbejde",
    template: "%s | Thorlek Grum-Schwensen",
  },
  description: "Integrativ psykoterapi og drømmearbejde på Østerbro i København.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={serif.variable}>
      <body className="bg-background text-foreground font-serif">
        <Header />
        <main className="px-6 py-12 md:px-10 md:py-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}