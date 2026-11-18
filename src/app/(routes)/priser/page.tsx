import type { Metadata } from "next";
import { StabletSektion, BredSpalte } from "../../components/sektioner";

export const metadata: Metadata = {
  title: "Priser og praktisk information",
  description: "Priser for terapi i klinikken og online. Mulighed for nedsat pris og en kort, uforpligtende samtale over telefonen.",
};

export default function Priser() {
  return (
    <>
      <h1 className="sr-only">Priser og praktisk information</h1>

      <StabletSektion
        id="priser"
        label="Priser"
        billeder={[
          { src: "/assets/images/Lundingsgade-10.webp", alt: "Terapirummet med to lænestole, whiteboard og malerier", width: 800, height: 600 },
          { src: "/assets/images/Lundingsgade-10-liggende.webp", alt: "Terapirummet med kurvestol, træbord og lampe", width: 800, height: 600 },
        ]}
      >
        <BredSpalte>
          {/* prisliste */}
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

          <p className="pt-4">Prisen ligger under markedsniveauet, da jeg er på fjerde og sidste år af psykoterapeutuddannelsen. Jeg har dog arbejdet med klienter siden 2025, både i egen praksis og som terapeut for socialt udsatte. I forbindelse med mit terapeutiske arbejde modtager jeg jævnligt supervision hos erfarne terapeuter. Det er med til at sikre dig et kvalificeret forløb.</p>

          {/* betaling og afbud som underpunkter */}
          <div className="space-y-8 pt-6">
            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-wide md:text-base">Betaling</h3>
              <p>Betaling foregår via MobilePay eller kontant.</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm uppercase tracking-wide md:text-base">Afbud</h3>
              <p>Afbud skal ske senest 24 timer inden den aftalte session. Ved senere afbud betales den fulde pris.</p>
            </div>
          </div>
        </BredSpalte>
      </StabletSektion>
    </>
  );
}