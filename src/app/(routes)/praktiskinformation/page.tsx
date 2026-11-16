// import type { Metadata } from "next";
// import { SidestilletSektion, BredSpalte } from "../../components/sektioner";

// export const metadata: Metadata = {
//   title: "Praktisk information",
//   description: "Priser for terapi i klinikken og online. Mulighed for nedsat pris og en kort, uforpligtende samtale over telefonen.",
// };

// export default function PraktiskInformation() {
//   return (
//     <div className="space-y-16 md:space-y-24">
//       {/* indsat en "skjult" H1 - dette er udelukkende for tilgængelighed/seo-optimering */}
//       <h1 className="sr-only">Praktisk information</h1>

//       {/* SEKTION 1: Priser */}
//       <SidestilletSektion id="priser" label="Priser">
//         {/* prisliste: ydelse til venstre, pris til højre */}
//         <BredSpalte>
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
//         </BredSpalte>

//         <BredSpalte>
//           <p>Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.</p>
//           <p>Ved forudbetaling af et længere forløb på 20–40 sessioner kan en lavere pris aftales.</p>
//           <p>Jeg tilbyder også enkelte forløb til nedsat pris for personer med få midler. Der er et begrænset antal pladser, og der kan forekomme venteliste.</p>
//           <p>Har du spørgsmål, er du altid velkommen til at kontakte mig på mail eller sms. Det er også muligt at aftale en kort, uforpligtende samtale over telefonen, inden du beslutter, om du vil starte.</p>
//         </BredSpalte>
//       </SidestilletSektion>

//       {/* SEKTION 2: Betaling */}
//       <SidestilletSektion id="betaling" label="Betaling">
//         <BredSpalte>
//           <p>Betaling foregår via MobilePay eller kontant.</p>
//         </BredSpalte>
//       </SidestilletSektion>

//       {/* SEKTION 3: Afbud */}
//       <SidestilletSektion id="afbud" label="Afbud">
//         <BredSpalte>
//           <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
//         </BredSpalte>
//       </SidestilletSektion>
//     </div>
//   );
// }

import type { Metadata } from "next";
import { StabletSektion, BredSpalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Praktisk information",
  description: "Priser for terapi i klinikken og online. Mulighed for nedsat pris og en kort, uforpligtende samtale over telefonen.",
};

export default function PraktiskInformation() {
  return (
    <div className="space-y-16 md:space-y-16">
      <h1 className="sr-only">Praktisk information</h1>

      <StabletSektion id="priser" label="Priser">
        <BredSpalte>
          {/* <ul className="space-y-3">
            <li className="flex justify-between gap-6">
              <span>Terapi i klinikken, 1 time</span>
              <span>600 kr.</span>
            </li>
            <li className="flex justify-between gap-6">
              <span>Online terapi, 1 time</span>
              <span>600 kr.</span>
            </li>
          </ul> */}
          <ul className="max-w-xs space-y-3">
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
          <p>
            Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske
            arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.
          </p>
          <p>Ved forudbetaling af et længere forløb på 20–40 sessioner kan en lavere pris aftales.</p>
          <p>Jeg tilbyder også enkelte forløb til nedsat pris for personer med få midler. Der er et begrænset antal pladser, og der kan forekomme venteliste.</p>
          <p>Har du spørgsmål, er du altid velkommen til at kontakte mig på mail eller sms. Det er også muligt at aftale en kort, uforpligtende samtale over telefonen, inden du beslutter, om du vil starte.</p>
        </BredSpalte>
      </StabletSektion>

      <StabletSektion id="betaling" label="Betaling">
        <BredSpalte>
          <p>Betaling foregår via MobilePay eller kontant.</p>
        </BredSpalte>
      </StabletSektion>

      <StabletSektion id="afbud" label="Afbud">
        <BredSpalte>
          <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
        </BredSpalte>
      </StabletSektion>
    </div>
  );
}
