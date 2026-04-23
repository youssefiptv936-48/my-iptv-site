import React from "react";
import Link from "next/link";
import { EuroIcon } from "../heroicons/EuroIcon";
import { CheckIcon } from "../heroicons/CheckIcon";

interface PriceProps {
  month: string;   
  link: string;    
  eur: string | number; 
  featured?: boolean;
  planId: string;
}

export default function Price({ month, link, eur, featured, planId }: PriceProps) {
  return (
    <article 
      id={planId}
      className={`relative bg-black p-4 m-1 border-2 border-solid rounded-2xl lg:w-64 
      ${featured 
        ? 'border-yellow-500 scale-105 z-10 shadow-[0_0_25px_rgba(234,179,8,0.25)]' 
        : 'border-red-600 hover:border-red-500' 
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xl font-black px-4 py-1 rounded-full uppercase">
          الأكثر توفيراً
        </span>
      )}

      <h2 className="text-center text-3xl font-black text-slate-200 mb-2">{month}</h2>
      
      <div className={`h-1.5 w-16 mx-auto mb-4 ${featured ? 'bg-yellow-500' : 'bg-red-600'}`} aria-hidden="true"></div>
      
      <ul className="space-y-3 mb-6">
        {[
          "قنوات أكثر من 46,565",
          "أفلام أكثر من 153,859",
          "مسلسلات أكثر من 39,949",
          "تحديثات يومية تلقائية",
          "دعم فني متاح 24/7"
        ].map((text, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className={featured ? "text-yellow-500" : "text-slate-200"} />
            <span className="font-bold text-md text-zinc-100">{text}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-baseline gap-1 mt-auto text-slate-200 border-t border-zinc-800 pt-4">
        <span className="text-xs text-zinc-300">سعر الاشتراك</span>
        <div className="flex items-baseline">
          <span className="text-sm font-bold">.99</span>
           <h3 className="text-3xl font-black">{eur}</h3>
           
        </div>
        <EuroIcon className="text-slate-200" />
      </div>

      <div className="flex justify-center mt-5">
        <Link 
          href={link} 
          aria-label={`اشترك الآن في باقة ${month} بسعر ${eur}.99 يورو`}
          className={`font-black text-lg w-full py-3 rounded-xl text-center block
          ${featured ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-linear-to-r from-red-600 to-red-800 text-slate-200 hover:from-red-500'}`}
        >
          ابدأ الآن
        </Link>
      </div>
    </article>
  );
}