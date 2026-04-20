import { useEffect, useState } from "react";

export default function useScrolled(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // إذا تعدينا العتبة، بدّل state
      setScrolled(window.scrollY > threshold);
    };

    // أول مرة يشوف الحالة
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
