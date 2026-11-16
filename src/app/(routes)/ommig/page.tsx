// import type { Metadata } from "next";
// import { StabletSektion, SidestilletSektion, Spalte } from "../../components/sektioner";

// export const metadata: Metadata = {
//   title: "Om mig | Thorlek Grum-Schwensen",
//   description: "Psykoterapeut under uddannelse på Vedfelt Instituttet med baggrund i samfundsvidenskab og mange års meditationspraksis.",
// };

// export default function OmMig() {
//   return (
//     <div className="space-y-20 md:space-y-48">
//       <h1 className="sr-only">Om mig</h1>

//       {/* Sektion 1: Baggrund */}
//       <StabletSektion
//         id="baggrund"
//         label="Baggrund"
//         intro="Jeg er på sidste år af Vedfelt Instituttets fireårige psykoterapeutuddannelse og har arbejdet med klienter siden 2025, både i egen praksis og som terapeut i Frivilligcenteret Fredensborg, som tilbyder terapiforløb til socialt udsatte borgere i kommunen."
//         billede={{ src: "/assets/images/thorlek.webp", alt: "Portræt af Thorlek Grum-Schwensen" }}
//       >
//         <Spalte>
//           <p>I forbindelse med mit terapeutiske arbejde og min uddannelse modtager jeg jævnligt supervision hos erfarne terapeuter. Derudover har jeg gennem mange år gået i egenterapi, hvor drømmearbejde har været en central del. Begge dele er med til at sikre dig et kvalificeret forløb.</p>
//           <p>Jeg har desuden en samfundsvidenskabelig baggrund fra Københavns Universitet og erfaring fra både den private og den offentlige sektor samt fra NGO-arbejde i Danmark og udlandet.</p>
//         </Spalte>

//         <Spalte>
//           <p>Meditation har længe haft en central plads i mit liv, og jeg har siden 2016 deltaget i mange længere meditationsretræter i stilhed og fordybelse. I den periode har jeg også boet et sammenhængende år i en ashram, hvor jeg dedikerede mig til yoga og meditation mere intensivt, end hverdagen normalt tillader.</p>
//         </Spalte>
//       </StabletSektion>

//       {/* Sektion 2: Terapeutisk grundlag, med stregtegning under labelen */}
//       <SidestilletSektion
//         id="terapeutisk-grundlag"
//         label="Terapeutisk grundlag"
//         intro="Mit terapeutiske grundlag tager udgangspunkt i kybernetisk psykoterapi, som er en integrativ metode udviklet på Vedfelt Instituttet. Metoden bygger på jungiansk psykoterapi, gestaltterapi, tegneterapi og meditative øvelser og har særligt fokus på det ubevidste og drømmearbejde."
//       >
//         <Spalte>
//           <p>En vigtig del af min træning har været fire års procesarbejde, som jeg gennemførte i 2026, hos instituttets grundlæggere, Ole og Lene Vedfelt.</p>
//           <p>Her modtog jeg mesterlærebaseret undervisning i psykoterapeutisk praksis, drømme og meditation. Ole Vedfelt har en baggrund som jungiansk analytiker og var medstifter af C.G. Jung Instituttet i København.</p>
//         </Spalte>

//         <Spalte>
//           <p>Han er kendt for sit omfattende forfatterskab om bevidsthed, drømme og ubevidst intelligens, herunder det internationalt anerkendte værk “Drømmenes dimensioner”.</p>
//           <p>Både Ole og Lene var gennem mange år i intensiv træning hos meditationslæreren Bob Moore, hvis meditationer indgår som en fast del af undervisningen på Vedfelt Instituttet.</p>
//         </Spalte>
//       </SidestilletSektion>
//     </div>
//   );
// }

import type { Metadata } from "next";
import { StabletSektion, Spalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Om mig",
  description: "Psykoterapeut under uddannelse på Vedfelt Instituttet med baggrund i samfundsvidenskab og mange års meditationspraksis.",
};

export default function OmMig() {
  return (
    <div className="space-y-16 md:space-y-24">
      {" "}
      <h1 className="sr-only">Om mig</h1>
      <StabletSektion
        id="baggrund"
        label="Baggrund"
        intro="Jeg er på sidste år af Vedfelt Instituttets fireårige psykoterapeutuddannelse og har arbejdet med klienter siden 2025, både i egen praksis og som terapeut i Frivilligcenteret Fredensborg, som tilbyder terapiforløb til socialt udsatte borgere i kommunen."
        billeder={[{ src: "/assets/images/thorlek.webp", alt: "Portræt af Thorlek Grum-Schwensen" }]}
      >
        <Spalte>
          <p>
            I forbindelse med mit terapeutiske arbejde og min uddannelse modtager jeg jævnligt supervision hos erfarne terapeuter. Derudover har jeg gennem mange år gået i egenterapi, hvor drømmearbejde har været en central del. Begge dele er med til
            at sikre dig et kvalificeret forløb.
          </p>
          <p>Jeg har desuden en samfundsvidenskabelig baggrund fra Københavns Universitet og erfaring fra både den private og den offentlige sektor samt fra NGO-arbejde i Danmark og udlandet.</p>
        </Spalte>
        <Spalte>
          <p>
            Meditation har længe haft en central plads i mit liv, og jeg har siden 2016 deltaget i mange længere meditationsretræter i stilhed og fordybelse. I den periode har jeg også boet et sammenhængende år i en ashram, hvor jeg dedikerede mig
            til yoga og meditation mere intensivt, end hverdagen normalt tillader.
          </p>
        </Spalte>
      </StabletSektion>
      <StabletSektion
        id="terapeutisk-grundlag"
        label="Terapeutisk grundlag"
        intro="Mit terapeutiske grundlag tager udgangspunkt i kybernetisk psykoterapi, som er en integrativ metode udviklet på Vedfelt Instituttet. Metoden bygger på jungiansk psykoterapi, gestaltterapi, tegneterapi og meditative øvelser og har særligt fokus på det ubevidste og drømmearbejde."
      >
        <Spalte>
          <p>En vigtig del af min træning har været fire års procesarbejde, som jeg gennemførte i 2026, hos instituttets grundlæggere, Ole og Lene Vedfelt.</p>
          <p>Her modtog jeg mesterlærebaseret undervisning i psykoterapeutisk praksis, drømme og meditation. Ole Vedfelt har en baggrund som jungiansk analytiker og var medstifter af C.G. Jung Instituttet i København.</p>
        </Spalte>
        <Spalte>
          <p>Han er kendt for sit omfattende forfatterskab om bevidsthed, drømme og ubevidst intelligens, herunder det internationalt anerkendte værk “Drømmenes dimensioner”.</p>
          <p>Både Ole og Lene var gennem mange år i intensiv træning hos meditationslæreren Bob Moore, hvis meditationer indgår som en fast del af undervisningen på Vedfelt Instituttet.</p>
        </Spalte>
      </StabletSektion>
    </div>
  );
}
