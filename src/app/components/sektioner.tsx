import Image from "next/image";

export function Spalte({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 text-base leading-relaxed md:max-w-md md:text-lg">{children}</div>;
}


export function BredSpalte({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6 text-base leading-relaxed md:col-span-2 md:text-lg ">{children}</div>;
}


type StabletSektionProps = {
  id: string;
  label: string;
  intro?: React.ReactNode;
  billeder?: { src: string; alt: string; width?: number; height?: number }[];
  children: React.ReactNode;
};
export function StabletSektion({ id, label, intro, billeder, children }: StabletSektionProps) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
      {/* row 1, col 1: label */}
      <h2 id={id} className="text-sm uppercase tracking-wide md:text-base">
        {label}
      </h2>

      {/* row 2, col 1-2: intro og spalter i sit eget grid, uafhængigt af billederne */}
      <div className="grid grid-cols-1 gap-y-8 md:col-span-2 md:col-start-1 md:row-start-2 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:self-start">
        {intro && <p className="text-lg leading-snug md:col-span-2 md:text-lg lg:text-xl">{intro}</p>}
        {children}
      </div>

      {/* row 2, col 3: et eller flere billeder under hinanden */}
      {billeder && (
        <div className="space-y-10 md:col-start-3 md:row-start-2 md:self-start">
        

{billeder.map((billede) => (
  <Image
    key={billede.src}
    src={billede.src}
    alt={billede.alt}
    width={billede.width ?? 800}
    height={billede.height ?? 1000}
    loading="eager"
    sizes="(min-width: 768px) 33vw, 100vw"
    className="h-auto w-full"
  />
))}
        </div>
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
        {intro && <p className="font-serif leading-relaxed tracking-wide md:col-span-2 text-lg md:text-lg lg:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
