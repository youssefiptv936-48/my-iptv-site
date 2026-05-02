import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function Grid({ children }: Props) {
  return (
    <div className="relative  w-full h-screen  ">
      
     <Image
  src="/images/Iptv2026.webp"
  // 1. تحسين النص البديل ليكون وصفياً (مهم جداً لجوجل)
  alt="واجهة تشغيل أفضل اشتراك IPTV في المغرب 2026 بجودة عالية وسيرفرات ثابتة"
  
  // 2. إضافة العنوان (تحسين تجربة المستخدم وسياق الصورة)
  title="اشتراك IPTV المغرب - جودة 4K"

  fill
  priority
  sizes="100vw"
  
  // 3. ضغط الحجم (مهم جداً لسرعة الصفحة وتصنيف الأداء)
  quality={80}

  // 4. منع انزياح المحتوى (تحسين مقياس CLS الذي يحبه جوجل)
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="

  className="object-cover md:object-right md:object-contain   opacity-40"
/>

      <div className="relative  w-full">
        {children}
      </div>

    </div>
  );
}