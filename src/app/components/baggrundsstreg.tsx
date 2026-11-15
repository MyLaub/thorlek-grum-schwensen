// export default function BaggrundsStreg() {
//   return (
//     <svg aria-hidden="true" viewBox="0 0 100 1000" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full text-neutral-900 md:block">
//       <path
//         d="M 30 0 C 32 70, 46 100, 43 190 C 41 255, 52 275, 68 292 C 94 322, 99 420, 93 520 C 88 610, 72 690, 57 780 C 47 845, 45 925, 48 1000"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         vectorEffect="non-scaling-stroke"
//       />
//     </svg>
//   );
// }

// className bestemmer, hvor stregen sidder. Standard er kolonne 3 (den højre tredjedel)
export default function BaggrundsStreg({ className = "right-0 w-1/3" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-y-0 -z-10 hidden h-full animate-tegn-streg text-neutral-900 motion-reduce:animate-none md:block ${className}`}
    >
      <path
        d="M 30 0 C 32 70, 46 100, 43 190 C 41 255, 52 275, 68 292 C 94 322, 99 420, 93 520 C 88 610, 72 690, 57 780 C 47 845, 45 925, 48 1000"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}