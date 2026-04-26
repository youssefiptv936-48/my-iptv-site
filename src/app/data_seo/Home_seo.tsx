// data_seo/home_seo.ts

export const HomeMeta = {
  title: "أفضل اشتراك IPTV في المغرب 2026 – سيرفرات بدون تقطيع ودعم فني مباشر", // <--- هنا اكتب عنوان الموقع
  description:"IPTVFORJA هو الخيار الافضل لعام 2026 يوفر لك اشتراكاً رسمياً يضم أكثر من 46,000 قناة بجودة HD وFull HD وUltra HD و2K و4K و8K ... مع مكتبة أفلام ومسلسلات ضخمة تحديث يومياً، لضمان تجربة مشاهدة مستقرة.", // <--- هنا اكتب الوصف
 keywords: "iptvforja, forja iptv, forja tv, أفضل اشتراك IPTV في المغرب 2026, اشتراك iptv رسمي, أفضل سيرفر اي بي تي في, Abonnement IPTV Maroc, IPTV Smart Player, سيرفر بدون تقطيع, كيف احصل على اشتراك IPTV",
  url: "https://iptvforja.com", // <--- هنا اكتب رابط موقعك الكامل
  image: "https://your-site.com/share-image.jpg", // <--- هنا ضع رابط صورة لمشاركتها في واتساب
};

export const HomeSchema = {  
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "IPTVFORJA", // <--- هنا اكتب اسم الخدمة
      image: HomeMeta.image,
      description: HomeMeta.description,
      brand: {
        "@type": "Brand",
        name: "IPTVFORJA", // <--- هنا اكتب اسم شركتك أو موقعك
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9", // <--- هنا اكتب التقييم (مثلاً 4.8 أو 5)
        reviewCount: "1500", // <--- هنا اكتب عدد التقييمات التي تريد إظهارها
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "MAD", // <--- هنا اكتب العملة (MAD للمغرب)
        lowPrice: "50", // <--- هنا اكتب أقل سعر عندك
        highPrice: "349", // <--- هنا اكتب أعلى سعر عندك
        offerCount: "4", // <--- هنا اكتب عدد الباقات المتوفرة
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هو أفضل موقع للحصول على خدمات IPTV في المغرب لعام 2026؟", // <--- هنا اكتب السؤال 1
          acceptedAnswer: {
            "@type": "Answer",
            text: "يعتبر موقع IPTVFORJA من أفضل المواقع التي تقدم خدمات IPTV حالياً، وذلك بفضل استقرار السيرفرات (Uptime 99.9%)، وتوفير أكثر من 46,000 قناة بجودة 4K و 8K. ما يميزنا هو الدعم الفني المباشر وتحديث مكتبة الأفلام والمسلسلات (VOD) يومياً لضمان أفضل تجربة مشاهدة بدون تقطيع.", // <--- هنا اكتب الجواب 1
          },
        },
        {
          "@type": "Question",
          name: "هل يعمل الاشتراكIPTV بدون تقطيع أثناء المباريات الكبرى؟", // <--- هنا اكتب السؤال 2
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، سيرفرات IPTVFORJA مزودة بتقنية Anti-Freeze وموزعة على مراكز بيانات قوية تضمن الثبات التام حتى في أوقات الذروة والمباريات العالمية.", // <--- هنا اكتب الجواب 2
          },
        },
         {
          "@type": "Question",
          name: "هل يمكنني تشغيل الاشتراك على أكثر من جهاز؟", // <--- هنا اكتب السؤال 2
          acceptedAnswer: {
            "@type": "Answer",
            text: "IPTVFORJA يدعم العمل على جميع الأجهزة Smart TV,Google TV,Smart TV, OS, Android Box, Mag, Smartphone, PC, iOS, iPadOS ,Windows ,..... يمكنك تشغيلIPTVFORJA على عدة أجهزة، لكن البث يعمل على جهاز واحد في نفس الوقت (إلا في حال اختيار باقة الأجهزة المتعددة).  ", // <--- هنا اكتب الجواب 2
          },
        },
         {
          "@type": "Question",
          name: "كيف سأتوصل ببيانات الاشتراك بعد الدفع؟", // <--- هنا اكتب السؤال 2
          acceptedAnswer: {
            "@type": "Answer",
            text: "فريق الدعم IPTVFORJA  يعتمد على نظام التسليم الفوري. بمجرد إتمام عملية الدفع، ستصلك بيانات  الاشتراك (Host, User, Password) عبر الواتساب  مع فيديو توضيحي لطريقة التفعيل.", // <--- هنا اكتب الجواب 2
          },
        },
         {
          "@type": "Question",
          name: "ماذا أفعل إذا واجهت مشكلة في التشغيل اشتراك iptvforja؟", // <--- هنا اكتب السؤال 2
          acceptedAnswer: {
            "@type": "Answer",
            text: "IPTVFORJA يوفر دعماً فنياً مباشراً عبر الواتساب على مدار الساعة فريقنا التقني مستعد لمساعدتك في إعداد الاشتراك على جهازك وحل أي مشكلة قد تواجهك فوراً ", // <--- هنا اكتب الجواب 2
          },
        },
         {
          "@type": "Question",
          name: "لماذا يُعد IPTVFORJA أفضل مزود خدمة في المغرب؟", // <--- هنا اكتب السؤال 2
          acceptedAnswer: {
            "@type": "Answer",
            text: "IPTVFORJA هو افضل اشتراك IPTV بدون تقطيع  في عام 2026  لانه يجمع بين السعر المنافس، الجودة العالية، وخدمة ما بعد البيع. نحن لا نبيعك اشتراكاً فقط، بل نضمن لك تجربة مشاهدة ممتعة ومستقرة طيلة مدة  اشتراك ", // <--- هنا اكتب الجواب 2
          },
        },
        
        
      ],
    },
    {
      "@type": "Organization",
      name: "IPTVFORJA", // <--- هنا اكتب اسم الموقع
      url: HomeMeta.url,
      logo: "https://your-site.com/logo.png", // <--- هنا ضع رابط شعار موقعك (اللوجو)
    },
    
  ],
};
