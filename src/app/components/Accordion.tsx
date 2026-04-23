"use client";

import React, { useState, useId } from "react"; // أضفنا useState هنا
import { ChevronIcon } from "./heroicons/ChevronIcon";
import P from "./HtmlTools/P";

interface AccordionProps {
  title: string;
  paragraph?: string;
  children?: React.ReactNode;
}

export default function Accordion({
  title,
  paragraph,
  children,
}: AccordionProps) {
  // المنطق أصبح داخل الملف نفسه الآن
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div
      itemScope
      itemType="https://schema.org/Question"
      className={`mx-5 mt-1 rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-[#1F2022]" : ""
      }`}
    >
      <div
        className="bg-linear-to-l from-[#ed0e0e] to-[#a30525] flex items-center justify-between p-3 cursor-pointer font-bold text-amber-50"
        onClick={() => setIsOpen(!isOpen)} // التغيير هنا مباشرة
        role="button"
        aria-expanded={isOpen}
      >
        <h3 itemProp="name">{title}</h3>
        <ChevronIcon className={`w-6 h-6 transition-transform ${isOpen ? "-rotate-90" : ""}`} />
      </div>

      {isOpen && (
        <div id={contentId} className="p-3 text-right text-amber-50">
          {paragraph && <P>{paragraph}</P>}
          <div className="text-sm">{children}</div>
        </div>
      )}
    </div>
  );
}