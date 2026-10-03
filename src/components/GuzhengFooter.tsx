"use client";

import React from "react";

interface GuzhengFooterProps {
  t?: any;
  lang?: "zh" | "en";
}

export default function GuzhengFooter({ t }: GuzhengFooterProps) {
  return (
    <footer className="bg-gradient-to-b from-[#3a2016] to-[#23120c] text-[#fdf8f5] py-14 px-4 relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-center items-center">
        <span className="text-[12rem] font-serif select-none">筝</span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Simbol Musik Klasik */}
        <div className="text-xl text-rose-300/80 tracking-widest font-serif">
          🌸 筝 韵 🌸
        </div>

        {/* Judul Footer */}
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-rose-100">
          {t?.guzheng?.title || "余音绕梁 • 韵律长存"}
        </h3>

        {/* Deskripsi Umum / Puisi */}
        <p className="text-sm md:text-base font-serif text-rose-200/80 max-w-2xl mx-auto leading-relaxed">
          {t?.guzheng?.desc ||
            "古筝不仅是十三弦的宫商角徵羽，更是心灵与传统文化深层次对话的桥梁。"}
        </p>

        {/* Tombol Kontak / Email */}
        <div className="pt-2">
          <a
            href="mailto:example@email.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-300/30 text-rose-100 text-sm transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>✉️</span>
            <span>{t?.footer?.title || "联系与交流"}</span>
          </a>
        </div>

        {/* Copyright & Credit Developer */}
        <div className="pt-8 border-t border-white/5 mt-6 text-xs text-rose-200/50 space-y-1">
          <p>
            © {new Date().getFullYear()} Yarong Cheng. {t?.footer?.rights || "All rights reserved."}
          </p>
          <p className="text-[11px] text-rose-300/40 font-mono">
            {t?.footer?.developedBy || "Designed & Developed by"} {" "}
            <a
              href="https://github.com/rynvoldigad" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-rose-200 transition-colors font-semibold"
            >
             Chrey 
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}