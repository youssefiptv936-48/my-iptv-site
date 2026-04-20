"use client";

import React from "react";

// إضافة علامة "?" تجعل الخصائص اختيارية وتمنع ظهور الخطأ
// إضافة children تسمح لك بوضع الأيقونة والـ Link داخل الزر
interface ButtonBlackProps {
  title?: string;
  href?: string;
  children?: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}

export default function Button_black({ title, href, children, className, onClick }: ButtonBlackProps) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 w-full p-4 border-b border-zinc-800 hover:bg-zinc-900 transition-colors cursor-pointer ${className}`}
    >
      {/* هذا السطر يعرض الأيقونة والنص (الـ Link) الذي وضعته في النافبار */}
      {children ? children : title}
    </div>
  );
}