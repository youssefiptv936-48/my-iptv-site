import React from "react";
import Link from "next/link";
import H2red from "./HtmlTools/H2red";
import H2 from "./HtmlTools/H2";
import P from "./HtmlTools/P";
import PGray from "./HtmlTools/PGray";
import H2Gray from "./HtmlTools/H2Gray";




// 1. استيراد مكون الصور الذكي

interface MenuRightProps {
 
  title: string;
  paragraph1: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  
  children?: React.ReactNode;

}

export default function Menu_right({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,

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

        <div className={`space-y-4 text-[#e5e7eb] `}>
          <H2 >{paragraph1}</H2>
          <P>{paragraph2}</P>
          <H2Gray >{paragraph3}</H2Gray>
          <PGray >{paragraph4}</PGray>
        </div>

        <div className="mt-4 leading-7">{children}</div>
           {/** 
        <div className="mt-8">
          {buttonText && buttonUrl && (
            <Link
              href={buttonUrl}
              className="px-12 py-3 inline-block rounded-r-3xl rounded-ee-3xl font-bold text-xl bg-linear-to-l from-[#ed0e0e] to-[#a30525] hover:scale-105 transition-transform"
            >
              {buttonText}
            </Link>
          )}
         
        </div>
        */}
      </div>
    </section>
  );
}
