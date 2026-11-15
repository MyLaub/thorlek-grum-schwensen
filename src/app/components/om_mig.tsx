// src/app/global_components/om-mig.tsx
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
const serif = EB_Garamond({ subsets: ["latin"] });

const linjer = ["Jeg hedder Thorlek og jeg laver ballade.", "Jeg find mig i din lokale saunagus eller på dansegulvet.", ];

export default function OmMig() {
  return (
    <section id="om-mig" className="scroll-mt-24 px-4 py-24 md:px-8">
      <div className="grid gap-8 md:grid-cols-3 md:items-start">
        {/* Tekst: til venstre på desktop, øverst på mobil */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-base font-semibold tracking-tight text-black">Om mig</h2>
          <div className={`${serif.className} space-y-5 text-lg text-black md:text-xl`}>
            {linjer.map((linje) => (
              <p key={linje}>{linje}</p>
            ))}
          </div>
        </div>

        {/* Billede: til højre på desktop, under teksten på mobil */}
        <div className="relative aspect-[14/15] w-full">
          <Image src="/assets/index/thorlek.webp" alt="Beskriv billedet her" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}