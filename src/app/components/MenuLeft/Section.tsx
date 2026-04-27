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
    <section className='text-center flex flex-col items-center justify-center border-solid border-2 border-[#ed0e0e] rounded-2xl p-2 m-1  '>
        {/* الأيقونة */}
        <div className='flex items-center justify-center' > {children} </div>
        
        {/* العنوان */}
        
        <div><H2 >{title}</H2></div>
        {/* الفقرة */}
        <div><PGray >{description}</PGray></div>
        
    </section>
  )
}