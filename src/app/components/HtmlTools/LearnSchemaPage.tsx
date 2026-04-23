import Head from 'next/head'; // استيراد مكتبة التحكم في رأس الصفحة من Next.js

export default function LearnSchemaPage() { // تعريف الوظيفة الرئيسية لصفحة "تعلم سكيما"
  
  // 1. المـخـزن: كائن (Object) يحتوي على جميع بيانات الصفحة الخام
  const myData = { 
    serviceInfo: { // كائن فرعي لمعلومات الخدمة الأساسية
      name: "اشتراك IPTV الماسي 2026", // اسم المنتج الذي سيظهر للمستخدم ولجوجل
      description: "استمتع بأقوى اشتراك IPTV في المغرب بجودة 4K وثبات رهيب.", // وصف المنتج التسويقي
      rating: "4.9", // قيمة التقييم الرقمية
      totalReviews: "2500", // إجمالي عدد الأشخاص الذين قيموا الخدمة
    }, // إغلاق كائن معلومات الخدمة

    pricingPlans: [ // مصفوفة (Array) تحتوي على قائمة باقات الأسعار
      { period: "شهر واحد", price: "50", currency: "MAD" }, // بيانات الباقة الأولى
      { period: "3 أشهر", price: "130", currency: "MAD" }, // بيانات الباقة الثانية
      { period: "6 أشهر", price: "240", currency: "MAD" }, // بيانات الباقة الثالثة
      { period: "سنة كاملة", price: "400", currency: "MAD" } // بيانات الباقة الرابعة والأخيرة
    ], // إغلاق مصفوفة الأسعار

    faqs: [ // مصفوفة تحتوي على قائمة الأسئلة والأجوبة الشائعة
      { // بداية السؤال الأول
        question: "ما هي الأجهزة التي يدعمها الاشتراك؟", // نص السؤال الأول
        answer: "يدعم الاشتراك جميع الأجهزة: Smart TV، أندرويد، iOS عبر <a href='/setup'>تطبيقاتنا</a>." // نص الجواب الأول مع رابط HTML
      }, // نهاية السؤال الأول
      { // بداية السؤال الثاني
        question: "هل يوجد تقطيع أثناء المباريات الكبرى؟", // نص السؤال الثاني
        answer: "نستخدم تقنية Anti-Freeze لضمان ثبات كامل حتى في وقت الذروة." // نص الجواب الثاني
      }, // نهاية السؤال الثاني
      { // بداية السؤال الثالث
        question: "كيف يمكنني الدفع؟", // نص السؤال الثالث
        answer: "نقبل الدفع عبر البطاقات البنكية، PayPal، أو التحويل البنكي المحلي." // نص الجواب الثالث
      }, // نهاية السؤال الثالث
      { // بداية السؤال الرابع
        question: "هل يمكنني تشغيل الاشتراك على أكثر من جهاز؟", // نص السؤال الرابع
        answer: "الاشتراك يعمل على جهاز واحد، ولكن يمكنك طلب <a href='/multi-room'>باقة الأجهزة المتعددة</a>." // نص الجواب الرابع
      }, // نهاية السؤال الرابع
      { // بداية السؤال الخامس
        question: "ما هي سرعة الإنترنت المطلوبة؟", // نص السؤال الخامس
        answer: "لجودة 4K ننصح بـ 12 ميجا، ولجودة HD تكفي 4 ميجا فقط." // نص الجواب الخامس
      } // نهاية السؤال الخامس
    ] // إغلاق مصفوفة الأسئلة
  }; // إغلاق كائن المخزن (myData) بالكامل

  // 2. المـصـنع: كائن ينسق البيانات بصيغة JSON-LD التي يطلبها جوجل
  const schemaCode = { 
    "@context": "https://schema.org", // تعريف المرجع الرسمي لنظام السكيما عالمياً
    "@graph": [ // استخدام تقنية الرسم البياني لدمج أكثر من نوع سكيما
      { // بداية تعريف سكيما المنتج (Product)
        "@type": "Product", // تحديد النوع كمنتج تجاري
        "name": myData.serviceInfo.name, // جلب اسم المنتج من المخزن
        "description": myData.serviceInfo.description, // جلب وصف المنتج من المخزن
        "offers": { // بداية قسم العروض والأسعار
          "@type": "AggregateOffer", // تحديد نوع العرض كمجموعة أسعار شاملة
          "lowPrice": "50", // تحديد أقل سعر متاح (مهم جداً للـ SEO)
          "highPrice": "400", // تحديد أعلى سعر متاح
          "priceCurrency": "MAD", // تحديد العملة الرسمية
          "offerCount": myData.pricingPlans.length, // حساب عدد الباقات آلياً من المصفوفة
          "offers": myData.pricingPlans.map((plan) => ({ // حلقة تكرار لتحويل كل باقة إلى عرض رسمي لجوجل
            "@type": "Offer", // تحديد النوع كعرض مفرد داخل المجموعة
            "name": plan.period, // جلب اسم المدة من المصفوفة
            "price": plan.price, // جلب السعر من المصفوفة
            "priceCurrency": plan.currency, // جلب العملة من المصفوفة
            "availability": "https://schema.org/InStock" // إعلام جوجل أن الخدمة متوفرة حالياً
          })) // نهاية حلقة تكرار العروض
        }, // نهاية قسم العروض
        "aggregateRating": { // بداية قسم نجوم التقييم
          "@type": "AggregateRating", // تحديد النوع كتقييم إجمالي
          "ratingValue": myData.serviceInfo.rating, // جلب قيمة النجوم من المخزن
          "reviewCount": myData.serviceInfo.totalReviews // جلب عدد المراجعات من المخزن
        } // نهاية قسم التقييم
      }, // نهاية سكيما المنتج بالكامل
      { // بداية تعريف سكيما الأسئلة الشائعة (FAQ)
        "@type": "FAQPage", // تحديد النوع كصفحة أسئلة وأجوبة
        "mainEntity": myData.faqs.map((f) => ({ // حلقة تكرار لتحويل كل سؤال في المخزن إلى كود يفهمه جوجل
          "@type": "Question", // تحديد أن هذا الجزء هو "سؤال"
          "name": f.question, // جلب نص السؤال
          "acceptedAnswer": { // بداية تعريف "الإجابة المقبولة" لهذا السؤال
            "@type": "Answer", // تحديد النوع كإجابة
            "text": f.answer // جلب نص الإجابة (بما فيه من روابط)
          } // نهاية الإجابة
        })) // نهاية حلقة تكرار الأسئلة
      } // نهاية سكيما الأسئلة بالكامل
    ] // إغلاق المصفوفة الشاملة للرسوم البيانية
  }; // إغلاق كائن المصنع (schemaCode) بالكامل

  return ( // بداية إرجاع الكود الذي سيظهر على الشاشة
    <div style={{ padding: '20px', direction: 'rtl', fontFamily: 'sans-serif', lineHeight: '1.6' }}> 
      
      <Head> {/* بداية حقن البيانات في رأس المتصفح (مخفي عن الزوار) */}
        <script // فتح وسم السكريبت
          type="application/ld+json" // تحديد نوع المحتوى كبيانات منظمة (الشرط الأساسي لجوجل)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCode) }} // تحويل كائن الـ Schema إلى نص وحقنه داخل السكريبت
        /> 
      </Head> {/* نهاية حقن البيانات في الرأس */}

      <header> {/* بداية قسم ترويسة الصفحة (ظاهر للزوار) */}
         <h1 style={{ color: '#333' }}>{myData.serviceInfo.name}</h1> {/* عرض اسم الخدمة كعنوان رئيسي H1 */}
         <p>{myData.serviceInfo.description}</p> {/* عرض وصف الخدمة كفقرة نصية */}
         <p>⭐ التقييم العام: <strong>{myData.serviceInfo.rating}</strong> (بناءً على {myData.serviceInfo.totalReviews} مراجعة)</p> {/* عرض النجوم والعدد */}
      </header> {/* نهاية ترويسة الصفحة */}

      <hr /> {/* وضع خط أفقي للفصل بين الأقسام */}

      <section> {/* بداية قسم عرض باقات الأسعار للمستخدم */}
        <h2>باقات الاشتراك المتاحة</h2> {/* عنوان قسم الأسعار */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}> {/* نظام تقسيم المربعات (Grid) */}
          {myData.pricingPlans.map((plan, index) => ( // حلقة تكرار لإنشاء مربع (Card) لكل باقة سعر
            <div key={index} style={{ border: '2px solid #0070f3', padding: '20px', borderRadius: '12px', textAlign: 'center', backgroundColor: '#fdfdfd' }}> {/* تنسيق المربع */}
              <h3 style={{ margin: '0' }}>{plan.period}</h3> {/* عرض مدة الاشتراك */}
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0070f3' }}>{plan.price} {plan.currency}</p> {/* عرض سعر الاشتراك بالعملة */}
              <button style={{ background: '#0070f3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>اشترك الآن</button> {/* زر الاشتراك */}
            </div> // نهاية تصميم المربع المفرد
          ))} {/* نهاية حلقة عرض المربعات */}
        </div> {/* نهاية حاوية المربعات */}
      </section> {/* نهاية قسم عرض الأسعار */}

      <section style={{ marginTop: '40px' }}> {/* بداية قسم عرض الأسئلة الشائعة للمستخدم */}
        <h2>الأسئلة الشائعة حول الخدمة</h2> {/* عنوان قسم الأسئلة */}
        {myData.faqs.map((f, index) => ( // حلقة تكرار لإنشاء فقرة لكل سؤال وجواب في المخزن
          <div key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}> {/* حاوية السؤال الواحد */}
            <h3 style={{ color: '#0056b3', marginBottom: '5px' }}>{f.question}</h3> {/* عرض نص السؤال بتنسيق H3 */}
            <div style={{ color: '#555' }} dangerouslySetInnerHTML={{ __html: f.answer }} /> {/* عرض نص الإجابة مع تفعيل روابط الـ HTML داخلها */}
          </div> // نهاية حاوية السؤال الواحد
        ))} {/* نهاية حلقة عرض الأسئلة */}
      </section> {/* نهاية قسم الأسئلة الشائعة */}

    </div> // إغلاق حاوية الصفحة الرئيسية بالكامل
  ); // نهاية الإرجاع (return)
} // إغلاق الوظيفة (LearnSchemaPage) بالكامل