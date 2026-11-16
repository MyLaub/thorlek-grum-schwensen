// import Image from "next/image";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Drømmearbejde | Thorlek Grum-Schwensen",
//   description: "Drømme kan åbne for nye perspektiver og en dybere forståelse af dig selv. I terapien arbejder vi oplevelsesorienteret med drømmenes sprog.",
// };

// export default function Droemmearbejde() {
//   return (
  
//     <>
//       {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Terapeutisk metode</h1>

//       <section aria-labelledby="droemmearbejde" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         {/* row 1, col 1: "label/titel" */}
//         <h2 id="droemmearbejde" className="text-sm uppercase tracking-wide">
//           Drømmearbejde i terapi
//         </h2>

//         {/* row 2, col 1-2: intro + brødtekst som sidder i sit "eget" grid, uafhængigt af billedet */}

//         <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
//           <p className="font-serif text-2xl leading-snug tracking-wide md:col-span-2 md:text-3xl">Om du vil have drømmene med i terapien, er op til dig, men min erfaring er, at de kan være en værdifuld del af arbejdet.</p>

        
//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>Selvom nattens drømme kan virke gådefulde, kan mange huske en drøm, som har gjort stort indtryk på dem.</p>
//             <p>Drømme er et af de mest effektive redskaber til at skabe kontakt til de ubevidste lag af psyken, og de kan åbne for nye perspektiver og udviklingsmuligheder og give en dybere forståelse af dig selv.</p>
//           </div>

         
//           <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//             <p>I terapien undersøger vi sammen drømmenes sprog og arbejder oplevelsesorienteret med de associationer og følelser, drømmene vækker i dig.</p>
//             <p>Har du svært ved at huske dine drømme, vil det ofte blive nemmere, når du beslutter dig for at arbejde med dem i terapien. Jeg kan også give dig nogle simple teknikker, der gør dem nemmere at huske.</p>
//           </div>
//         </div>

//         {/* row 2, col 3: billede */}
//         <Image
//           src="/assets/images/droemme2.webp"
//           alt="Portræt af Thorlek Grum-Schwensen"
//           width={800}
//           height={1000}
//           sizes="(min-width: 768px) 27vw, 100vw"
//           className="aspect-4/5 w-full object-cover md:col-start-3 md:row-start-2 md:w-4/5 lg:w-3/5  md:self-center md:justify-self-center"
//         />
//       </section>
//     </>
//   );
// }
import type { Metadata } from "next";
import { StabletSektion, Spalte } from "../../../components/sektioner";

export const metadata: Metadata = {
  title: "Drømmearbejde | Thorlek Grum-Schwensen",
  description: "Drømme kan åbne for nye perspektiver og en dybere forståelse af dig selv. I terapien arbejder vi oplevelsesorienteret med drømmenes sprog.",
};

export default function Droemmearbejde() {
  return (
    <>
      <h1 className="sr-only">Terapeutisk metode</h1>

      <StabletSektion
        id="droemmearbejde"
        label="Drømmearbejde i terapi"
        intro="Om du vil have drømmene med i terapien, er op til dig, men min erfaring er, at de kan være en værdifuld del af arbejdet."
        billeder={[{ src: "/assets/images/droemme2.webp", alt: "Drømme" }]}
      >
        <Spalte>
          <p>Selvom nattens drømme kan virke gådefulde, kan mange huske en drøm, som har gjort stort indtryk på dem.</p>
          <p>Drømme er et af de mest effektive redskaber til at skabe kontakt til de ubevidste lag af psyken, og de kan åbne for nye perspektiver og udviklingsmuligheder og give en dybere forståelse af dig selv.</p>
        </Spalte>

        <Spalte>
          <p>I terapien undersøger vi sammen drømmenes sprog og arbejder oplevelsesorienteret med de associationer og følelser, drømmene vækker i dig.</p>
          <p>Har du svært ved at huske dine drømme, vil det ofte blive nemmere, når du beslutter dig for at arbejde med dem i terapien. Jeg kan også give dig nogle simple teknikker, der gør dem nemmere at huske.</p>
        </Spalte>
      </StabletSektion>
    </>
  );
}