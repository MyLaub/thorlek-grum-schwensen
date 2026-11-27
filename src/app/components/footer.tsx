export default function Footer() {
 

  return (
    // <footer className="border-t border-neutral-300 px-6 py-12 text-sm tracking-wide md:px-10 md:py-16">
    <footer className="mx-auto box-content max-w-[1200px] px-6 pb-8 pt-16 md:px-10 md:pt-24 border-t border-neutral-300">
    <div className="flex flex-col gap-y-10 md:flex-row md:justify-between">

  <div className="space-y-2">
    <p className="text-lg md:text-2xl font-bold">Thorlek Grum-Schwensen</p>
    <p className="text-sm uppercase tracking-wide">Psykoterapi og drømmearbejde</p>
  </div>

  <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-24">
    <address className="space-y-2 not-italic">
      <h2 className="text-sm uppercase tracking-wide">Kontakt</h2>
      <p>
        <a href="mailto:thorlekterapi@proton.me" className="hover:opacity-50">
          thorlekterapi@proton.me
        </a>
      </p>
      <p>
        <a href="tel:+4530423118" className="hover:opacity-50">
          +45 30 42 31 18
        </a>
      </p>
    </address>

    <div className="space-y-2">
      <h2 className="text-sm uppercase tracking-wide">Adresse</h2>
      <p>
        Lundingsgade 10
        <br />
        2100 København Ø
      </p>
    </div>
  </div>
</div>

      <p className="mt-16 text-xs uppercase">© 2026 Thorlek Grum-Schwensen</p>
    </footer>
  );
}
