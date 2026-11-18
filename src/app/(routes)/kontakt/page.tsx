
// import type { Metadata } from "next";
// import { StabletSektion, BredSpalte } from "../../components/sektioner";

// export const metadata: Metadata = {
//   title: "Kontakt",
//   description: "Skriv en mail eller sms for at aftale en gratis indledende samtale. Klinikken ligger på Lundingsgade 10 ved søerne på Østerbro.",
// };

// export default function Kontakt() {
//   return (
//     <div className="space-y-16 md:space-y-16">
//       <h1 className="sr-only">Kontakt</h1>

//       <StabletSektion id="kontakt" label="Kontakt">
//         <BredSpalte>
//           <p>Send mig en mail eller en sms, så vender jeg tilbage hurtigst muligt. Skriv gerne, hvis du ønsker en gratis indledende samtale over telefonen.</p>
//           <p>Jeg ser frem til at høre fra dig.</p>
//         </BredSpalte>
//       </StabletSektion>

//       <StabletSektion id="mail" label="Mail">
//         <BredSpalte>
//           <a href="mailto:xyz@gmail.com" className="underline underline-offset-4 hover:opacity-50">
//             xyz@gmail.com
//           </a>
//         </BredSpalte>
//       </StabletSektion>

//       <StabletSektion id="telefon" label="Telefon og sms">
//         <BredSpalte>
//           <a href="tel:+4530423118" className="underline underline-offset-4 hover:opacity-50">
//             +45 30 42 31 18
//           </a>
//         </BredSpalte>
//       </StabletSektion>

//       <StabletSektion id="adresse" label="Adresse">
//         <BredSpalte>
//           <p>Jeg har klinik i terapeutfællesskabet på Lundingsgade 10 ved søerne på Østerbro. Klinikken ligger ca. 10 minutters gang fra Trianglen Metrostation.</p>
//           <p>
//             <a href="https://www.google.com/maps/search/?api=1&query=Lundingsgade+10,+2100+København+Ø" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
//               Se på kort
//             </a>
//           </p>
//         </BredSpalte>
//       </StabletSektion>
//     </div>
//   );
// }

import type { Metadata } from "next";
import { StabletSektion, BredSpalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skriv en mail eller sms for at aftale en gratis indledende samtale. Klinikken ligger på Lundingsgade 10 ved søerne på Østerbro.",
};

export default function Kontakt() {
  return (
    <>
      <h1 className="sr-only">Kontakt</h1>

      <StabletSektion
        id="kontakt"
        label="Kontakt"
       billeder={[{ src: "/assets/images/soerne.webp", alt: "Udsigt over søerne", width: 800, height: 600 }]}
      >
        <BredSpalte>
          <p>Send mig en mail eller en sms, så vender jeg tilbage hurtigst muligt. Skriv gerne, hvis du ønsker en gratis indledende samtale over telefonen.</p>
          <p>Jeg ser frem til at høre fra dig.</p>

          {/* kontaktoplysninger som underpunkter */}
          <div className="space-y-8 pt-6">
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-wide md:text-base">Mail</h3>
              <a href="mailto:xyz@gmail.com" className="underline underline-offset-4 hover:opacity-50">
                xyz@gmail.com
              </a>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-wide md:text-base">Telefon og sms</h3>
              <a href="tel:+4530423118" className="underline underline-offset-4 hover:opacity-50">
                +45 30 42 31 18
              </a>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-wide md:text-base">Adresse</h3>
              <p>Jeg har klinik i terapeutfællesskabet på Lundingsgade 10 ved søerne på Østerbro. Klinikken ligger ca. 10 minutters gang fra Trianglen Metrostation.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Lundingsgade+10,+2100+København+Ø" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4 hover:opacity-50">
                Se på kort
              </a>
            </div>
          </div>
        </BredSpalte>
      </StabletSektion>
    </>
  );
}