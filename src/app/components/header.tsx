import Link from "next/link";
import HeaderScroll from "./header_scroll";
import MobileMenu from "./mobile_header";

export default function Header() {
  return (
    <HeaderScroll>
      <Link href="/" className="py-6 text-lg font-bold normal-case tracking-normal md:text-2xl">
        Thorlek Grum-Schwensen
      </Link>

      {/* desktop: gap-x-8 giver afstanden mellem menupunkterne */}
      <nav aria-label="Hovedmenu" className="hidden md:block">
        <ul className="flex gap-x-8 font-medium *:py-6">
          <li>
            <Link href="/" className="hover:underline hover:underline-offset-4">
              Forside
            </Link>
          </li>

          {/* Terapi med undermenu, der vises ved hover og tastaturfokus */}
          <li className="group relative">
            <Link href="/terapi/tilgang" className="hover:underline hover:underline-offset-4">
              Terapi
            </Link>
            <ul className="invisible absolute left-0 top-full space-y-3 whitespace-nowrap bg-background pb-10 opacity-0 shadow-[0_0_0_100vmax_var(--background)] [clip-path:inset(0_-100vmax)] transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-has-focus-visible:visible group-has-focus-visible:opacity-100">
              <li>
                <Link href="/terapi/tilgang" className="hover:underline hover:underline-offset-4">
                  Tilgang
                </Link>
              </li>
              <li>
                <Link href="/terapi/droemmearbejde" className="hover:underline hover:underline-offset-4">
                  Drømmearbejde
                </Link>
              </li>
              <li>
                <Link href="/terapi/krop" className="hover:underline hover:underline-offset-4">
                  Krop
                </Link>
              </li>
              <li>
                <Link href="/terapi/meditation" className="hover:underline hover:underline-offset-4">
                  Meditation
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/ommig" className="hover:underline hover:underline-offset-4">
              Om mig
            </Link>
          </li>
          <li>
            <Link href="/priser" className="hover:underline hover:underline-offset-4">
              Priser
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:underline hover:underline-offset-4">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobil: burgermenu */}
      <MobileMenu />
    </HeaderScroll>
  );
}