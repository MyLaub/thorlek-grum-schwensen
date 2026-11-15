
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Kontakt",
//   description: "Skriv en mail eller sms for at aftale en gratis indledende samtale. Klinikken ligger på Lundingsgade 10 ved søerne på Østerbro.",
// };

// export default function Kontakt() {
//   return (
//     <div className="space-y-16 md:space-y-24">
//       <h1 className="sr-only">Kontakt</h1>

//       {/* Section 1: Kontakt */}
//       <section aria-labelledby="kontakt" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="kontakt" className="text-sm uppercase tracking-wide">
//           Kontakt
//         </h2>

//         <div className="max-w-3xl space-y-6 text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <p>Send mig en mail eller en sms, så vender jeg tilbage hurtigst muligt. Skriv gerne, hvis du ønsker en gratis indledende samtale over telefonen.</p>
//           <p>Jeg ser frem til at høre fra dig.</p>
//         </div>
//       </section>

//       {/* Section 2: Mail */}
//       <section aria-labelledby="mail" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="mail" className="text-sm uppercase tracking-wide">
//           Mail
//         </h2>

//         <div className="max-w-2xl text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <a href="mailto:thorlekgs@gmail.com" className="underline underline-offset-4 hover:opacity-50">
//             thorlekgs@gmail.com
//           </a>
//         </div>
//       </section>

//       {/* Section 3: Telefon og sms */}
//       <section aria-labelledby="telefon" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="telefon" className="text-sm uppercase tracking-wide">
//           Telefon og sms
//         </h2>

//         <div className="max-w-2xl text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <a href="tel:+4530423118" className="underline underline-offset-4 hover:opacity-50">
//             +45 30 42 31 18
//           </a>
//         </div>
//       </section>

//       {/* Section 4: Adresse */}
//       <section aria-labelledby="adresse" className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
//         <h2 id="adresse" className="text-sm uppercase tracking-wide">
//           Adresse
//         </h2>

//         <div className="max-w-2xl space-y-6 text-sm leading-relaxed tracking-wide md:col-span-2 md:text-base">
//           <p>Jeg har klinik i terapeutfællesskabet på Lundingsgade 10 ved søerne på Østerbro. Klinikken ligger ca. 10 minutters gang fra Trianglen Metrostation.</p>
//           <p>
//             <a href="https://www.google.com/maps/search/?api=1&query=Lundingsgade+10,+2100+København+Ø" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
//               Se på kort
//             </a>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }


import type { Metadata } from "next";
import { SidestilletSektion, BredSpalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skriv en mail eller sms for at aftale en gratis indledende samtale. Klinikken ligger på Lundingsgade 10 ved søerne på Østerbro.",
};

export default function Kontakt() {
  return (
    <div className="space-y-16 md:space-y-24">
      <h1 className="sr-only">Kontakt</h1>

      {/* Sektion 1: Kontakt */}
      <SidestilletSektion id="kontakt" label="Kontakt">
        <BredSpalte>
          <p>Send mig en mail eller en sms, så vender jeg tilbage hurtigst muligt. Skriv gerne, hvis du ønsker en gratis indledende samtale over telefonen.</p>
          <p>Jeg ser frem til at høre fra dig.</p>
        </BredSpalte>
      </SidestilletSektion>

      {/* Sektion 2: Mail */}
      <SidestilletSektion id="mail" label="Mail">
        <BredSpalte>
          <a href="mailto:thorlekgs@gmail.com" className="underline underline-offset-4 hover:opacity-50">
            thorlekgs@gmail.com
          </a>
        </BredSpalte>
      </SidestilletSektion>

      {/* Sektion 3: Telefon og sms */}
      <SidestilletSektion id="telefon" label="Telefon og sms">
        <BredSpalte>
          <a href="tel:+4530423118" className="underline underline-offset-4 hover:opacity-50">
            +45 30 42 31 18
          </a>
        </BredSpalte>
      </SidestilletSektion>

      {/* Sektion 4: Adresse */}
      <SidestilletSektion id="adresse" label="Adresse">
        <BredSpalte>
          <p>Jeg har klinik i terapeutfællesskabet på Lundingsgade 10 ved søerne på Østerbro. Klinikken ligger ca. 10 minutters gang fra Trianglen Metrostation.</p>
          <p>
            <a href="https://www.google.com/maps/search/?api=1&query=Lundingsgade+10,+2100+København+Ø" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
              Se på kort
            </a>
          </p>
        </BredSpalte>
      </SidestilletSektion>
    </div>
  );
}