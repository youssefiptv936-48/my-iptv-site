import H2 from "../HtmlTools/H2";
import PGray from "../HtmlTools/PGray";

// تحديد أنواع البيانات (Types) يحل مشكلة الـ 'any' ويجعل الكود أكثر أماناً
interface SectionProps {
  icoun: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Section({ children, title, description }: SectionProps) {
  return (
    // استخدام <section> بدلاً من <div> لتحسين الـ SEO (Semantic HTML)
    <section className='text-center h-[95%] flex flex-col items-center justify-center  border-solid border-2 border-[#ed0e0e] rounded-2xl p-2 overflow-hidden mx-1  '>
        {/* الأيقونة */}
        <div className='flex items-center justify-center' > {children} </div>
        
        {/* العنوان */}
        
        <h2 className="font-bold" >{title}</h2>
        {/* الفقرة */}
        <p className="text-sm" >{description}</p>
        
    </section>
  )
}