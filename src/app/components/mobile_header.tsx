"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // når menuen er åben: lås scroll på siden bagved og luk med Escape
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* burgerikon: tre streger der bliver til et kryds, når menuen er åben */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobilmenu"
        aria-label={open ? "Luk menu" : "Åbn menu"}
        className="relative z-10 flex h-19 w-6 flex-col items-center justify-center gap-1.5"
      >
        <span className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
        <span className={`h-[1.5px] w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav id="mobilmenu" aria-label="Hovedmenu" className="fixed inset-0 overflow-y-auto bg-[#fdfcfa] px-6 pb-10 pt-28">
          <ul className="space-y-6">
            <li><Link href="/" onClick={close}>Forside</Link></li>
            <li>
              <Link href="/terapi/tilgang" onClick={close}>Terapi</Link>
              <ul className="mt-3 space-y-3 pl-4">
                <li><Link href="/terapi/tilgang" onClick={close}>Tilgang</Link></li>
                <li><Link href="/terapi/droemmearbejde" onClick={close}>Drømmearbejde</Link></li>
                <li><Link href="/terapi/krop" onClick={close}>Krop</Link></li>
                <li><Link href="/terapi/meditation" onClick={close}>Meditation</Link></li>
              </ul>
            </li>
            <li><Link href="/ommig" onClick={close}>Om mig</Link></li>
            <li><Link href="/priser" onClick={close}>Priser</Link></li>
            <li><Link href="/kontakt" onClick={close}>Kontakt</Link></li>
          </ul>
          
        </nav>
      )}
    </div>
  );
}