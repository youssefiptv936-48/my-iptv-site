"use client";

import { useState, useCallback } from "react";

export default function useAdd(initialIndex: number | null = null) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex);

  // استخدام useCallback لمنع إعادة إنشاء الدالة في كل رندرة
  const toggle = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex !== index ? index : prevIndex));
  }, []);

  return { openIndex, toggle };
}