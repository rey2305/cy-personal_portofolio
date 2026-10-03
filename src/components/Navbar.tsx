"use client";

interface NavbarProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
  t?: any;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 px-4 sm:px-8 py-3 flex justify-between items-center shadow-sm">
      {/* Brand / Logo Cute */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="text-xl">🌸</span>
        <span className="font-bold text-base sm:text-lg text-rose-900 tracking-wide font-serif">
          Cheng Yarong <span className="text-xs text-rose-500 font-normal">成娅榕</span>
        </span>
      </div>

      {/* Menu Navigation & Language Switcher */}
      <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
        <button onClick={() => scrollToSection("publications")} className="hidden sm:inline text-rose-800 hover:text-rose-500 transition-colors">
          📚 {lang === "zh" ? "出版物" : "Publications"}
        </button>
        <button onClick={() => scrollToSection("certificates")} className="hidden sm:inline text-rose-800 hover:text-rose-500 transition-colors">
          🏅 {lang === "zh" ? "证书" : "Certificates"}
        </button>
        <button onClick={() => scrollToSection("contact")} className="hidden sm:inline text-rose-800 hover:text-rose-500 transition-colors">
          💬 {lang === "zh" ? "联系" : "Contact"}
        </button>

        {/* CUTE TRANSLATE BUTTON (ZH / EN) */}
        <div className="flex items-center gap-1 bg-rose-50 p-1 rounded-full border border-rose-200 shadow-inner">
          <button
            onClick={() => setLang("zh")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
              lang === "zh"
                ? "bg-rose-500 text-white shadow-md scale-105"
                : "text-rose-600 hover:text-rose-800"
            }`}
          >
            <span>🇨🇳</span> 中文
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1 ${
              lang === "en"
                ? "bg-rose-500 text-white shadow-md scale-105"
                : "text-rose-600 hover:text-rose-800"
            }`}
          >
            <span>🇬🇧</span> EN
          </button>
        </div>
      </div>
    </nav>
  );
}