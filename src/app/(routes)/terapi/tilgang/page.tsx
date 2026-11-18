
import type { Metadata } from "next";
import { StabletSektion, Spalte } from "../../../components/sektioner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tilgang",
  description: "Integrativ psykoterapi, der kombinerer jungiansk psykoterapi og gestaltterapi med drømmearbejde, kropssansninger og meditation.",
};

export default function Tilgang() {
  return (
    <>
      {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
      <h1 className="sr-only">Terapeutisk metode</h1>

      <StabletSektion
        id="tilgang"
        label="Tilgang"
        intro="Jeg tilbyder integrativ psykoterapi, der primært kombinerer en dybdepsykologisk tilgang fra jungiansk psykoterapi og en fænomenologisk tilgang fra gestaltterapi."
        billeder={[
          { src: "/assets/images/Lundingsgade-10.webp", alt: "Terapirummet med to lænestole, whiteboard og malerier", width: 800, height: 600 },
          { src: "/assets/images/Lundingsgade-10-liggende.webp", alt: "Terapirummet med kurvestol, træbord og lampe", width: 800, height: 600 },
        ]}
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
          <Link href="/ommig#terapeutisk-grundlag" className="text-sm uppercase tracking-wide transition-opacity hover:opacity-50 md:col-span-2 md:text-base">
    Læs mere<span className="sr-only"> om mit terapeutiske grundlag</span> <span aria-hidden="true">→</span>
  </Link>
      </StabletSektion>
    </>
  );
}
