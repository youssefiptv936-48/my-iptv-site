import React from "react";

import H2red from "./HtmlTools/H2red";


// 1. استيراد مكون الصور الذكي

interface MenuRightProps {
  title: string;

  children?: React.ReactNode;
}

export default function Menu_right({
  title,

  children,
}: MenuRightProps) {
  return (
    <section className="p-5 lg:flex lg:flex-row-reverse lg:justify-around lg:items-center lg:leading-8 bg-black text-white">
      {/* 1. قسم الصورة المحسن للـ SEO */}
      <div className="hidden relative lg:block lg:w-[48%] h-96 ">
        <div> {/* حاوية للصورة للتحكم في الأبعاد */}</div>
      </div>

      {/* 2. قسم المحتوى النصي */}
      <div className="mt-3 lg:w-[45%] text-right leading-6">
        <H2red >
          {title}
        </H2red>

        <div className={`space-y-4 text-[#e5e7eb] `}>{children}</div>
      </div>
    </section>
  );
}
