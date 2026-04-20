import React, { useId } from "react";
import { ChevronIcon } from "./Icons";
import P from "./HtmlTools/P";

interface AccordionProps {
  title: string;
  paragraph?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function Accordion({
  title,
  paragraph,
  children,
  isOpen,
  onClick,
}: AccordionProps) {
  // إنشاء ID فريد لربط العنوان بالمحتوى (ضروري للـ Accessibility)
  const contentId = useId();

  return (
    <div
      itemScope
      itemType="https://schema.org/Question"
      className={`mx-5 mt-1 rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-[#1F2022]" : ""
      }`}
    >
      {/* الجزء العلوي - العنوان كزر حقيقي قابل للتفاعل */}
      <div
        className="bg-linear-to-l from-[#ed0e0e] to-[#a30525] flex items-center justify-between p-3 cursor-pointer font-bold text-amber-50 outline-none focus:ring-2 focus:ring-white/50"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        role="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        tabIndex={0} // يسمح بالوصول عبر زر Tab في الكيبورد
      >
        <h3 itemProp="name" className="text-right">{title}</h3>
        <span>
          <ChevronIcon
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "-rotate-90" : ""
            }`}
          />
        </span>
      </div>

      {/* الجزء السفلي - المحتوى */}
      {isOpen && (
        <div 
          id={contentId}
          itemProp="acceptedAnswer" 
          itemScope 
          itemType="https://schema.org/Answer"
          className="p-3 text-right text-amber-50 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200"
        >
          <div itemProp="text">
            {paragraph && <P >{paragraph}</P>}
            <div className="text-sm">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}