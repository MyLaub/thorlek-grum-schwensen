// import Image from "next/image";
// import Header from "./components/header";
// import Hero from "./components/hero";
// import Praksis from "./components/praksis";
// import OmMig from "./components/om_mig";
// import Priser from "./components/priser";

// export default function Home() {
//   return (
//     <>

//       <Hero />
//       {/* <Praksis /> */}
//       {/* <OmMig />
//       <Priser /> */}
//     </>
//   );
// }

import Hero from "./components/hero";
import { SidestilletSektion, Spalte } from "./components/sektioner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-48">
      <Hero />

      <SidestilletSektion
        id="fokusomraader"
        label="Fokusområder"
        intro="I min praksis møder jeg alle mennesker med åbenhed, respekt og fordomsfrihed, uanset baggrund, fortid og livssituation. Jeg arbejder ud fra et positivt menneskesyn. Det betyder, at jeg fokuserer på at styrke dine iboende ressourcer frem for at lede efter fejl og mangler."
      >
        <Spalte>
          <p>Du kan blandt andet få støtte til at arbejde med:</p>
          <ul className="list-['-_'] space-y-2 pl-3">
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
          <p className="text-xs md:text-sm">*Jeg vejleder ikke om brug af psykedelika, men hjælper dig terapeutisk med at integrere oplevelsen efter.</p>
        </Spalte>
          <Link href="/terapi/tilgang" className="self-end md:justify-self-end text-sm uppercase tracking-wide transition-opacity hover:opacity-50">
          Læs mere <span aria-hidden="true" className="text-base md:text-lg">→</span>
        </Link>
        {/* className="text-sm uppercase tracking-wide" */}
      </SidestilletSektion>
    </div>
  );
}