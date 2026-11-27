import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const serif = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.thorlekterapi.dk"),
  title: {
    default: "Thorlek Grum-Schwensen | Psykoterapi og drømmearbejde",
    template: "%s | Thorlek Grum-Schwensen",
  },
  description: "Dybdegående psykoterapi og drømmearbejde på Østerbro i København. Undersøgelse, heling og udvikling.",
  openGraph: {
    siteName: "Thorlek Grum-Schwensen",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={serif.variable}>
      <body className="bg-background text-foreground font-serif">
        <Header />
        {/* den "oprindelige" margin med meget luft i top og bund: */}
        {/* <main className="px-6 py-12 md:px-10 md:py-40">{children}</main> */}

        {/* den nye margin: */}
        {/* <main className="px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">{children}</main> */}

        {/* med mere margin: */}
        {/* <main className="px-6 pt-8 pb-24 md:px-16 md:pt-12 md:pb-40 lg:px-24">{children}</main> */}

        <main className="mx-auto box-content max-w-[1200px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}