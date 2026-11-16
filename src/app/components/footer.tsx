export default function Footer() {
 

  return (
    <footer className="border-t border-neutral-300 px-6 py-12 text-sm tracking-wide md:px-10 md:py-16">
    <div className="flex flex-col gap-y-10 md:flex-row md:justify-between">

  <div className="space-y-2">
    <p className="text-lg md:text-2xl font-bold">Thorlek Grum-Schwensen</p>
    <p className="text-sm uppercase tracking-wide">Psykoterapi og drømmearbejde</p>
  </div>

  <div className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-24">
    <address className="space-y-2 not-italic">
      <h2 className="text-sm uppercase tracking-wide">Kontakt</h2>
      <p>
        <a href="mailto:thorlekgs@gmail.com" className="hover:opacity-50">
          thorlekgs@gmail.com
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

// import Link from "next/link";

// export default function Footer() {

//   return (
//     <footer className="px-6 pb-8 pt-16 md:px-10 md:pt-24">
//       {/* række 1: stort udsagn til venstre, kontakt til højre */}
//       <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
//         <p className="font-serif text-3xl leading-tight md:col-span-2 md:text-5xl">
//           <span>Send mig en mail eller en sms, så vender jeg tilbage hurtigst muligt.</span> Jeg ser frem til at høre fra dig.
//         </p>

//         <address className="space-y-2 not-italic md:text-right">
//           <a href="mailto:thorlekgs@gmail.com" className="block text-xl underline underline-offset-4 hover:opacity-50 md:text-2xl">
//             thorlekgs@gmail.com
//           </a>
//           <a href="tel:+4530423118" className="block text-xl hover:opacity-50 md:text-2xl">
//             +45 30 42 31 18
//           </a>
//         </address>
//       </div>



//       {/* række 2: links og adresse i små kolonner */}
//       <div className="mt-24 grid grid-cols-2 gap-y-10 text-sm md:mt-32 md:grid-cols-3 md:gap-x-0">
//         <nav aria-label="Sider">
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Sider</h2>
//           <ul className="space-y-1">
//             <li><Link href="/" className="hover:opacity-50">Forside</Link></li>
//             <li><Link href="/ommig" className="hover:opacity-50">Om mig</Link></li>
//             <li><Link href="/praktisk-information" className="hover:opacity-50">Praktisk information</Link></li>
//             <li><Link href="/kontakt" className="hover:opacity-50">Kontakt</Link></li>
//           </ul>
//         </nav>

//         <nav aria-label="Terapi">
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Terapi</h2>
//           <ul className="space-y-1">
//             <li><Link href="/terapi/tilgang" className="hover:opacity-50">Tilgang</Link></li>
//             <li><Link href="/terapi/droemmearbejde" className="hover:opacity-50">Drømmearbejde</Link></li>
//             <li><Link href="/terapi/kropsopmaerksomhed" className="hover:opacity-50">Kropsopmærksomhed</Link></li>
//             <li><Link href="/terapi/meditation" className="hover:opacity-50">Meditation</Link></li>
//           </ul>
//         </nav>

//         <div>
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Adresse</h2>
//           <p>
//             Lundingsgade 10
//             <br />
//             2100 København Ø
//           </p>
//         </div>
//       </div>

//       {/* række 3: stort navn i fuld bredde */}
//       <p aria-hidden="true" className="mt-24 fonts-medium text-[6.5vw] leading-none md:mt-32">
//         ©Thorlek Grum-Schwensen
//       </p>

  
//     </footer>
//   );
// }

// import Link from "next/link";

// export default function Footer() {

//   return (
//     <footer className="px-6 pb-8 pt-16 md:px-10 md:pt-24 border-t border-neutral-300">
//         <div className=" grid grid-cols-1 text-sm md:grid-cols-3 md:gap-x-10 
// ">
//   <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:col-span-2 md:grid-cols-3">
//     <nav aria-label="Sider">
//       <h2 className="mb-3 uppercase tracking-wide">Sider</h2>
//       <ul className="space-y-1">
//         <li><Link href="/" className="hover:opacity-50">Forside</Link></li>
//         <li><Link href="/ommig" className="hover:opacity-50">Om mig</Link></li>
//         <li><Link href="/praktisk-information" className="hover:opacity-50">Praktisk information</Link></li>
//         <li><Link href="/kontakt" className="hover:opacity-50">Kontakt</Link></li>
//       </ul>
//     </nav>

//     <nav aria-label="Terapi">
//       <h2 className="mb-3 uppercase tracking-wide">Terapi</h2>
//       <ul className="space-y-1">
//         <li><Link href="/terapi/tilgang" className="hover:opacity-50">Tilgang</Link></li>
//         <li><Link href="/terapi/droemmearbejde" className="hover:opacity-50">Drømmearbejde</Link></li>
//         <li><Link href="/terapi/kropsopmaerksomhed" className="hover:opacity-50">Kropsopmærksomhed</Link></li>
//         <li><Link href="/terapi/meditation" className="hover:opacity-50">Meditation</Link></li>
//       </ul>
//     </nav>

//     <div>
//       <h2 className="mb-3 uppercase tracking-wide">Adresse</h2>
//       <p>
//         Lundingsgade 10
//         <br />
//         2100 København Ø
//       </p>
//     </div>
//   </div>
// </div>
//       {/* række 1: stort udsagn til venstre, kontakt til højre */}
//     <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10 mt-24">
//   {/* @container gør, at teksten kan måle bredden af kolonne 1-2 */}
//   <div className=" md:col-span-2">
//     <p className="text-5xl whitespace-nowrap md:text-6xl lg:text-8xl leading-none">©Thorlek Grum-Schwensen</p>
//   </div>

//         <address className="space-y-2 not-italic md:self-end md:justify-self-end md:text-right">
//           <a href="mailto:thorlekgs@gmail.com" className="block text-xl underline underline-offset-4 hover:opacity-50 md:text-2xl">
//             thorlekgs@gmail.com
//           </a>
//           <a href="tel:+4530423118" className="block text-xl hover:opacity-50 md:text-2xl">
//             +45 30 42 31 18
//           </a>
//         </address>
//       </div>



//       {/* række 2: links og adresse i små kolonner */}
//       {/* række 2: links og adresse samlet i kolonne 1-2 */}

//       {/* <div className="mt-24 grid grid-cols-2 gap-y-10 text-sm md:mt-32 md:grid-cols-3 md:gap-x-0">
//         <nav aria-label="Sider">
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Sider</h2>
//           <ul className="space-y-1">
//             <li><Link href="/" className="hover:opacity-50">Forside</Link></li>
//             <li><Link href="/ommig" className="hover:opacity-50">Om mig</Link></li>
//             <li><Link href="/praktisk-information" className="hover:opacity-50">Praktisk information</Link></li>
//             <li><Link href="/kontakt" className="hover:opacity-50">Kontakt</Link></li>
//           </ul>
//         </nav>

//         <nav aria-label="Terapi">
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Terapi</h2>
//           <ul className="space-y-1">
//             <li><Link href="/terapi/tilgang" className="hover:opacity-50">Tilgang</Link></li>
//             <li><Link href="/terapi/droemmearbejde" className="hover:opacity-50">Drømmearbejde</Link></li>
//             <li><Link href="/terapi/kropsopmaerksomhed" className="hover:opacity-50">Kropsopmærksomhed</Link></li>
//             <li><Link href="/terapi/meditation" className="hover:opacity-50">Meditation</Link></li>
//           </ul>
//         </nav>

//         <div>
//           <h2 className="mb-3 text-sm uppercase tracking-wide">Adresse</h2>
//           <p>
//             Lundingsgade 10
//             <br />
//             2100 København Ø
//           </p>
//         </div>
//       </div> */}


  
//     </footer>
//   );
// }

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="px-6 pb-8 pt-16 md:px-10 md:pt-24">
//       {/* række 1: links og adresse i kolonne 1-2, kontakt i kolonne 3 */}
//       <div className="grid grid-cols-1 gap-y-12 text-sm md:grid-cols-3 md:gap-x-10">
//         <div className="grid gap-x-10 gap-y-10 md:col-span-2 md:grid-cols-3">
//           <nav aria-label="Sider">
//             <h2 className="mb-3 uppercase tracking-wide">Sider</h2>
//             <ul className="space-y-1">
//               <li><Link href="/" className="hover:opacity-50">Forside</Link></li>
//               <li><Link href="/ommig" className="hover:opacity-50">Om mig</Link></li>
//               <li><Link href="/praktisk-information" className="hover:opacity-50">Praktisk information</Link></li>
//               <li><Link href="/kontakt" className="hover:opacity-50">Kontakt</Link></li>
//             </ul>
//           </nav>

//           <nav aria-label="Terapi">
//             <h2 className="mb-3 uppercase tracking-wide">Terapi</h2>
//             <ul className="space-y-1">
//               <li><Link href="/terapi/tilgang" className="hover:opacity-50">Tilgang</Link></li>
//               <li><Link href="/terapi/droemmearbejde" className="hover:opacity-50">Drømmearbejde</Link></li>
//               <li><Link href="/terapi/kropsopmaerksomhed" className="hover:opacity-50">Kropsopmærksomhed</Link></li>
//               <li><Link href="/terapi/meditation" className="hover:opacity-50">Meditation</Link></li>
//             </ul>
//           </nav>

//           <div>
//             <h2 className="mb-3 uppercase tracking-wide">Adresse</h2>
//             <p>
//               Lundingsgade 10
//               <br />
//               2100 København Ø
//             </p>
//           </div>
//         </div>

//         {/* kontakt: ude til højre på desktop, under linkene på mobil */}
//         <address className="space-y-2 not-italic md:justify-self-end md:text-right">
//           <a href="mailto:thorlekgs@gmail.com" className="block text-xl underline underline-offset-4 hover:opacity-50 md:text-2xl">
//             thorlekgs@gmail.com
//           </a>
//           <a href="tel:+4530423118" className="block text-xl hover:opacity-50 md:text-2xl">
//             +45 30 42 31 18
//           </a>
//         </address>
//       </div>

//       {/* række 2: navnet i fuld bredde, skriftstørrelsen følger bredden */}
//       <div className="@container mt-24 md:mt-32">
//         <p className="whitespace-nowrap">©Thorlek Grum-Schwensen</p>
//       </div>
//     </footer>
//   );
// }