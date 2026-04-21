"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import useAdd from "../../custom_hooks/useAdd";

import H2 from "../HtmlTools/H2";



// تحميل المكونات ديناميكياً مع إضافة loading بسيط لمنع القفز المفاجئ في الأبعاد
const Movies = dynamic(() => import("./Movies"), { 
  ssr: false,
  loading: () => <div className="min-h-96 w-full animate-pulse bg-zinc-900 rounded-xl" />
});
const Series = dynamic(() => import("./Series"), { 
  ssr: false,
  loading: () => <div className="min-h-96 w-full animate-pulse bg-zinc-900 rounded-xl" />
});
const LiveBroadcast = dynamic(() => import("./live/LiveBroadcast"), { 
  ssr: false,
  loading: () => <div className="min-h-96 w-full animate-pulse bg-zinc-900 rounded-xl" />
});

export default function My_List() {
  const { openIndex, toggle } = useAdd(0);
  const [activeSub, setActiveSub] = useState(0);

  return (
    
      <div className="  relative w-auto  box-border flex items-center flex-col">
        
        <section className="mb-3  text-center md:w-2xl">
          <H2 >إكتشف عالماً مليء بالإثارة!</H2>
          <p className="text-[#8d8f94] text-sm  mx-auto">
            يوجد المزيد من القنوات والأفلام والمسلسلات المتنوعة، خذ تجربة الآن واكتشف محتوى ضخم وجودة بث عالية تلبي جميع اهتماماتك.
          </p>
        </section>

        {/* أزرار التبديل الرئيسية - تحسين الـ Accessibility والأداء */}
        <section 
        
          className="bg-neutral-800 w-[90%] md:w-3xl   flex items-center justify-between rounded-xl p-1 mb-3 "
        >
          {["بث مباشر", "أفلام", "مسلسلات"].map((label, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={openIndex === index}
              onClick={() => toggle(index)}
              className={`px-5 h-10 rounded-lg outline-none focus:ring-2 focus:ring-red-500 ${
                openIndex === index 
                ? "bg-[#ff0031] text-slate-200 font-black shadow-md" 
                : "text-gray-400 hover:text-slate-200"
              }`}
            >
              {label}
            </button>
          ))}
        </section>
        
        {/* منطقة المحتوى - إضافة min-h لتقليل الـ Layout Shift */}
        <div className="   flex items-center  md:w-3xl ">
          
          {openIndex === 0 && <LiveBroadcast activeSub={activeSub} setActiveSub={setActiveSub} />}
          {openIndex === 1 && <Movies activeSub={activeSub} setActiveSub={setActiveSub} />}
          {openIndex === 2 && <Series activeSub={activeSub} setActiveSub={setActiveSub} />}
        </div>
      </div>
    
  );
}