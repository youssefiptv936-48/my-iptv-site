"use client"; // <--- أضف هذا السطر هنا ضروري جداً

import { useState } from "react";

// استخدمنا اسماً فريداً للدالة لتجنب خطأ Duplicate function
export function useAccordionLogic(initialIndex: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex);

  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return { openIndex, toggle };
}

// تصدير واحد فقط في نهاية الملف
export default useAccordionLogic;