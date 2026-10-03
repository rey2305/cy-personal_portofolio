"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Publications from "../components/Publications";
import Certificates from "../components/Certificates";
import GuzhengFooter from "../components/GuzhengFooter";
import { dictionary } from "../data/content";

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = dictionary[lang];

  return (
    <div className="relative min-h-screen bg-[#fffaf5] text-foreground overflow-hidden selection:bg-rose-200 selection:text-rose-900">
      
      {/* Background Floral Decoration */}
      <div className="pointer-events-none fixed -top-6 -left-6 w-64 h-64 sm:w-80 sm:h-80 opacity-30 z-0 animate-pulse">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M10 10 Q 60 80, 120 100 T 190 140" stroke="#8c4a32" strokeWidth="3" strokeLinecap="round" />
          <path d="M70 85 Q 90 50, 130 40" stroke="#8c4a32" strokeWidth="2" strokeLinecap="round" />
          <g transform="translate(120, 100)">
            <circle cx="0" cy="-12" r="10" fill="#fb7185" />
            <circle cx="11" cy="-4" r="10" fill="#fb7185" />
            <circle cx="7" cy="10" r="10" fill="#fb7185" />
            <circle cx="-7" cy="10" r="10" fill="#fb7185" />
            <circle cx="-11" cy="-4" r="10" fill="#fb7185" />
            <circle cx="0" cy="0" r="4" fill="#fde047" />
          </g>
        </svg>
      </div>

      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="relative z-10 pt-20">
        <div id="hero">
          {/* @ts-ignore */}
          <Hero t={t} lang={lang} setLang={setLang} />
        </div>

        <div id="publications" className="py-2">
          <Publications t={t} />
        </div>

        <div id="certificates" className="py-2">
          <Certificates t={t} />
        </div>

        <div id="contact">
          {/* @ts-ignore */}
          <GuzhengFooter t={t} lang={lang} />
        </div>
      </main>
    </div>
  );
}