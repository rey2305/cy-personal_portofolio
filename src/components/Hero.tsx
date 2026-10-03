"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center bg-[#FDFBF7] py-16 px-4">
      
      {/* =========================================================================
       * DEKORASI KUCING SISI KIRI (Desktop: Kiri Kartu | Mobile: Atas Latar)
       * ========================================================================= */}
      <div className="absolute top-6 left-2 sm:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:left-8 xl:left-14 z-0 pointer-events-none select-none transition-all duration-300">
        <div className="relative animate-float-slow">
          <div className="absolute inset-0 bg-rose-200/40 rounded-full blur-2xl scale-125 animate-pulse" />
          <svg className="w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 drop-shadow-md opacity-90" viewBox="0 0 200 200" fill="none">
            {/* Ranting Bunga */}
            <path d="M10 140 Q 60 110, 120 130 T 190 100" stroke="#B38B6D" strokeWidth="5" strokeLinecap="round" />
            <path d="M70 120 Q 90 90, 110 80" stroke="#B38B6D" strokeWidth="3" strokeLinecap="round" />
            {/* Bunga Mekar */}
            <g className="animate-spin-slow origin-[70px_120px]">
              <circle cx="70" cy="120" r="10" fill="#FFB7C5" />
              <circle cx="62" cy="112" r="8" fill="#FFC0CB" />
              <circle cx="78" cy="112" r="8" fill="#FFC0CB" />
              <circle cx="62" cy="128" r="8" fill="#FFC0CB" />
              <circle cx="78" cy="128" r="8" fill="#FFC0CB" />
              <circle cx="70" cy="120" r="4" fill="#FFE4E1" />
            </g>
            {/* Kucing Rebahan */}
            <g transform="translate(85, 80) rotate(-5)">
              <ellipse cx="40" cy="35" rx="22" ry="15" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="20" cy="28" r="14" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              <polygon points="12,18 18,8 24,18" fill="#FFB7C5" />
              <polygon points="22,18 28,10 32,20" fill="#FFB7C5" />
              <path d="M14 28 Q 17 31, 20 28" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="18" cy="32" r="1.5" fill="#FF8FA3" />
              <path d="M60 38 Q 72 30, 68 20" stroke="#FFF" strokeWidth="5" strokeLinecap="round" className="animate-tail-wag origin-[60px_38px]" />
            </g>
            {/* Kelopak Bunga Gugur */}
            <circle cx="40" cy="80" r="4" fill="#FFB7C5" className="animate-petal-fall-1" />
            <circle cx="130" cy="60" r="5" fill="#FFC0CB" className="animate-petal-fall-2" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
       * KARTU UTAMA HERO (Cheng Yarong Profil - Mandarin Base)
       * ========================================================================= */}
      <div className="relative z-10 max-w-xl w-full bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-100/80 my-8">
        
        {/* Badge / Tag Top */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
            ✨ 理性与艺术的热情 <span className="text-[10px] font-normal text-rose-400">(Logic & Artistic Passion)</span>
          </span>
          <div className="w-8 h-8 rounded-full bg-amber-900 text-amber-100 font-serif text-[10px] flex items-center justify-center font-bold shadow-sm">
            印章
          </div>
        </div>

        {/* Nama & Status */}
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 tracking-tight">
          成娅榕 <span className="text-lg sm:text-xl font-medium text-rose-700 font-sans">(Cheng Yarong)</span>
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          高中生 • 包头市第八十一中学 <span className="text-xs text-slate-400">(Baotou No. 81 Middle School)</span>
        </p>

        {/* Quote Section */}
        <blockquote className="mt-4 p-4 rounded-xl bg-rose-50/50 border-l-4 border-rose-400 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
          "在严谨的数学逻辑中寻觅和谐，在文学创作与古筝的悠扬旋律中倾注情感。"
          <span className="block mt-1 text-[11px] text-slate-400 font-sans italic">
            "Seeking harmony through mathematical precision, while weaving emotions into creative writing and the soulful melodies of the Guzheng."
          </span>
        </blockquote>

        {/* 3 Mini Cards / Photos (Menggunakan Mandarin & Path Foto Tetap Asli) */}
        <div className="grid grid-cols-3 gap-3 mt-6 items-end">
          {/* Plum Blossom */}
          <div className="bg-white rounded-xl p-2 border border-rose-100 shadow-sm flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-rose-50 flex items-center justify-center">
              <img 
                src="/images/plum-blossom.jpg" 
                alt="梅花" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-[10px] font-semibold text-rose-600 mt-1.5 flex items-center gap-0.5">
              🌸 梅花 <span className="font-normal opacity-75">(Plum Blossom)</span>
            </span>
          </div>

          {/* Avatar (Tengah) - Full & Utuh Tanpa Terpotong */}
          <div className="bg-white rounded-xl p-2 border border-rose-200 shadow-md flex flex-col items-center transform -translate-y-1">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-rose-50/50 flex items-center justify-center p-1">
              <img 
                src="/images/avatar.jpg" 
                alt="成娅榕" 
                className="w-full h-full object-contain drop-shadow-sm" 
              />
            </div>
          </div>

          {/* Orchid */}
          <div className="bg-white rounded-xl p-2 border border-rose-100 shadow-sm flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden bg-rose-50 flex items-center justify-center">
              <img 
                src="/images/orchid.jpg" 
                alt="兰花" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-[10px] font-semibold text-purple-600 mt-1.5 flex items-center gap-0.5">
              🪴 兰花 <span className="font-normal opacity-75">(Orchid)</span>
            </span>
          </div>
        </div>

      </div>

      {/* =========================================================================
       * DEKORASI KUCING SISI KANAN (Desktop: Kanan Kartu | Mobile: Bawah Latar)
       * ========================================================================= */}
      <div className="absolute bottom-6 right-2 sm:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:right-8 xl:right-14 z-0 pointer-events-none select-none transition-all duration-300">
        <div className="relative animate-float-delayed">
          <div className="absolute inset-0 bg-pink-200/40 rounded-full blur-2xl scale-125 animate-pulse" />
          <svg className="w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52 drop-shadow-md opacity-90" viewBox="0 0 200 200" fill="none">
            {/* Kelompok Bunga Mekar */}
            <g transform="translate(110, 110)">
              <circle cx="20" cy="20" r="12" fill="#FFB7C5" />
              <circle cx="10" cy="10" r="9" fill="#FFC0CB" />
              <circle cx="30" cy="10" r="9" fill="#FFC0CB" />
              <circle cx="10" cy="30" r="9" fill="#FFC0CB" />
              <circle cx="30" cy="30" r="9" fill="#FFC0CB" />
              <circle cx="20" cy="20" r="5" fill="#FFF" />
            </g>
            {/* Kucing Main Bunga */}
            <g transform="translate(45, 60)">
              <path d="M 40 80 Q 30 40, 50 30 Q 70 40, 60 80 Z" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="50" cy="25" r="15" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              <polygon points="38,18 44,5 50,16" fill="#FFB7C5" />
              <polygon points="50,16 56,5 62,18" fill="#FFB7C5" />
              <path d="M42 24 Q 45 20, 48 24" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52 24 Q 55 20, 58 24" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="41" cy="27" rx="3" ry="2" fill="#FF8FA3" opacity="0.6" />
              <ellipse cx="59" cy="27" rx="3" ry="2" fill="#FF8FA3" opacity="0.6" />
              <path d="M 60 45 Q 75 30, 80 20" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
              <circle cx="80" cy="20" r="4" fill="#FFB7C5" />
            </g>
            {/* Sparkles */}
            <path d="M 140 50 L 143 57 L 150 60 L 143 63 L 140 70 L 137 63 L 130 60 L 137 57 Z" fill="#FFD700" className="animate-twinkle" />
            <path d="M 50 40 L 52 44 L 56 45 L 52 46 L 50 50 L 48 46 L 44 45 L 48 44 Z" fill="#FFB7C5" className="animate-twinkle-delayed" />
          </svg>
        </div>
      </div>

    </section>
  );
}