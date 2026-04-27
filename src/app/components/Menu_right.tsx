import React from "react";

import H2red from "./HtmlTools/H2red";
import H2 from "./HtmlTools/H2";
import P from "./HtmlTools/P";
import PGray from "./HtmlTools/PGray";
import H2Gray from "./HtmlTools/H2Gray";

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
        <H2red className="inline-block text-2xl font-bold mb-4 pr-3 border-r-4 border-solid border-[#ff0000]">
          {title}
        </H2red>

        <div className={`space-y-4 text-[#e5e7eb] `}>{children}</div>
      </div>
    </section>
  );
}
