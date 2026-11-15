// src/app/global_components/praksis.tsx
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
const serif = EB_Garamond({ subsets: ["latin"] });

const linjer = [" Terapi til nedsat pris med løbende supervision.", "Studerende ved Vedfelt Instituttet."];

export default function Praksis() {
  return (
    <section id="praksis" className="scroll-mt-24 px-4 py-24 md:px-8">
      <div className="grid gap-8 md:grid-cols-3 md:items-start">
        {/* Billede: til venstre på desktop, under teksten på mobil */}
        <div className="relative order-last aspect-[14/15] w-full md:order-first">
          <Image src="/assets/index/dummy.jpg" alt="Beskriv billedet her" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        </div>

        {/* Tekst */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-base font-semibold tracking-tight text-black">Praksis</h2>
          <div className={`${serif.className} space-y-5 text-lg text-black md:text-xl`}>
            {linjer.map((linje) => (
              <p key={linje}>{linje}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
