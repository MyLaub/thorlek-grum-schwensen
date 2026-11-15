// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section aria-labelledby="hero-titel" className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
//       {/* col 1-2: overskrift, label og brødtekst i sit "eget" grid, uafhængigt af billedet */}
//       <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:grid-cols-2 md:gap-x-10 md:gap-y-12 md:self-start">
//         <h1 id="hero-titel" className="text-5xl font-medium leading-[1.05] tracking-tight md:col-span-2 md:text-6xl lg:text-7xl">
//           Psykoterapi og drømmearbejde
//         </h1>

//         <p className="text-sm uppercase tracking-wide md:col-span-2">Dybdegående terapiforløb for indsigt, heling og udvikling</p>

//         <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//           <p>Der kan være mange grunde til at begynde i terapi. Det kan være du står i en akut krise eller er plaget af en svær oplevelse, som går mange år tilbage. Måske er du et godt sted i livet og har mod på at dykke dybere og blive klogere på dig selv.</p>
//           <p>Uanset årsagen kan terapi være en stor hjælp til at gribe disse udfordringer an.</p>
//         </div>

//         <div className="space-y-6 text-sm leading-relaxed tracking-wide md:max-w-md md:text-base">
//           <p>Jeg tilbyder integrativ psykoterapi, der primært kombinerer en dybdepsykologisk tilgang fra jungiansk psykoterapi og en fænomenologisk tilgang fra gestaltterapi.</p>
//         </div>
//       </div>

//       {/* col 3: portræt, flugter med bunden af teksten */}
//       <Image
//         src="/assets/images/thorlek.webp"
//         alt="Portræt af Thorlek Grum-Schwensen"
//         width={800}
//         height={1000}
//         loading="eager"
//         fetchPriority="high"
//         sizes="(min-width: 768px) 25vw, 100vw"
//         className="aspect-3/4 w-full object-cover md:col-start-3 md:row-start-1 md:w-3/4 md:self-end md:justify-self-end"
//       />
//     </section>
//   );
// }

// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section aria-labelledby="hero-titel" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//       {/* row 1: overskrift */}
//       <h1 id="hero-titel" className="text-5xl font-medium  leading-none md:col-span-3 md:text-6xl lg:text-7xl">
//         Psykoterapi og drømmearbejde
//       </h1>

//       {/* row 2, col 1: tre ord under hinanden med komma, ligesom menuen */}
//       <h2 className="text-sm uppercase tracking-wide md:col-span-3 md:text-base">
//        Dybdegående terapiforløb for indsigt, heling og udvikling
//       </h2>

//       {/* row 3, col 1: maleri */}
//       <Image
//         src="/assets/images/thorlek.webp"
//         alt="Portræt af Thorlek Grum-Schwensen"
//         width={800}
//         height={1000}
//         loading="eager"
//         fetchPriority="high"
//         sizes="(min-width: 768px) 25vw, 100vw"
//        className="aspect-5/6 w-full object-cover md:col-start-1 md:row-start-3 md:h-[40svh] md:w-auto md:max-w-full"
//       />

//       {/* row 3, col 3: tekst, første afsnit øverst og sidste afsnit nederst ud for billedet */}
//       <div className="flex flex-col gap-6 text-sm leading-relaxed tracking-wide md:col-start-3 md:row-start-3 md:max-w-md md:justify-between md:text-base">
//         <p>Der kan være mange grunde til at begynde i terapi.<br></br><br></br>Det kan være du står i en akut krise eller er plaget af en svær oplevelse, som går mange år tilbage. Måske er du et godt sted i livet og har mod på at dykke dybere og blive klogere på dig selv.</p>
//         <p>Uanset årsagen kan terapi være en stor hjælp til at gribe disse udfordringer an.</p>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";


export default function Hero() {
  return (
    <section aria-labelledby="hero-titel" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
      {/* row 1: overskrift */}
      {/* <h1 id="hero-titel" className="text-5xl font-medium leading-none md:col-span-3 md:text-6xl lg:text-7xl">
        Psykoterapi og drømmearbejde
      </h1> */}
       <h1 id="hero-titel" className="text-4xl  leading-none md:col-span-3 md:text-6xl lg:text-8xl">
        Psykoterapi og drømmearbejde
      </h1>

      {/* row 2: undertekst */}
      <h2 className="text-sm uppercase tracking-wide md:col-span-3 md:text-base md:mb-10">Dybdegående terapiforløb for indsigt, heling og udvikling</h2>

      {/* row 3, col 1: tekst, første afsnit øverst og sidste afsnit nederst ud for billedet */}
      <div className="flex flex-col gap-6 text-sm leading-relaxed tracking-wide md:col-start-1 md:row-start-3 md:max-w-md md:justify-between md:text-base">
        <div className="space-y-6">
          <p>Der kan være mange grunde til at begynde i terapi.</p>
          <p>Det kan være du står i en akut krise eller er plaget af en svær oplevelse, som går mange år tilbage. Måske er du et godt sted i livet og har mod på at dykke dybere og blive klogere på dig selv.</p>
        </div>
        <p>Uanset årsagen kan terapi være en stor hjælp til at gribe disse udfordringer an.</p>
      </div>

      {/* row 3, col 3: portræt */}

      <Image
        src="/assets/images/thorlek.webp"
        alt="Portræt af Thorlek Grum-Schwensen"
        width={800}
        height={1000}
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 768px) 25vw, 100vw"
        className="aspect-5/6 w-full object-cover md:col-start-3 md:row-start-3 md:h-[40svh] md:w-auto md:max-w-full md:justify-self-end"
      />
    </section>
  );
}
