import React from 'react'
import Price from './Price'

export default function SectionPrice() {
  return (
    <section className="flex flex-col mt-20 items-center" aria-labelledby="pricing-title">
      <div className="w-[90%] text-center mb-10">
        {/* تغيير الحجم إلى 12px لضمان الوصول Accessibility */}
        <span className="text-slate-200 font-bold block mb-2 text-[12px] md:text-sm">
          الخطوة 1 من 3
        </span>
        
        <h1 id="pricing-title" className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
          اختر خطة اشتراك IPTV المناسبة لك
        </h1>
        
        <p className="text-[14px] md:text-base text-[#8d8f94] max-w-lg mx-auto leading-relaxed">
          استمتع بأفضل جودة بث بدون تقطيع. 
          <span className="text-slate-200 block mt-2 font-medium">
            الإشتراك السنوي يضمن لك مشاهدة كأس العالم 2026 كامل بسعر اليوم!
          </span>
        </p>
      </div>

      {/* تحسين الـ Grid لتقليل جهد المتصفح في الحسابات Layout Reflow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        <Price
          month="شهر واحد"
          eur="9"
          planId="1-month"
          link="https://wa.me/212609851199?text=أريد+الاشتراك+في+خطة+الشهر+الواحد"
        />
        <Price
          month="3 أشهر"
          eur="14"
          planId="3-months"
           link="https://wa.me/212609851199?text=أريد+الاشتراك+في+خطة+الشهر+الواحد"
        />
        <Price
          month="6 أشهر"
          eur="20"
          planId="6-months"
           link="https://wa.me/212609851199?text=أريد+الاشتراك+في+خطة+الشهر+الواحد"
        />
        <Price
          month="12 شهراً"
          eur="34"
          featured={true}
          planId="12-months"
           link="https://wa.me/212609851199?text=أريد+الاشتراك+في+خطة+الشهر+الواحد"
        />
      </div>
    </section>
  )
}