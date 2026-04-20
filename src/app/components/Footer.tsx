import P from "./HtmlTools/P";

export default function Footer() {
  // الحصول على السنة الحالية تلقائياً لجعل المحتوى يبدو "محدثاً" دائماً أمام جوجل
  const currentYear = new Date().getFullYear();

  return (
    // استخدام وسم <footer> بدلاً من <div> يعزز الـ Semantic HTML
    <footer className='bg-black h-auto' role="contentinfo">
        
        <P >
          جميع الحقوق محفوظة © {currentYear} 
          {/* إضافة اسم الموقع هنا ضروري جداً لتعزيز العلامة التجارية في محركات البحث */}
          <span className="font-bold text-[#ff0031] mr-1">اسم موقعك</span>
        </P>
    </footer>
  )
}