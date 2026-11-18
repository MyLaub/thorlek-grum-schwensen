"use client";

import { useEffect, useState } from "react";

export default function HeaderScroll({ children }: { children: React.ReactNode }) {
  // holder styr på om headeren skal være skjult eller synlig
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // skjul når man scroller nedad og er mere end 150px nede, ellers vis
      setHidden(y > lastY && y > 150);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  

    <header className={`sticky top-0 z-50 bg-background text-sm uppercase tracking-wide transition-transform duration-300 ease-in-out motion-reduce:transition-none ${hidden ? "-translate-y-full" : ""}`}>
  <div className="mx-auto box-content flex max-w-[1200px] items-start justify-between px-6 md:px-10">{children}</div>
</header>
  );
}