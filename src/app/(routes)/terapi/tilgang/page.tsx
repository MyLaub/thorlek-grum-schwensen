
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
        intro="Jeg tilbyder psykoterapi, der favner både akutte udfordringer og tidlige traumer og prægninger, som
kan trække tråde ind i nutiden."
        billeder={[
          { src: "/assets/images/Lundingsgade-10.webp", alt: "Terapirummet med to lænestole, whiteboard og malerier", width: 800, height: 600 },
          { src: "/assets/images/Lundingsgade-10-4.webp", alt: "Terapirummet med kurvestol, træbord og lampe", width: 800, height: 600 },
        ]}
      >
        <Spalte>
     
          <p>Metoden er integrativ, hvilket betyder, at den trækker på flere terapeutiske retninger, herunder den
dybdepsykologiske tilgang fra jungiansk psykoterapi og den helhedsorienterede her og nu-tilgang fra
gestaltterapi.</p>
<p>Jeg er særligt trænet i at arbejde med sammenhængen mellem krop, bevidsthed,
meditation, drømme og følelsesliv.</p>
<p>Målet med terapien er en vedvarende heling og indre udvikling, og der arbejdes derfor med de
dybereliggende årsager til det, der føles svært, frem for blot at symptombehandle.</p>
        </Spalte>

        <Spalte>
          <p>I praksis betyder det, at terapien kan inddrage:</p>
          <ul className="list-['-_'] space-y-2 pl-3">
            <li>Oplevelsesorienteret drømmearbejde</li>
            <li>Kropssansninger</li>
            <li>Indre billeder og symbolarbejde</li>
            <li>Meditative øvelser</li>
            <li>Tegneterapi</li>
          </ul>
          <p>Terapien følger ikke en fast plan, men arbejder åbent og kreativt med det, du kommer med, på en
måde, der giver mening for dig.</p>
        </Spalte>
          <Link href="/ommig#terapeutisk-grundlag" className="text-sm uppercase tracking-wide transition-opacity hover:opacity-50 md:col-span-2 md:text-base">
    Læs mere<span className="sr-only"> om mit terapeutiske grundlag</span> <span aria-hidden="true">→</span>
  </Link>
      </StabletSektion>
    </>
  );
}
