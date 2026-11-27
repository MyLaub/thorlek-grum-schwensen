// import Image from "next/image";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Kropsopmærksomhed | Thorlek Grum-Schwensen",
//   description: "Følelser manifesterer sig i kroppen. Ved at inddrage kroppen i terapien får vi adgang til de følelser, der knytter sig til dine oplevelser.",
// };

// export default function Kropsopmaerksomhed() {
//   return (
//     <>
//       {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Terapeutisk metode</h1>

//       <section aria-labelledby="krop" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         {/* row 1, col 1: "label/titel" */}
//         <h2 id="krop" className="text-sm uppercase tracking-wide">
//           Krop
//         </h2>

//         {/* row 2, col 1-2: intro + brødtekst som sidder i sit "eget" grid, uafhængigt af billedet */}
//         <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
//           <p className="font-serif text-2xl leading-snug tracking-wide md:col-span-2 md:text-3xl">
//             Følelser er ikke kun noget, vi tænker, men noget, der manifesterer sig i kroppen. Det er min erfaring, at hvis tingene kun adresseres fra hovedet, får vi ikke hele historien med og vil primært opnå en intellektuel tolkning af det, der
//             bevæger sig i os. Det kan føles, som om du ikke kommer videre, selvom du bliver ved med at arbejde med det, der plager dig.
//           </p>

//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>
//               Målet med at inddrage kroppen er ikke kun at styrke terapien, men at du bliver fri af fortiden og bedre til at mærke dig selv, både i dine relationer og i dit liv i det hele taget. Med en bedre kontakt til det, der rører sig i dig, vil
//               du begynde at opleve krop og psyke som uadskillelige.
//             </p>
//           <p>Jeg vil derfor ofte invitere dig til at mærke ind i kroppen, når vi taler om tingene. Gennem kroppen får vi adgang til de følelser, der knytter sig til dine oplevelser.</p>
//           </div>

//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>
//               Det er ofte først, når følelserne også mærkes og bearbejdes
//               kropsligt, at det bliver muligt at slippe det, du har siddet fast i.
//             </p>
//             <p>For nogle er det helt naturligt at mærke ind i kroppen, og for andre vil det være mere uvant i starten. Vi starter, hvor du er.</p>
//           </div>
//         </div>

//         {/* Row 2, col 3: plads til eventuelt billede.*/}
//         {/*
//         <Image
//           src="/assets/images/krop_xyz_tegning.webp"
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
import { StabletSektion, Spalte } from "../../../components/sektioner";

export const metadata: Metadata = {
  title: "Krop | Thorlek Grum-Schwensen",
  description: "Følelser manifesterer sig i kroppen. Ved at inddrage kroppen i terapien får vi adgang til de følelser, der knytter sig til dine oplevelser.",
};

export default function Krop() {
  return (
    <>
      {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
      <h1 className="sr-only">Terapeutisk metode</h1>

      {/* billede tilføjes med: billede={{ src: "/assets/images/krop_xyz_tegning.webp", alt: "" }} */}
      <StabletSektion
        id="krop"
        label="Krop"
        intro="Følelser er ikke kun noget, der foregår i hovedet, men også noget, der manifesterer sig i kroppen. Jeg
vil derfor ofte invitere dig til at mærke, hvad der sker i kroppen, når vi taler om tingene."
     billeder={[{ src: "/assets/images/krop.webp", alt: "Middelalderlig illustration af et menneske med udstrakte arme i midten af kosmos", width: 960, height: 1416 }]}
     >
        <Spalte>
          <p>Det er min erfaring, at hvis tingene kun adresseres fra hovedet, får vi ikke hele historien med og vil
primært opnå en intellektuel tolkning af det, der bevæger sig i os.</p>
          <p>Det kan føles, som om du ikke
kommer videre, selvom du bliver ved med at arbejde med det, der plager dig. Det er ofte først, når
følelserne mærkes og bearbejdes kropsligt, at det bliver muligt at slippe det, du har siddet fast i.</p>
        </Spalte>

        <Spalte>
          <p>Målet med at inddrage kroppen er, at du bliver bedre til at mærke dig selv, både i dine relationer og i dit
liv i det hele taget. Med en bedre kontakt til det, der rører sig i dig, vil du begynde at opleve krop og
psyke som uadskillelige.</p>
          <p>For nogle er det helt naturligt at mærke ind i kroppen, og for andre vil det være mere uvant i starten. Vi
starter, hvor du er</p>
        </Spalte>
      </StabletSektion>
    </>
  );
}