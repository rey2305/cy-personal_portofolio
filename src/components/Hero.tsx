"use client";

import React from "react";

interface HeroProps {
  t?: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <div className="bg-[#fdfbf7] p-6 sm:p-8 rounded-3xl border border-rose-100/80 shadow-sm relative overflow-hidden max-w-xl mx-auto my-6">
      {/* Badge Top Left */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-medium mb-4">
        <span>✨</span> {t?.hero?.badge || "Logic & Artistic Passion"}
      </div>

      {/* Seal Badge Top Right */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#8b1528] text-[#fdfbf7] flex items-center justify-center font-serif text-[10px] leading-none font-bold shadow-sm select-none">
        印<br />SEAL
      </div>

      {/* Main Title & Subtitle */}
      <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
        Cheng Yarong <span className="text-rose-700 font-normal">({t?.hero?.nameZh || "成娅榕"})</span>
      </h1>
      <p className="text-xs sm:text-sm text-slate-500 font-serif mt-1 mb-4">
        {t?.hero?.school || "High School Student • Baotou No. 81 Middle School"}
      </p>

      {/* Quote Block */}
      <blockquote className="border-l-2 border-rose-400 pl-4 py-1 text-xs sm:text-sm italic font-serif text-slate-600 leading-relaxed bg-rose-50/30 rounded-r-xl mb-6">
        "{t?.hero?.quote || "Seeking harmony through mathematical precision, while weaving emotions into creative writing and the soulful melodies of the Guzheng."}"
      </blockquote>

      {/* Grid 3 Foto */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2">
        
        {/* 1. Bunga Plum / Sakura */}
        <div className="relative group -rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl p-1 bg-white border border-rose-100 shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=400&auto=format&fit=crop"
              alt="Plum Blossom"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-rose-50 border border-rose-200 text-rose-700 text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs">
            🌸 Plum Blossom
          </span>
        </div>

        {/* 2. Foto Profil WeChat Cheng (Tengah, Tanpa Tulisan WeChat Profile) */}
        <div className="relative group z-10 scale-105">
          <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-rose-200 via-amber-100 to-rose-300 shadow-md">
            <div className="w-full h-full rounded-xl overflow-hidden bg-white border border-white flex items-center justify-center">
              <img
                src="/images/avatar.jpg"
                alt="Cheng Yarong Profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* 3. Bunga Anggrek Alami */}
        <div className="relative group rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-2xl p-1 bg-white border border-rose-100 shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=400&auto=format&fit=crop"
              alt="Natural Orchid"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-50 border border-purple-200 text-purple-700 text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shadow-xs">
            🪻 Orchid
          </span>
        </div>

      </div>
    </div>
  );
}