
import type { Metadata } from "next";
import { StabletSektion, Spalte } from "../../../components/sektioner";;

export const metadata: Metadata = {
  title: "Meditation | Thorlek Grum-Schwensen",
  description: "Meditation kan være et nyttigt supplement til terapien. Få et gratis abonnement på Waking Up og anbefalinger til vipassana-retræter.",
};

export default function Meditation() {
  return (
    <>
      <h1 className="sr-only">Terapeutisk metode</h1>

      {/* billede tilføjes med: billede={{ src: "/assets/images/meditation.webp", alt: "" }} */}
      <StabletSektion
        id="meditation"
        label="Meditation"
        intro="Det er bestemt ikke en forudsætning for at gå i terapi, at du mediterer, men det kan være et nyttigt
supplement til terapien, særligt til at integrere og arbejde videre med det, du får kontakt med i
sessionerne."
     billeder={[{ src: "/assets/images/meditation.webp", alt: "Maleri af en mediterende figur foran et træ omgivet af blomster", width: 960, height: 1289 }]}
     >
        <Spalte>
          <p>I virkeligheden er meditation dog meget mere end et terapeutisk redskab.</p>
          <p>Hvis du er interesseret, instruerer jeg gerne i simple meditations- og afspændingsteknikker, som du
kan bruge i hverdagen uanset erfaring.</p>

          {/* obs der er her indsat et link til waking up, midt i <p>. alle links åbner automatisk i ny fane/vindue */}
          <p>
            Som registreret behandler på meditationsappen{" "}
            <a href="https://www.wakingup.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
              Waking Up
            </a>{" "}
            kan jeg give dig et længere gratis
abonnement, hvis du har lyst til at meditere ved siden af terapien. Appen tilbyder et bredt udvalg af
guidede meditationer, foredrag og samtaler om meditation og åndelig søgen.
          </p>
          <p>Jeg bruger selv den buddhistiske meditationsteknikvipassana og anbefaler følgende retræter*, hvis du
vil lære den under optimale betingelser:</p>
        </Spalte>

        <Spalte>
          <ul className="list-['-_'] space-y-2 pl-3">
            <li>
              <a href="https://indsigtsmeditation.dk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                Meditationslærer Uffe Damborg
              </a>{" "}
              (Danmark)
            </li>
            <li>
              <a href="https://www.dhamma.org/da/index" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
               S.N. Goenka
              </a>{" "}
              (Udbydes verden over)
            </li>
            <li>
              <a href="https://www.suanmokkh-idh.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-50">
                Suan Mokkh
              </a>{" "}
              (Thailand)
            </li>
          </ul>
          <p>Teknikken varierer en smule mellem de forskellige skoler, men alle kan varmt anbefales. Er du i tvivl
om, hvilken du skal vælge, hjælper jeg gerne med at finde den, der passer bedst til dig.</p>
          <p className="text-sm italic md:text-base">*Jeg er ikke tilknyttet nogen af stederne, og dette er blot en anbefaling, fordi jeg selv har haft glæde af
deres retræter.</p>
        </Spalte>
      </StabletSektion>
    </>
  );
}