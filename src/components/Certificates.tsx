"use client";

import React, { useState } from "react";

export interface CertificateZH {
  id: string;
  titleEn: string;
  titleZh: string;
  issuerEn: string;
  issuerZh: string;
  recipientEn: string;
  recipientZh: string;
  categoryEn: string;
  categoryZh: string;
  gradeEn: string;
  gradeZh: string;
  issueDate: string;
  certificateNumber: string;
  image: string;
  descriptionEn: string;
  descriptionZh: string;
}

export const certificatesDataZH: CertificateZH[] = [
  /* ========================================================================
   * Certificate 1 -> File: c1.jpg
   * 27th Yuwenbao Cup Writing Competition Silver Award
   * ======================================================================== */
  {
    id: "c1",
    titleEn: "27th Yuwenbao Cup Writing Competition Silver Award",
    titleZh: "第二十七届“语文报杯”银牌作品奖状",
    issuerEn: "Chinese Language and Periodical Association & Yuwenbao Editorial Board",
    issuerZh: "中国语文报刊协会 / 语文报社《语文教学通讯》编辑部",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Academic / Writing",
    categoryZh: "学术 / 写作",
    gradeEn: "Silver Medal",
    gradeZh: "银牌作品",
    issueDate: "2025-09",
    certificateNumber: "YWBB-A 202524278",
    image: "/images/certificates/c1.jpg",
    descriptionEn: "Awarded Silver Medal for the essay '逸志拓荒时代路，勤学勇立时代潮' in the 27th Yuwenbao Cup national writing competition under teacher Bao Shubai.",
    descriptionZh: "在第二十七届“语文报杯”中学生主题征文行动中，作文《逸志拓荒时代路，勤学勇立时代潮》被评为银牌作品（指导教师：鲍树柏）。"
  },

  /* ========================================================================
   * Certificate 2 -> File: c2.jpg
   * Baotou Outstanding Student Representative Award (Legal Knowledge)
   * ======================================================================== */
  {
    id: "c2",
    titleEn: "Baotou Outstanding Student Representative Award",
    titleZh: "包头市中小学生法律知识竞赛优秀学生代表",
    issuerEn: "Baotou Education Bureau",
    issuerZh: "包头市教育局",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Honor / Law",
    categoryZh: "荣誉 / 法律",
    gradeEn: "Outstanding Student Representative",
    gradeZh: "优秀学生代表",
    issueDate: "2024",
    certificateNumber: "-",
    image: "/images/certificates/c2.jpg",
    descriptionEn: "Awarded Outstanding Student Representative in the 2024 Baotou Student Competence & Legal Knowledge Competition.",
    descriptionZh: "在2024年包头市中小学生素养竞赛暨法律知识竞赛中表现优异，被评为“优秀学生代表”。"
  },

  /* ========================================================================
   * Certificate 3 -> File: c3.jpg
   * Dade Cup Hard-Pen Calligraphy Competition First Prize
   * ======================================================================== */
  {
    id: "c3",
    titleEn: "1st Prize in 'Dade Cup' Hard-Pen Calligraphy Competition",
    titleZh: "高一年级“达德杯”硬笔书法比赛一等奖",
    issuerEn: "Baotou No. 81 Middle School",
    issuerZh: "包头市第八十一中学",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Arts / Calligraphy",
    categoryZh: "艺术 / 书法",
    gradeEn: "1st Prize",
    gradeZh: "一等奖",
    issueDate: "2025-04",
    certificateNumber: "-",
    image: "/images/certificates/c3.jpg",
    descriptionEn: "Won First Prize in the Grade 10 'Dade Cup' Hard-Pen Calligraphy Competition.",
    descriptionZh: "在高一年级“达德杯”硬笔书法比赛中荣获一等奖。"
  },

  /* ========================================================================
   * Certificate 4 -> File: c4.jpg
   * Individual Outstanding Contribution Award
   * ======================================================================== */
  {
    id: "c4",
    titleEn: "Individual Outstanding Contribution Award",
    titleZh: "“我对祖国深情告白”个人突出贡献奖",
    issuerEn: "Communist Youth League, Baotou No. 81 Middle School",
    issuerZh: "共青团包头市第八十一中学委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Honor / Activity",
    categoryZh: "荣誉 / 活动",
    gradeEn: "Outstanding Contribution",
    gradeZh: "个人突出贡献奖",
    issueDate: "2025-11",
    certificateNumber: "-",
    image: "/images/certificates/c4.jpg",
    descriptionEn: "Awarded Individual Outstanding Contribution Award in the 'Deep Affectionate Confession to the Motherland' activity.",
    descriptionZh: "在包头市第八十一中学2025—2026学年度第一学期“我对祖国深情告白”活动中表现优异，荣获“个人突出贡献”奖。"
  },

  /* ========================================================================
   * Certificate 5 -> File: c5.jpg
   * Textbook Drama Poster Design Second Prize
   * ======================================================================== */
  {
    id: "c5",
    titleEn: "2nd Prize in Textbook Drama Poster Design Competition",
    titleZh: "课本剧海报设计比赛二等奖",
    issuerEn: "Teaching & Research Office / Chinese Group, Baotou No. 81 Middle School",
    issuerZh: "包头市第八十一中学教研处 语文教研组",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Design / Arts",
    categoryZh: "设计 / 艺术",
    gradeEn: "2nd Prize",
    gradeZh: "二等奖",
    issueDate: "2025-12",
    certificateNumber: "-",
    image: "/images/certificates/c5.jpg",
    descriptionEn: "Won Second Prize in the 'Campus Reading Festival - Textbook Drama Poster Design' activity.",
    descriptionZh: "在“校园读书节——课本剧海报设计”活动中凭借出色表现荣获二等奖。"
  },

  /* ========================================================================
   * Certificate 6 -> File: c6.jpg
   * Teacher's Day Student Tribute Award
   * ======================================================================== */
  {
    id: "c6",
    titleEn: "Teacher's Day Student Tribute Award",
    titleZh: "教师节学生献礼活动表彰证书",
    issuerEn: "Communist Youth League, Baotou No. 81 Middle School",
    issuerZh: "共青团包头市第八十一中学委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Honor / Activity",
    categoryZh: "荣誉 / 活动",
    gradeEn: "Outstanding Performance",
    gradeZh: "表现突出",
    issueDate: "2025-09",
    certificateNumber: "-",
    image: "/images/certificates/c6.jpg",
    descriptionEn: "Recognized for outstanding performance in the Teacher's Day Tribute Activity.",
    descriptionZh: "在包头市第八十一中学教师节学生献礼活动中表现突出。"
  },

  /* ========================================================================
   * Certificate 7 -> File: c7.jpg
   * Qingshan District Five-Good Student Award
   * ======================================================================== */
  {
    id: "c7",
    titleEn: "Qingshan District Five-Good Student Award",
    titleZh: "青山区“五好学生”荣誉证书",
    issuerEn: "Qingshan District Education Bureau",
    issuerZh: "青山区教育局",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Academic / General Honor",
    categoryZh: "学术 / 综合荣誉",
    gradeEn: "Five-Good Student",
    gradeZh: "五好学生",
    issueDate: "2020-05",
    certificateNumber: "-",
    image: "/images/certificates/c7.jpg",
    descriptionEn: "Awarded the title of 'Five-Good Student' (all-round excellent student) for the 2019-2020 academic year.",
    descriptionZh: "被评为2019-2020学年度青山区“五好学生”。"
  },

  /* ========================================================================
   * Certificate 8 -> File: c8.jpg
   * Elementary Knowledge of Music Grade 1 (China Conservatory)
   * ======================================================================== */
  {
    id: "c8",
    titleEn: "Elementary Knowledge of Music Grade 1 Certificate",
    titleZh: "中国音乐学院音乐基础知识一级证书",
    issuerEn: "Grading Committee of China Conservatory of Music",
    issuerZh: "中国音乐学院考级委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Music Theory",
    categoryZh: "音乐理论",
    gradeEn: "Grade 1 (Passed)",
    gradeZh: "一级 (通过)",
    issueDate: "2017-09-20",
    certificateNumber: "0022017429680",
    image: "/images/certificates/c8.jpg",
    descriptionEn: "Passed Grade 1 in Elementary Knowledge of Music Examination conducted by China Conservatory of Music.",
    descriptionZh: "中国音乐学院社会艺术水平考级：音乐基础知识一级合格证书。"
  },

  /* ========================================================================
   * Certificate 9 -> File: c9.jpg
   * Guzheng Grade 5 Certificate (Chinese Musicians Association)
   * ======================================================================== */
  {
    id: "c9",
    titleEn: "Guzheng Grade 5 Grading Certificate",
    titleZh: "古筝伍级考级证书",
    issuerEn: "Music Examination Committee of the Chinese Musicians Association",
    issuerZh: "中国音乐家协会音乐考级委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Music / Arts",
    categoryZh: "音乐 / 艺术",
    gradeEn: "Grade 5 (Passed)",
    gradeZh: "伍级 (通过)",
    issueDate: "2017-08",
    certificateNumber: "1701120686",
    image: "/images/certificates/c9.jpg",
    descriptionEn: "Passed Grade 5 Guzheng examination in Social Artistic Level Grading Examination.",
    descriptionZh: "中国音乐家协会音乐考级：古筝专业伍级合格证书。"
  },

  /* ========================================================================
   * Certificate 10 -> File: c10.jpg
   * Guzheng Grade 3 Certificate (Chinese Musicians Association)
   * ======================================================================== */
  {
    id: "c10",
    titleEn: "Guzheng Grade 3 Grading Certificate",
    titleZh: "古筝叁级考级证书",
    issuerEn: "Music Examination Committee of the Chinese Musicians Association",
    issuerZh: "中国音乐家协会音乐考级委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Music / Arts",
    categoryZh: "音乐 / 艺术",
    gradeEn: "Grade 3 (Passed)",
    gradeZh: "叁级 (通过)",
    issueDate: "2016-08",
    certificateNumber: "1601120374",
    image: "/images/certificates/c10.jpg",
    descriptionEn: "Passed Grade 3 Guzheng examination in Social Artistic Level Grading Examination.",
    descriptionZh: "中国音乐家协会音乐考级：古筝专业叁级合格证书。"
  },

  /* ========================================================================
   * Certificate 11 -> File: c11.jpg
   * Basic Music Literacy Grade 2 (Inner Mongolia)
   * ======================================================================== */
  {
    id: "c11",
    titleEn: "Basic Music Literacy Grade 2 Certificate",
    titleZh: "音乐基本素养二级考级证书",
    issuerEn: "Inner Mongolia Autonomous Region Musicians Association",
    issuerZh: "内蒙古自治区音乐家协会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Music Theory",
    categoryZh: "音乐理论",
    gradeEn: "Grade 2 (Passed)",
    gradeZh: "二级 (通过)",
    issueDate: "2018-08",
    certificateNumber: "1800988",
    image: "/images/certificates/c11.jpg",
    descriptionEn: "Passed Grade 2 Basic Music Literacy examination issued by Inner Mongolia Musicians Association.",
    descriptionZh: "内蒙古自治区音乐家协会音乐基本素养专业二级考级合格证书。"
  },

  /* ========================================================================
   * Certificate 12 -> File: c12.jpg
   * Guzheng Grade 7 Certificate (Chinese Musicians Association)
   * ======================================================================== */
  {
    id: "c12",
    titleEn: "Guzheng Grade 7 Grading Certificate",
    titleZh: "古筝柒级考级证书",
    issuerEn: "Music Examination Committee of the Chinese Musicians Association",
    issuerZh: "中国音乐家协会音乐考级委员会",
    recipientEn: "Cheng Yarong",
    recipientZh: "成娅榕",
    categoryEn: "Music / Arts",
    categoryZh: "音乐 / 艺术",
    gradeEn: "Grade 7 (Good)",
    gradeZh: "柒级 (良好)",
    issueDate: "2018-08",
    certificateNumber: "1801120871",
    image: "/images/certificates/c12.jpg",
    descriptionEn: "Passed Grade 7 Guzheng examination with a score of 'Good' in Social Artistic Level Grading Examination.",
    descriptionZh: "中国音乐家协会音乐考级：古筝专业柒级，成绩良好。"
  }
];

interface CertificatesProps {
  t?: any;
}

export default function Certificates({ t }: CertificatesProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateZH | null>(null);
  const title = t?.certificates?.title || "Certificates & Honors";

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-800 text-center mb-8">
        {title}
      </h2>

      {/* Grid Tampilan Kartu Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesDataZH.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white/80 backdrop-blur-sm border border-rose-100/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div 
                className="relative group w-full h-48 rounded-xl overflow-hidden mb-4 bg-rose-50 border border-rose-100/50 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={`${cert.titleEn} - ${cert.titleZh}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                  🔍 View Image
                </div>
              </div>

              {/* Judul Dual Bahasa */}
              <h3 className="font-semibold text-base text-slate-800 leading-snug">
                {cert.titleEn}
              </h3>
              <p className="text-xs font-medium text-rose-700/80 mt-0.5">
                {cert.titleZh}
              </p>

              {/* Penerbit Dual Bahasa */}
              <div className="mt-2 text-xs text-slate-500 space-y-0.5">
                <p>{cert.issuerEn}</p>
                <p className="text-[11px] text-slate-400">{cert.issuerZh}</p>
              </div>
            </div>

            {/* Footer Kartu: Grade / Level Dual Bahasa */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-rose-50">
              <div className="flex flex-col">
                <span className="inline-block text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                  {cert.gradeEn}
                </span>
                <span className="text-[10px] text-rose-500 font-medium ml-0.5 mt-0.5">
                  {cert.gradeZh}
                </span>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs font-medium text-rose-700 hover:text-rose-800 bg-rose-100/50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup Detail Lengkap Dual Bahasa */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto p-4 sm:p-6 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Header Modal Dual Bahasa */}
            <h3 className="text-lg font-bold text-slate-800 text-center pr-6">
              {selectedCert.titleEn}
            </h3>
            <p className="text-sm font-semibold text-rose-600 mb-1 text-center">
              {selectedCert.titleZh}
            </p>
            <p className="text-xs text-slate-500 mb-4 text-center">
              {selectedCert.issuerEn} ({selectedCert.issuerZh}) • {selectedCert.issueDate}
            </p>

            {/* Gambar Modal */}
            <div className="w-full flex justify-center items-center overflow-hidden rounded-xl bg-slate-900/5 border border-slate-200 mb-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.titleZh}
                className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Detail Atribut Dual Bahasa */}
            <div className="w-full text-xs text-slate-600 bg-rose-50/50 p-4 rounded-xl border border-rose-100 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2 border-b border-rose-100/80">
                <p><strong>Grade / Score:</strong> {selectedCert.gradeEn} ({selectedCert.gradeZh})</p>
                <p><strong>Category:</strong> {selectedCert.categoryEn} ({selectedCert.categoryZh})</p>
                <p><strong>Recipient:</strong> {selectedCert.recipientEn} ({selectedCert.recipientZh})</p>
                <p><strong>Cert No:</strong> {selectedCert.certificateNumber}</p>
              </div>

              {/* Deskripsi Dual Bahasa */}
              <p><strong>EN:</strong> {selectedCert.descriptionEn}</p>
              <p><strong>ZH:</strong> {selectedCert.descriptionZh}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}