// src/app/global_components/priser.tsx
import { EB_Garamond } from "next/font/google";
const serif = EB_Garamond({ subsets: ["latin"] });

const praktisk = ["Sessioner foregår online eller i klinikken hos din mor.", "En session varer 60 minutter.", "Ved afbud senere end 48 timer før betales der fuld pris."];

const priser = [
  { ydelse: "Individuel terapi", pris: "950" },
  { ydelse: "Parterapi (90 min.)", pris: "1400" },
  { ydelse: "Klippekort, 5 sessioner", pris: "4300" },
  { ydelse: "Studerende og pensionister", pris: "700" },
  { ydelse: "Første samtale (30 min.)", pris: "Gratis" },
];

const email = "kontakt@eksempel.dk";

export default function Priser() {
  return (
    <section id="priser" className="scroll-mt-24 px-4 py-24 md:px-8">
      <div className="grid gap-6 md:grid-cols-12">
        {/* Label i venstre kolonne */}
        <h2 className="text-base font-semibold tracking-tight text-black md:col-span-3">Priser og praktisk</h2>

        {/* Indhold */}
        <div className={`${serif.className} text-lg text-black md:col-span-7 md:text-xl`}>
          <div className="space-y-5">
            {praktisk.map((linje) => (
              <p key={linje}>{linje}</p>
            ))}
          </div>

          <table className="my-12 w-full">
            <tbody>
              {priser.map((p) => (
                <tr key={p.ydelse}>
                  <td className="py-1.5 pr-4">{p.ydelse}</td>
                  <td className="py-1.5 text-right">{p.pris}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="space-y-5">
            <p>Er økonomien en hindring, så skriv til mig, så finder vi en løsning.</p>
            <p>
              Har du spørgsmål, kan du skrive til{" "}
              <a href={`mailto:${email}`} className="hover:opacity-60">
                {email}
              </a>
              .
            </p>
            <p>
              <a href="#kontakt" className="underline underline-offset-4 hover:opacity-60">
                Kontakt mig her
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
