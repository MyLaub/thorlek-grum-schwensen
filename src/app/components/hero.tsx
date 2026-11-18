
import Image from "next/image";
import { BredSpalte } from "./sektioner";

export default function Hero() {
  return (
    <section aria-labelledby="hero-titel" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
      {/* row 1, col 1-3: overskrift og undertekst  
       */}
     
      <div className="space-y-6 md:col-span-3">
        <h1 id="hero-titel" className="text-3xl leading-none md:text-5xl lg:text-6xl">
          Psykoterapi og drømmearbejde
        </h1>
        <p className="text-base uppercase tracking-wide md:text-lg">
          Undersøgelse <span aria-hidden="true">·</span> Heling <span aria-hidden="true">·</span> Udvikling
        </p>
      </div>

      {/* row 2, col 1-2: fremhævet tekst og spalter i sit eget grid*/}
      <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
        {/* fremhævet, 1 spalte */}
        <div className="leading-relaxed md:col-span-2 text-lg">
          <p>
            Der kan være mange grunde til at begynde i terapi. Det kan være du står i en akut krise eller er plaget af en svær oplevelse, som går mange år tilbage. Måske er du et godt sted i livet og har mod på at dykke dybere og blive klogere på dig
            selv. Uanset årsagen kan terapi være en stor hjælp til at gribe disse udfordringer an.
          </p>
        </div>

        {/* 2 spalter */}
        <BredSpalte>
          <p>
            I min praksis møder jeg alle mennesker med åbenhed, respekt og fordomsfrihed, uanset baggrund, fortid og livssituation. Jeg arbejder ud fra et positivt menneskesyn. Det betyder, at jeg fokuserer på at styrke dine iboende ressourcer frem
            for at lede efter fejl og mangler.
          </p>
        </BredSpalte>

        <BredSpalte>
          <p>Du kan blandt andet få støtte til at arbejde med:</p>
          {/* <ul className="list-['-_'] space-y-2 pl-3">
            <li>Angst, depression og stress</li>
            <li>Bekymringer og tankemylder</li>
            <li>Selvtillid og selvværd</li>
            <li>Skyldfølelse og skam</li>
            <li>Traumer og voldsomme oplevelser</li>
            <li>Sorg og tab</li>
            <li>Relationer og parforhold</li>
            <li>Livskriser og eksistentielle kriser</li>
            <li>Integration af psykedeliske oplevelser*</li>
            <li>Længere, dybdegående selvudviklingsforløb</li>
          </ul> */}

            <ul className="list-['-_'] space-y-2 pl-3 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-5 md:gap-x-10 md:gap-y-2 md:space-y-0">
    <li>Angst, depression og stress</li>
    <li>Bekymringer og tankemylder</li>
    <li>Selvtillid og selvværd</li>
    <li>Skyldfølelse og skam</li>
    <li>Traumer og voldsomme oplevelser</li>
    <li>Sorg og tab</li>
    <li>Relationer og parforhold</li>
    <li>Livskriser og eksistentielle kriser</li>
    <li>Integration af psykedeliske oplevelser*</li>
    <li>Længere, dybdegående selvudviklingsforløb</li>
  </ul>
          <p className="text-sm italic md:text-base">*Jeg vejleder ikke om brug af psykedelika, men hjælper dig terapeutisk med at integrere oplevelsen efter.</p>
        </BredSpalte>
      </div>

      {/* row 2, col 3: portræt */}
      <Image
        src="/assets/images/thorlek.webp"
        alt="Portræt af Thorlek Grum-Schwensen"
        width={800}
        height={1000}
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 768px) 27vw, 100vw"
        className="aspect-4/5 w-full object-cover md:col-start-3 md:row-start-2 md:w-4/5 md:self-start md:justify-self-center lg:w-3/5"
      />
    </section>
  );
}
