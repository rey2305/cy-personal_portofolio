"use client";

import React from "react";

export default function HeroDecorations() {
  return (
    <>
      {/* =========================================================================
       * DEKORASI SISI KIRI (Desktop: Kiri Kartu | Mobile: Atas Latar)
       * ========================================================================= */}
      <div className="absolute -top-10 left-2 lg:top-1/2 lg:-translate-y-1/2 lg:left-6 xl:left-12 z-0 pointer-events-none select-none transition-all duration-500">
        <div className="relative animate-float-slow">
          {/* Efek Sparkle Glow di Belakang */}
          <div className="absolute inset-0 bg-rose-200/40 rounded-full blur-2xl scale-125 animate-pulse" />

          {/* SVG Illustration: Kucing Santai + Ranting Bunga */}
          <svg
            className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 drop-shadow-md opacity-85 hover:opacity-100 transition-opacity"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ranting Bunga */}
            <path
              d="M10 140 Q 60 110, 120 130 T 190 100"
              stroke="#B38B6D"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M70 120 Q 90 90, 110 80"
              stroke="#B38B6D"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Bunga Sakura / Plum Blossom Mekar */}
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
              {/* Badan Kucing */}
              <ellipse cx="40" cy="35" rx="22" ry="15" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              {/* Kepala Kucing */}
              <circle cx="20" cy="28" r="14" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              {/* Telinga Kucing */}
              <polygon points="12,18 18,8 24,18" fill="#FFB7C5" />
              <polygon points="22,18 28,10 32,20" fill="#FFB7C5" />
              {/* Mata Meram (Tidur Nyenyak) */}
              <path d="M14 28 Q 17 31, 20 28" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Hidung & Kumis */}
              <circle cx="18" cy="32" r="1.5" fill="#FF8FA3" />
              <path d="M10 30 L 4 29 M 10 33 L 3 34" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
              {/* Ekor Bergerak */}
              <path
                d="M60 38 Q 72 30, 68 20"
                stroke="#FFF"
                strokeWidth="5"
                strokeLinecap="round"
                className="animate-tail-wag origin-[60px_38px]"
              />
            </g>

            {/* Kelopak Bunga Gugur (Floating Petals) */}
            <circle cx="40" cy="80" r="4" fill="#FFB7C5" className="animate-petal-fall-1" />
            <circle cx="130" cy="60" r="5" fill="#FFC0CB" className="animate-petal-fall-2" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
       * DEKORASI SISI KANAN (Desktop: Kanan Kartu | Mobile: Bawah Latar)
       * ========================================================================= */}
      <div className="absolute -bottom-12 right-2 lg:top-1/2 lg:-translate-y-1/2 lg:right-6 xl:right-12 z-0 pointer-events-none select-none transition-all duration-500">
        <div className="relative animate-float-delayed">
          {/* Efek Soft Glow */}
          <div className="absolute inset-0 bg-pink-200/40 rounded-full blur-2xl scale-125 animate-pulse" />

          {/* SVG Illustration: Kucing Main Bunga + Sparkles */}
          <svg
            className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 drop-shadow-md opacity-85 hover:opacity-100 transition-opacity"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Kelompok Bunga Mekar Kanan */}
            <g transform="translate(110, 110)">
              <circle cx="20" cy="20" r="12" fill="#FFB7C5" />
              <circle cx="10" cy="10" r="9" fill="#FFC0CB" />
              <circle cx="30" cy="10" r="9" fill="#FFC0CB" />
              <circle cx="10" cy="30" r="9" fill="#FFC0CB" />
              <circle cx="30" cy="30" r="9" fill="#FFC0CB" />
              <circle cx="20" cy="20" r="5" fill="#FFF" />
            </g>

            {/* Kucing Duduk Nggapai Bunga */}
            <g transform="translate(45, 60)">
              {/* Badan */}
              <path d="M 40 80 Q 30 40, 50 30 Q 70 40, 60 80 Z" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              {/* Kepala */}
              <circle cx="50" cy="25" r="15" fill="#FFF" stroke="#E2E8F0" strokeWidth="2" />
              {/* Telinga */}
              <polygon points="38,18 44,5 50,16" fill="#FFB7C5" />
              <polygon points="50,16 56,5 62,18" fill="#FFB7C5" />
              {/* Mata Lucu (Kedip/Tutup Bahagia) */}
              <path d="M42 24 Q 45 20, 48 24" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M52 24 Q 55 20, 58 24" stroke="#64748B" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Pipi Merah (Blush) */}
              <ellipse cx="41" cy="27" rx="3" ry="2" fill="#FF8FA3" opacity="0.6" />
              <ellipse cx="59" cy="27" rx="3" ry="2" fill="#FF8FA3" opacity="0.6" />
              {/* Tangan Ngangkat ke Atas (Paw) */}
              <path d="M 60 45 Q 75 30, 80 20" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
              <circle cx="80" cy="20" r="4" fill="#FFB7C5" />
            </g>

            {/* Sparkles / Efek Bintang Kelap-Kelip */}
            <path
              d="M 140 50 L 143 57 L 150 60 L 143 63 L 140 70 L 137 63 L 130 60 L 137 57 Z"
              fill="#FFD700"
              className="animate-twinkle"
            />
            <path
              d="M 50 40 L 52 44 L 56 45 L 52 46 L 50 50 L 48 46 L 44 45 L 48 44 Z"
              fill="#FFB7C5"
              className="animate-twinkle-delayed"
            />
          </svg>
        </div>
      </div>
    </>
  );
}