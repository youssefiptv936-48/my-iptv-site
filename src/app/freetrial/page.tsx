

import Free from '@/app/components/freetrial/Free';
import Subscrib from '@/app/components/freetrial/Subscriab';

export default function Freetrial() {
  
  /* التحكم اليدوي هنا:
     - ضع true: لإظهار مكون "التجربة المجانية" (Free)
     - ضع false: لإظهار مكون "رسالة الإغلاق/الاشتراك" (Subscrib)
  */
  const showFreeTrial = true; 

  return (
    <main className='h-screen flex justify-center items-center'>
      {/* محرك البحث (Google) سيرى فقط المكون الذي تحدده هنا.
         إذا كانت الحالة false، لن يظهر كود الـ Free في الـ HTML نهائياً.
      */}
      
      {showFreeTrial ? (
        <section>
          <Free />
        </section>
      ) : (
        <section>
          <Subscrib />
        </section>
      )}
      
    </main>
  );
}