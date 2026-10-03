"use client";

import React, { useState } from "react";

export interface CertificateZH {
  id: string;
  titleZh: string;
  titleEn: string;
  issuerZh: string;
  issuerEn?: string;
  recipientZh: string;
  recipientEn?: string;
  categoryZh: string;
  gradeOrScoreZh: string;
  issueDate: string;
  certificateNumber?: string;
  image: string;
  descriptionZh: string;
}

export const certificatesDataZH: CertificateZH[] = [
  {
    id: "c1",
    titleZh: "古筝三级考级证书",
    titleEn: "Guzheng Grade 3 Certificate",
    issuerZh: "中国音乐家协会音乐考级委员会",
    issuerEn: "The Music Examination Committee of the Chinese Musicians Association",
    recipientZh: "成娅榕",
    recipientEn: "Cheng Yarong",
    categoryZh: "音乐 / 艺术",
    gradeOrScoreZh: "叁级 (通过)",
    issueDate: "2016-08",
    certificateNumber: "1601120374",
    image: "/images/certificates/c1.jpg",
    descriptionZh: "中国音乐家协会古筝专业参级社会艺术水平考级合格证书。"
  },
  {
    id: "c2",
    titleZh: "第二十七届“语文报杯”银牌作品奖状",
    titleEn: "27th Yuwenbao Cup Writing Competition Silver Medal",
    issuerZh: "中国语文报刊协会",
    recipientZh: "成娅榕",
    categoryZh: "学术 / 写作",
    gradeOrScoreZh: "银牌作品",
    issueDate: "2025-09",
    certificateNumber: "YWBB-A 202524278",
    image: "/images/certificates/c2.jpg",
    descriptionZh: "在第二十七届“语文报杯”学生主题写作活动中，作品《逸志拓荒时代路，勤学勇立时代潮》荣获银牌作品。"
  },
  {
    id: "c3",
    titleZh: "包头市中小学生法律知识竞赛优秀学生代表",
    titleEn: "Baotou Outstanding Student Representative Award",
    issuerZh: "包头市教育局",
    recipientZh: "成娅榕",
    categoryZh: "荣誉 / 领导力",
    gradeOrScoreZh: "优秀学生代表",
    issueDate: "2024",
    image: "/images/certificates/c3.jpg",
    descriptionZh: "在2024年包头市中小学生法律知识与素养竞赛中表现优异，被评为优秀学生代表。"
  },
  {
    id: "c4",
    titleZh: "高一年级“大德杯”硬笔书法比赛一等奖",
    titleEn: "1st Prize in Dade Cup Calligraphy Competition",
    issuerZh: "包头市第八十一中学",
    recipientZh: "成娅榕",
    categoryZh: "艺术 / 书法",
    gradeOrScoreZh: "一等奖",
    issueDate: "2025-04",
    image: "/images/certificates/c4.jpg",
    descriptionZh: "在包头市第八十一中学高一年级“大德杯”硬笔书法比赛中荣获一等奖。"
  },
  {
    id: "c5",
    titleZh: "课本剧海报设计比赛二等奖",
    titleEn: "2nd Prize in Textbook Drama Poster Design",
    issuerZh: "包头市第八十一中学教研处 语文教研组",
    recipientZh: "成娅榕",
    categoryZh: "设计 / 艺术",
    gradeOrScoreZh: "二等奖",
    issueDate: "2025-12",
    image: "/images/certificates/c5.jpg",
    descriptionZh: "在校园阅读节“课本剧海报设计”比赛中荣获二等奖。"
  },
  {
    id: "c6",
    titleZh: "个人突出贡献奖",
    titleEn: "Individual Outstanding Contribution Award",
    issuerZh: "共青团包头市第八十一中学委员会",
    recipientZh: "成娅榕",
    categoryZh: "组织 / 活动",
    gradeOrScoreZh: "个人突出贡献奖",
    issueDate: "2025-11",
    image: "/images/certificates/c6.jpg",
    descriptionZh: "在2025-2026学年度第一学期“向祖国表白”活动中荣获个人突出贡献奖。"
  },
  {
    id: "c7",
    titleZh: "教师节献礼活动表彰证书",
    titleEn: "Teacher's Day Tribute Performance Award",
    issuerZh: "共青团包头市第八十一中学委员会",
    recipientZh: "成娅榕",
    categoryZh: "艺术 / 表演",
    gradeOrScoreZh: "优秀表现奖",
    issueDate: "2025-09",
    image: "/images/certificates/c7.jpg",
    descriptionZh: "在迎接教师节学生献礼活动中表现突出，特发此状，以资鼓励。"
  },
  {
    id: "c8",
    titleZh: "青山区“五好学生”荣誉证书",
    titleEn: "Qingshan District Wuhao Merit Student Award",
    issuerZh: "青山区教育局",
    recipientZh: "成娅榕",
    categoryZh: "学术 / 综合荣誉",
    gradeOrScoreZh: "五好学生",
    issueDate: "2020-05",
    image: "/images/certificates/c8.jpg",
    descriptionZh: "被评为2019-2020学年度青山区“五好学生”。"
  },
  {
    id: "c9",
    titleZh: "古筝柒级考级证书",
    titleEn: "Guzheng Grade 7 Certificate",
    issuerZh: "中国音乐家协会音乐考级委员会",
    issuerEn: "The Music Examination Committee of the Chinese Musicians Association",
    recipientZh: "成娅榕",
    recipientEn: "Cheng Yarong",
    categoryZh: "音乐 / 艺术",
    gradeOrScoreZh: "柒级 (良好)",
    issueDate: "2018-08",
    certificateNumber: "1801120871",
    image: "/images/certificates/c9.jpg",
    descriptionZh: "中国音乐家协会古筝专业柒级社会艺术水平考级合格证书（成绩良好）。"
  },
  {
    id: "c10",
    titleZh: "古筝伍级考级证书",
    titleEn: "Guzheng Grade 5 Certificate",
    issuerZh: "中国音乐家协会音乐考级委员会",
    issuerEn: "The Music Examination Committee of the Chinese Musicians Association",
    recipientZh: "成娅榕",
    recipientEn: "Cheng Yarong",
    categoryZh: "音乐 / 艺术",
    gradeOrScoreZh: "伍级 (通过)",
    issueDate: "2017-08",
    certificateNumber: "1701120686",
    image: "/images/certificates/c10.jpg",
    descriptionZh: "中国音乐家协会古筝专业伍级社会艺术水平考级合格证书。"
  },
  {
    id: "c11",
    titleZh: "古筝叁级考级证书（副本）",
    titleEn: "Guzheng Grade 3 Certificate (Duplicate)",
    issuerZh: "中国音乐家协会音乐考级委员会",
    issuerEn: "The Music Examination Committee of the Chinese Musicians Association",
    recipientZh: "成娅榕",
    recipientEn: "Cheng Yarong",
    categoryZh: "音乐 / 艺术",
    gradeOrScoreZh: "叁级 (通过)",
    issueDate: "2016-08",
    certificateNumber: "1601120374",
    image: "/images/certificates/c11.jpg",
    descriptionZh: "中国音乐家协会古筝专业参级社会艺术水平考级合格证书（副本）。"
  },
  {
    id: "c12",
    titleZh: "音乐基础知识壹级等级证书",
    titleEn: "Elem. Knowledge of Music Grade 1 Certificate",
    issuerZh: "中国音乐学院考级委员会",
    issuerEn: "Grading Committee of China Conservatory",
    recipientZh: "成娅榕",
    recipientEn: "Cheng Ya Rong",
    categoryZh: "音乐理论",
    gradeOrScoreZh: "壹级",
    issueDate: "2017-09-20",
    certificateNumber: "0022017429680",
    image: "/images/certificates/c12.jpg",
    descriptionZh: "中国音乐学院社会艺术水平考级音乐基础知识专业壹级证书。"
  },
  {
    id: "c13",
    titleZh: "音乐基本素养二级考级证书",
    titleEn: "Basic Musical Literacy Grade 2 Certificate",
    issuerZh: "内蒙古自治区音乐家协会",
    recipientZh: "成娅榕",
    categoryZh: "音乐理论",
    gradeOrScoreZh: "二级 (通过)",
    issueDate: "2018-08",
    certificateNumber: "1800988",
    image: "/images/certificates/c13.jpg",
    descriptionZh: "内蒙古自治区音乐家协会音乐基本素养专业二级考级合格证书。"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesDataZH.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white/80 backdrop-blur-sm border border-rose-100/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div 
                className="relative group w-full h-48 rounded-xl overflow-hidden mb-4 bg-rose-50 border border-rose-100/50 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.titleZh} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white text-xs font-semibold gap-1.5 backdrop-blur-[2px]">
                  🔍 View Image
                </div>
              </div>

              <h3 className="font-semibold text-base text-slate-800 leading-snug">{cert.titleZh}</h3>
              <p className="text-xs text-slate-500 mt-1">{cert.issuerZh}</p>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-rose-50">
              <span className="inline-block text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                {cert.gradeOrScoreZh}
              </span>
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-xs font-medium text-rose-700 hover:text-rose-800 bg-rose-100/50 hover:bg-rose-100 px-3 py-1 rounded-lg transition-colors"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

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

            <h3 className="text-lg font-bold text-slate-800 mb-1 text-center pr-6">
              {selectedCert.titleZh}
            </h3>
            <p className="text-xs text-slate-500 mb-4 text-center">
              {selectedCert.issuerZh} • {selectedCert.issueDate}
            </p>

            <div className="w-full flex justify-center items-center overflow-hidden rounded-xl bg-slate-900/5 border border-slate-200">
              <img
                src={selectedCert.image}
                alt={selectedCert.titleZh}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}