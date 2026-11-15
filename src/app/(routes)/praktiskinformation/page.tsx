// import type { Metadata } from "next";
// import image from "next/image";

// export const metadata: Metadata = {
//   title: "Praktisk information",
//   description: "Priser for terapi i klinikken og online. Mulighed for nedsat pris og en kort, uforpligtende samtale over telefonen.",
// };

// export default function PraktiskInformation() {
//   return (
//     <div className="space-y-16 md:space-y-24">
//        <h1 className="sr-only">Praktisk information</h1>
     
//       <section aria-labelledby="priser" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="priser" className="text-sm uppercase tracking-wide">
//           Priser
//         </h2>

//         <div className="max-w-3xl space-y-10 text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
        
//           <ul className="space-y-3">
//             <li className="flex justify-between gap-6">
//               <span>Terapi i klinikken, 1 time</span>
//               <span>600 kr.</span>
//             </li>
//             <li className="flex justify-between gap-6">
//               <span>Online terapi, 1 time</span>
//               <span>600 kr.</span>
//             </li>
//           </ul>

//           <div className="space-y-6">
//             <p>
//               Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske
//               arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.
//             </p>
//             <p>Ved forudbetaling af et længere forløb på 20–40 sessioner kan en lavere pris aftales.</p>
//             <p>Jeg tilbyder også enkelte forløb til nedsat pris for personer med få midler. Der er et begrænset antal pladser, og der kan forekomme venteliste.</p>
//             <p>Har du spørgsmål, er du altid velkommen til at kontakte mig på mail eller sms. Det er også muligt at aftale en kort, uforpligtende samtale over telefonen, inden du beslutter, om du vil starte.</p>
//           </div>
//         </div>
//       </section>

  
//       <section aria-labelledby="betaling" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="betaling" className="text-sm uppercase tracking-wide">
//           Betaling
//         </h2>

//         <div className="max-w-2xl text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <p>Betaling foregår via MobilePay eller kontant.</p>
//         </div>
//       </section>

  
//       <section aria-labelledby="afbud" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="afbud" className="text-sm uppercase tracking-wide">
//           Afbud
//         </h2>

//         <div className="max-w-2xl text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
//         </div>
//       </section>

//       <div className="space-y-16 md:space-y-24">
//       {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Praktisk information</h1>

//       {/* SEKTION 1: Priser */}
//       <section aria-labelledby="priser" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         {/* row 1, col 1: "label/titel" */}
//         <h2 id="priser" className="text-sm uppercase tracking-wide">
//           Priser
//         </h2>

//         {/* row 2, col 1-2: tekst, uafhængigt af billedet */}
//         <div className="space-y-10 text-sm leading-relaxed tracking-wide md:col-span-2 md:col-start-1 md:row-start-2 md:self-start md:text-base">
//           {/* prisliste: ydelse til venstre, pris til højre */}
//           <ul className="space-y-3">
//             <li className="flex justify-between gap-6">
//               <span>Terapi i klinikken, 1 time</span>
//               <span>600 kr.</span>
//             </li>
//             <li className="flex justify-between gap-6">
//               <span>Online terapi, 1 time</span>
//               <span>600 kr.</span>
//             </li>
//           </ul>

//           <div className="space-y-6">
//             <p>Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.</p>
//             <p>Ved forudbetaling af et længere forløb på 20–40 sessioner kan en lavere pris aftales.</p>
//             <p>Jeg tilbyder også enkelte forløb til nedsat pris for personer med få midler. Der er et begrænset antal pladser, og der kan forekomme venteliste.</p>
//             <p>Har du spørgsmål, er du altid velkommen til at kontakte mig på mail eller sms. Det er også muligt at aftale en kort, uforpligtende samtale over telefonen, inden du beslutter, om du vil starte.</p>
//           </div>
//         </div>

//         {/* row 2, col 3: plads til eventuelt billede */}
        
//         {/* <Image
//           src="/assets/images/soerne.webp"
//           alt="Soerne på Østerbro i København"
//           width={800}
//           height={1000}
//           sizes="(min-width: 768px) 27vw, 100vw"
//           className="aspect-3/4 w-full object-cover md:col-start-3 md:row-start-2 md:w-4/5 lg:w-3/5 md:self-center md:justify-self-center"
//         />
//         */}
//       </section>

//       {/* SEKTION 2: Betaling */}
//       <section aria-labelledby="betaling" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="betaling" className="text-sm uppercase tracking-wide">
//           Betaling
//         </h2>

//         <div className="text-sm leading-relaxed tracking-wide md:col-span-2 md:col-start-1 md:row-start-2 md:text-base">
//           <p>Betaling foregår via MobilePay eller kontant.</p>
//         </div>
//       </section>

//       {/* SEKTION 3: Afbud */}
//       <section aria-labelledby="afbud" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="afbud" className="text-sm uppercase tracking-wide">
//           Afbud
//         </h2>

//         <div className="text-sm leading-relaxed tracking-wide md:col-span-2 md:col-start-1 md:row-start-2 md:text-base">
//           <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
//         </div>
//       </section>
//     </div>
//     </div>

    
//   );
// }

import type { Metadata } from "next";
import { SidestilletSektion, BredSpalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Praktisk information",
  description: "Priser for terapi i klinikken og online. Mulighed for nedsat pris og en kort, uforpligtende samtale over telefonen.",
};

export default function PraktiskInformation() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
      <h1 className="sr-only">Praktisk information</h1>

      {/* SEKTION 1: Priser */}
      <SidestilletSektion id="priser" label="Priser">
        {/* prisliste: ydelse til venstre, pris til højre */}
        <BredSpalte>
          <ul className="space-y-3">
            <li className="flex justify-between gap-6">
              <span>Terapi i klinikken, 1 time</span>
              <span>600 kr.</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Online terapi, 1 time</span>
              <span>600 kr.</span>
            </li>
          </ul>
        </BredSpalte>

        <BredSpalte>
          <p>Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.</p>
          <p>Ved forudbetaling af et længere forløb på 20–40 sessioner kan en lavere pris aftales.</p>
          <p>Jeg tilbyder også enkelte forløb til nedsat pris for personer med få midler. Der er et begrænset antal pladser, og der kan forekomme venteliste.</p>
          <p>Har du spørgsmål, er du altid velkommen til at kontakte mig på mail eller sms. Det er også muligt at aftale en kort, uforpligtende samtale over telefonen, inden du beslutter, om du vil starte.</p>
        </BredSpalte>
      </SidestilletSektion>

      {/* SEKTION 2: Betaling */}
      <SidestilletSektion id="betaling" label="Betaling">
        <BredSpalte>
          <p>Betaling foregår via MobilePay eller kontant.</p>
        </BredSpalte>
      </SidestilletSektion>

      {/* SEKTION 3: Afbud */}
      <SidestilletSektion id="afbud" label="Afbud">
        <BredSpalte>
          <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
        </BredSpalte>
      </SidestilletSektion>
    </div>
  );
}
