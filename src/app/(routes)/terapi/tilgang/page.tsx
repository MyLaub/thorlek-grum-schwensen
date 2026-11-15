// import Image from "next/image";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tilgang | Thorlek Grum-Schwensen",
//   description: "Integrativ psykoterapi, der kombinerer jungiansk psykoterapi og gestaltterapi med drømmearbejde, kropssansninger og meditation.",
// };

// export default function Tilgang() {
//   return (
//     <>
//         {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Terapeutisk metode</h1>

//       <section aria-labelledby="tilgang" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         {/* Kolonne 1: "label/titel" her */}
//         <h2 id="tilgang" className="text-sm uppercase tracking-wide">
//           Tilgang
//         </h2>

//         {/* Kolonne der spænder fra kol 2 til 3: intro/underoverskrift i serif */}
//         <p className="font-serif text-2xl leading-snug tracking-wide md:col-span-2 md:text-3xl">
//           Jeg tilbyder integrativ psykoterapi, der primært kombinerer en dybdepsykologisk tilgang fra jungiansk psykoterapi og en fænomenologisk tilgang fra gestaltterapi.
//         </p>

//         {/* Kolonne 2 brødtekst*/}
//         <div className="max-w-md space-y-6 text-sm md:text-base leading-relaxed tracking-wide md:col-start-2">
//           <p>Metoden favner både akutte udfordringer og tidlige traumer og prægninger, som ofte trækker tråde ind i nutiden.</p>
//           <p>Målet med terapien er at arbejde med de dybereliggende årsager til det, der fylder, så du gennem større forståelse og accept af dig selv og din livshistorie får mere frihed til at leve dit liv på den måde, som føles rigtig for dig.</p>
//           <p> Jeg er specialiseret i at arbejde med sammenhængen mellem krop, bevidsthed, meditation, drømme og følelsesliv. </p>
//         </div>

//         {/* Kolonne 3 brødtekst*/}
//         <div className="max-w-md space-y-6 text-sm md:text-base leading-relaxed tracking-wide md:col-start-3">
//           <p>I praksis betyder det, at vi kan kombinere den klassiske samtaleterapi med:</p>
//           <ul className="list-['-_'] space-y-2 pl-3">
//             <li>Oplevelsesorienteret drømmearbejde</li>
//             <li>Kropssansninger</li>
//             <li>Indre billeder og symbolarbejde</li>
//             <li>Meditative øvelser</li>
//             <li>Tegneterapi</li>
//           </ul>
//           <p>Terapien følger ikke en fast plan, men arbejder åbent og kreativt med det, du kommer med, på en måde, der giver mening for dig.</p>
//         </div>

//         {/* Billeder */}
//         <Image src="/assets/images/Lundingsgade-10.webp" alt="Terapirummet" width={800} height={800} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square w-full object-cover md:col-start-2" />
//         <Image src="/assets/images/Lundingsgade-10-2.webp" alt="Terapirummet" width={800} height={800} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square w-full object-cover md:col-start-3" />
//       </section>
//     </>
//   );
// }

import Image from "next/image";
import type { Metadata } from "next";
import { SidestilletSektion, Spalte } from "../../../components/sektioner";

export const metadata: Metadata = {
  title: "Tilgang | Thorlek Grum-Schwensen",
  description: "Integrativ psykoterapi, der kombinerer jungiansk psykoterapi og gestaltterapi med drømmearbejde, kropssansninger og meditation.",
};

export default function Tilgang() {
  return (
    <>
      {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
      <h1 className="sr-only">Terapeutisk metode</h1>

      <SidestilletSektion
        id="tilgang"
        label="Tilgang"
        intro="Jeg tilbyder integrativ psykoterapi, der primært kombinerer en dybdepsykologisk tilgang fra jungiansk psykoterapi og en fænomenologisk tilgang fra gestaltterapi."
      >
        <Spalte>
          <p>Metoden favner både akutte udfordringer og tidlige traumer og prægninger, som ofte trækker tråde ind i nutiden.</p>
          <p>Målet med terapien er at arbejde med de dybereliggende årsager til det, der fylder, så du gennem større forståelse og accept af dig selv og din livshistorie får mere frihed til at leve dit liv på den måde, som føles rigtig for dig.</p>
          <p>Jeg er specialiseret i at arbejde med sammenhængen mellem krop, bevidsthed, meditation, drømme og følelsesliv.</p>
        </Spalte>

        <Spalte>
          <p>I praksis betyder det, at vi kan kombinere den klassiske samtaleterapi med:</p>
          <ul className="list-['-_'] space-y-2 pl-3">
            <li>Oplevelsesorienteret drømmearbejde</li>
            <li>Kropssansninger</li>
            <li>Indre billeder og symbolarbejde</li>
            <li>Meditative øvelser</li>
            <li>Tegneterapi</li>
          </ul>
          <p>Terapien følger ikke en fast plan, men arbejder åbent og kreativt med det, du kommer med, på en måde, der giver mening for dig.</p>
        </Spalte>

        <Image src="/assets/images/Lundingsgade-10.webp" alt="Terapirummet" width={800} height={800} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square w-full object-cover" />
        <Image src="/assets/images/Lundingsgade-10-2.webp" alt="Terapirummet" width={800} height={800} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-square w-full object-cover" />
      </SidestilletSektion>
    </>
  );
}