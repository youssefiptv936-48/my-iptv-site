
"use client"; // ضروري في Next.js عند استخدام useState

import { useState, useCallback } from "react";

export default function useToggle(initialValue = false) {
  const [open, setOpen] = useState(initialValue);

  // استخدام useCallback يمنع إعادة تعريف الدالة عند كل ريندر 
  // مما يحسن الأداء عند تمرير toggle كـ Prop لمكونات أخرى
  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return { open, toggle };
}