"use client";

import React, { Dispatch, SetStateAction } from "react";
import dynamic from 'next/dynamic';

// 1. توحيد الـ Loading لمنع تذبذب الارتفاع (إصلاح الـ Reflow)
const LoadingPlaceholder = () => (
  <div className="min-h-96 w-full flex items-center justify-center text-red-500 animate-pulse bg-zinc-900/50 rounded-2xl">
    جاري التحميل...
  </div>
);

const Distinct = dynamic(() => import("./Distinct"), { loading: LoadingPlaceholder, ssr: false });
const Family = dynamic(() => import("./Family"), { loading: LoadingPlaceholder, ssr: false });
const Sports = dynamic(() => import("./Sports"), { loading: LoadingPlaceholder, ssr: false });
const Arabic = dynamic(() => import("./Arabic"), { loading: LoadingPlaceholder, ssr: false });
const European = dynamic(() => import("./European"), { loading: LoadingPlaceholder, ssr: false });
const Global = dynamic(() => import("./Global"), { loading: LoadingPlaceholder, ssr: false });

interface LiveBroadcastProps {
  activeSub: number;
  setActiveSub: Dispatch<SetStateAction<number>>;
}

export default function LiveBroadcast({ activeSub, setActiveSub }: LiveBroadcastProps) {
  
  const tabs = [
    { id: 0, name: "مميز", colorClass: "bg_distinct" },
    { id: 1, name: "العائلة", colorClass: "bg_Family" },
    { id: 2, name: "رياضة", colorClass: "bg_sports" },
    { id: 3, name: "عربي", colorClass: "bg_arabic" },
    { id: 4, name: "أوروبي", colorClass: "bg_European" },
    { id: 5, name: "عالمي", colorClass: "bg_global" },
  ];

  const renderContent = () => {
    switch (activeSub) {
      case 0: return <Distinct />;
      case 1: return <Family />;
      case 2: return <Sports />;
      case 3: return <Arabic />;
      case 4: return <European />;
      case 5: return <Global />;
      default: return <Distinct />;
    }
  };

  return (
    <div className="flex   items-center flex-col min-w-96 h-2xl md:w-3xl mt-3">
      
      {/* أزرار الأقسام - تم حذف الترانزيشن والـ Scale للسرعة */}
      <nav role="tablist" className="bg-neutral-900 flex flex-wrap w-full justify-around p-1 border-2 border-solid rounded-md  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeSub === tab.id}
            onClick={() => setActiveSub(tab.id)}
            className={`px-3 py-1 rounded-md cursor-pointer text-sm font-bold text-slate-200 ${
              activeSub === tab.id ? "bg-[#ff0031]" : "bg-transparent opacity-70 hover:opacity-100 hover:bg-[#ff0033c2]"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </nav>

      {/* محتوى الأقسام الفرعية - تم حذف transition-all duration-500 */}
      <div className={`mt-3  w-full max-h-96    overflow-hidden ${tabs[activeSub]?.colorClass || ""}`}>
        {renderContent()}
      </div>
      
    </div>
  );
}