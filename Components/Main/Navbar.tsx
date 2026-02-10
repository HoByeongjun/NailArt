"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

function LogoSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 14l16 10-16 10V14z" fill="currentColor" opacity={0.9} />
      <path
        d="M38 6l1.5 3.5L43 11l-3.5 1.5L38 16l-1.5-3.5L33 11l3.5-1.5L38 6z"
        fill="#60a5fa"
      />
      <path
        d="M42 18l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"
        fill="#a5b4fc"
        opacity={0.7}
      />
    </svg>
  );
}

export default function Navbar() {
  const { user, loading, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-white/60 dark:bg-black/40 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/10">
      <Link href="/" className="flex items-center gap-2 text-slate-800 dark:text-white">
        <LogoSvg />
        <span className="text-lg font-semibold tracking-tight">Nailart AI</span>
      </Link>

      {!loading && (
        <>
          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={user.user_metadata?.avatar_url || ""}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/20"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={signOut}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-sm"
            >
              Sign In
            </Link>
          )}
        </>
      )}
    </nav>
  );
}
