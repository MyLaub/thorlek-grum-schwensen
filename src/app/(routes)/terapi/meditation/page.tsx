// import Image from "next/image";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Meditation | Thorlek Grum-Schwensen",
//   description: "Meditation kan være et nyttigt supplement til terapien. Få et gratis abonnement på Waking Up og anbefalinger til vipassana-retræter.",
// };

// export default function Meditation() {
//   return (
//     <>
//       {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Terapeutisk metode</h1>

//       <section aria-labelledby="meditation" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         {/* row 1, col 1: "label/titel" */}
//         <h2 id="meditation" className="text-sm uppercase tracking-wide">
//           Meditation
//         </h2>

//         {/* row 2, col 1-2: intro og brødtekst med eget grid*/}
//         <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
//           <p className="font-serif text-2xl leading-snug tracking-wide md:col-span-2 md:text-3xl">
//             Det er bestemt ikke en forudsætning for at gå i terapi, at du mediterer, men det kan være et nyttigt supplement til terapien, særligt til at integrere og holde fast i det, du får kontakt med i sessionerne.
//           </p>

//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>I virkeligheden er det dog meget mere end et terapeutisk redskab.</p>

//             {/* obs der er her indtat et link til waking up, midt i <p>. alle links åbner automatisk i ny fane/vindue */}
//             <p>
//               Som registreret behandler på meditationsappen{" "}
//               <a href="https://www.wakingup.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 underline underline-offset-4">
//                 Waking Up
//               </a>{" "}
//               kan jeg give dig et længere gratis abonnement, hvis du har lyst til at meditere ved siden af terapien. Appen tilbyder et bredt udvalg af guidede meditationer, foredrag og samtaler om meditation og åndelig søgen.
//             </p>
//             <p>Jeg bruger selv den buddhistiske meditationsteknik vipassana og anbefaler følgende retræter, hvis du vil lære den under optimale betingelser:</p>
//             <ul className="list-['-_'] space-y-2 pl-3">
//               <li>
//                 <a href="https://indsigtsmeditation.dk" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 underline underline-offset-4">
//                   Meditationslærer Uffe Damborg
//                 </a>{" "}
//                 (Danmark)
//               </li>
//               <li>
//                 <a href="https://www.dhamma.org/da/index" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 underline underline-offset-4">
//                   Goenka
//                 </a>{" "}
//                 (Udbydes verden over)
//               </li>
//               <li>
//                 <a href="https://www.suanmokkh-idh.org" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 underline underline-offset-4">
//                   Suan Mokkh
//                 </a>{" "}
//                 (Thailand)
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>Teknikken varierer en smule mellem de forskellige skoler, men alle kan varmt anbefales. Er du i tvivl om, hvilken du skal vælge, hjælper jeg gerne med at finde den, der passer bedst til dig.</p>
//             <p>Jeg er ikke tilknyttet nogen af stederne, og det er blot en personlig anbefaling, fordi jeg selv har haft glæde af deres retræter.</p>
//           </div>
//         </div>

//         {/* row 2, col 3: dummy-plads til billede. */}
//         {/*
//         <Image
//           src="/assets/images/meditation_xyz_tegning.webp"
//           alt=""
//           width={800}
//           height={1000}
//           sizes="(min-width: 768px) 27vw, 100vw"
//           className="aspect-3/4 w-full object-cover md:col-start-3 md:row-start-2 md:w-4/5 lg:w-3/5 md:self-center md:justify-self-center"
//         />
//         */}
//       </section>
//     </>
//   );
// }

import type { Metadata } from "next";
import { StabletSektion, Spalte } from "../../../components/sektioner";;

export const metadata: Metadata = {
  title: "Meditation | Thorlek Grum-Schwensen",
  description: "Meditation kan være et nyttigt supplement til terapien. Få et gratis abonnement på Waking Up og anbefalinger til vipassana-retræter.",
};

export default function Meditation() {
  return (
    <>
      <h1 className="sr-only">Terapeutisk metode</h1>

      {/* billede tilføjes med: billede={{ src: "/assets/images/meditation.webp", alt: "" }} */}
      <StabletSektion
        id="meditation"
        label="Meditation"
        intro="Det er bestemt ikke en forudsætning for at gå i terapi, at du mediterer, men det kan være et nyttigt supplement til terapien, særligt til at integrere og holde fast i det, du får kontakt med i sessionerne."
      >
        <Spalte>
          <p>I virkeligheden er det dog meget mere end et terapeutisk redskab.</p>

          {/* obs der er her indsat et link til waking up, midt i <p>. alle links åbner automatisk i ny fane/vindue */}
          <p>
            Som registreret behandler på meditationsappen{" "}
            <a href="https://www.wakingup.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
              Waking Up
            </a>{" "}
            kan jeg give dig et længere gratis abonnement, hvis du har lyst til at meditere ved siden af terapien. Appen tilbyder et bredt udvalg af guidede meditationer, foredrag og samtaler om meditation og åndelig søgen.
          </p>
          <p>Jeg bruger selv den buddhistiske meditationsteknik vipassana og anbefaler følgende retræter, hvis du vil lære den under optimale betingelser:</p>
          <ul className="list-['-_'] space-y-2 pl-3">
            <li>
              <a href="https://indsigtsmeditation.dk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                Meditationslærer Uffe Damborg
              </a>{" "}
              (Danmark)
            </li>
            <li>
              <a href="https://www.dhamma.org/da/index" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                Goenka
              </a>{" "}
              (Udbydes verden over)
            </li>
            <li>
              <a href="https://www.suanmokkh-idh.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                Suan Mokkh
              </a>{" "}
              (Thailand)
            </li>
          </ul>
        </Spalte>

        <Spalte>
          <p>Teknikken varierer en smule mellem de forskellige skoler, men alle kan varmt anbefales. Er du i tvivl om, hvilken du skal vælge, hjælper jeg gerne med at finde den, der passer bedst til dig.</p>
          <p>Jeg er ikke tilknyttet nogen af stederne, og det er blot en personlig anbefaling, fordi jeg selv har haft glæde af deres retræter.</p>
        </Spalte>
      </StabletSektion>
    </>
  );
}