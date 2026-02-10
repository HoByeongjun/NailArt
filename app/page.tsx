import { AuroraBackground } from "@/Components/Main/Hero";
import Navbar from "@/Components/Main/Navbar";

function ThumbnailPreviewSvg() {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md rounded-xl"
    >
      {/* Thumbnail frame */}
      <rect
        x="1"
        y="1"
        width="318"
        height="178"
        rx="12"
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth="2"
        fill="currentColor"
        fillOpacity={0.05}
      />
      {/* Gradient background area */}
      <defs>
        <linearGradient id="thumbGrad" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="318" height="178" rx="12" fill="url(#thumbGrad)" />
      {/* Image placeholder lines */}
      <rect x="24" y="100" width="180" height="14" rx="4" fill="currentColor" fillOpacity={0.12} />
      <rect x="24" y="122" width="120" height="10" rx="3" fill="currentColor" fillOpacity={0.08} />
      {/* Center play button */}
      <circle cx="160" cy="70" r="24" fill="currentColor" fillOpacity={0.1} stroke="currentColor" strokeOpacity={0.2} strokeWidth="1.5" />
      <path d="M153 58l18 12-18 12V58z" fill="currentColor" fillOpacity={0.25} />
      {/* AI sparkle on thumbnail */}
      <path
        d="M270 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"
        fill="#60a5fa"
        fillOpacity={0.6}
      />
      <path
        d="M290 55l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3z"
        fill="#a5b4fc"
        fillOpacity={0.4}
      />
    </svg>
  );
}

export default function Home() {
  return (
    <AuroraBackground>
      <Navbar />
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 md:px-12 max-w-3xl mx-auto pt-20">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight text-slate-900 dark:text-white">
          Thumbnails that get
          <br />
          <span className="text-blue-500 dark:text-blue-400">clicked</span>, not skipped
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-center leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
          Just type a keyword.
          <br />
          Nailart AI generates scroll-stopping YouTube thumbnails in seconds.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href="/auth"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
          >
            Get Started Free
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/20 backdrop-blur-md bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
          >
            See Examples
          </a>
        </div>

        {/* Thumbnail preview */}
        <div className="mt-4 text-slate-700 dark:text-slate-200">
          <ThumbnailPreviewSvg />
        </div>
      </div>
    </AuroraBackground>
  );
}
