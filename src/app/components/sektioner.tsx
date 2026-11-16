import Image from "next/image";


export function Spalte({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 text-base leading-relaxed md:max-w-md md:text-lg">{children}</div>;
}

export function BredSpalte({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 text-base leading-relaxed md:col-span-2 md:text-lg md:max-w-3xl">{children}</div>;
}


type StabletSektionProps = {
  id: string;
  label?: string;
  intro?: string;
  billede?: { src: string; alt: string };
  children: React.ReactNode;
};

export function StabletSektion({ id, label, intro, billede, children }: StabletSektionProps) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
      {/* row 1, col 1: label */}
      <h2 id={id} className="text-sm md:text-base uppercase tracking-wide">
        {label}
      </h2>

      {/* row 2, col 1-2: intro og spalter i sit eget grid, uafhængigt af billedet */}
      <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
        {intro && <p className="font-serif leading-relaxed tracking-wide md:col-span-2 text-lg md:text-xl lg:text-2xl">{intro}</p>}
        {children}
      </div>

      {/* row 2, col 3: billede (kun hvis der er et) */}
      {billede && (
        <Image
          src={billede.src}
          alt={billede.alt}
          width={800}
          height={1000}
          sizes="(min-width: 768px) 27vw, 100vw"
          className="aspect-3/4 w-full object-cover md:col-start-3 md:row-start-2 md:w-4/5 md:self-center md:justify-self-center lg:w-3/5"
        />
      )}
    </section>
  );
}


type SidestilletSektionProps = {
  id: string;
  label?: string;
  intro?: string;
  venstre?: React.ReactNode;
  children: React.ReactNode;
};

export function SidestilletSektion({ id, label, intro, venstre, children }: SidestilletSektionProps) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
      {/* col 1: label og evt. ekstra indhold under den */}
      <div className="md:self-start">
        <h2 id={id} className="text-sm md:text-base uppercase tracking-wide">
          {label}
        </h2>
        {venstre}
      </div>

      {/* col 2-3: intro og spalter i sit eget grid */}
      <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-2 md:row-start-1 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
        {intro && <p className="font-serif leading-relaxed tracking-wide md:col-span-2 text-lg md:text-xl lg:text-2xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}