"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Award } from "lucide-react";

interface PublicationsProps {
  t: any;
}

export default function Publications({ t }: PublicationsProps) {
  return (
    <section id="publications" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-2">
          {t.publications.title}
        </h2>
        <p className="text-sm font-sans text-brand-dark/60">
          {t.publications.subtitle}
        </p>
      </motion.div>

      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Paper 1: Set Theory */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          whileHover={{ rotate: 0, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-sm border border-brand-dark/15 shadow-md flex flex-col justify-between relative"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-accent text-brand-cream text-[11px] font-sans font-semibold tracking-wider rounded-sm">
                <BookOpen size={13} />
                {t.publications.paper1.tag}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-dark mb-3 leading-snug">
              {t.publications.paper1.title}
            </h3>

            <p className="text-xs font-sans text-brand-dark/60 mb-4 font-medium">
              {t.publications.paper1.publisher}
            </p>

            <p className="text-sm font-serif text-brand-dark/80 leading-relaxed mb-6">
              {t.publications.paper1.desc}
            </p>
          </div>

          <a
            href="https://mp.weixin.qq.com/s/PF-1XyHWpFALTQN1YSUy6w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans font-bold text-brand-accent hover:underline mt-auto pt-4 border-t border-brand-dark/10"
          >
            <span>{t.publications.paper1.btn}</span>
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Paper 2: National Essay */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          whileHover={{ rotate: 0, y: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-sm border border-brand-dark/15 shadow-md flex flex-col justify-between relative"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-dark text-brand-cream text-[11px] font-sans font-semibold tracking-wider rounded-sm">
                <Award size={13} />
                {t.publications.paper2.tag}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-dark mb-3 leading-snug">
              {t.publications.paper2.title}
            </h3>

            <p className="text-xs font-sans text-brand-dark/60 mb-4 font-medium">
              {t.publications.paper2.publisher}
            </p>

            <p className="text-sm font-serif text-brand-dark/80 leading-relaxed mb-6">
              {t.publications.paper2.desc}
            </p>
          </div>

          <button className="inline-flex items-center gap-2 text-xs font-sans font-bold text-brand-accent hover:underline text-left mt-auto pt-4 border-t border-brand-dark/10">
            <span>{t.publications.paper2.btn}</span>
            <ExternalLink size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}