

import { ReactNode } from "react";
import H2red from "../HtmlTools/H2red";
import H2 from "../HtmlTools/H2";
import P from "../HtmlTools/P";

// تعريف الخصائص - استخدمنا "?" لجعلها اختيارية عند الحاجة
interface MenuLeftProps {
  
  title: string;
  description:string;
   title2: string; // إجباري // إجباري
  description2:string;
  title3: string;
  description3:string;
  title4: string;
  description4:string;
  buttonUrl: ReactNode;  // رابط الزر (إجباري بناءً على طلبك)
  children?:ReactNode;
}

export default function Menu_left({
  
  title,
  description,
  title2,
   description2,
  title3,
  description3,
  title4,
  description4,
  buttonUrl,
  children,
}: MenuLeftProps) {
  return (
    <section className="lg:flex relative lg:justify-around leading-6 items-center p-2   text-slate-200">
      
      {/* 1. قسم الأيقونات أو المحتوى الإضافي */}
      <div className=" lg:w-[48%]   lg:min-h-96 grid grid-cols-2  gap-4">
        {children}
      </div>

      {/* 2. قسم النصوص والزر */}
      <div className=" lg:w-[45%] p-5 text-right">
       <H2red>
        {title}
       </H2red>
       <P>{description}</P> 
       <H2>{title2}</H2>
       <P>{description2}</P> 
        <H2>{title3}</H2>
       <P>{description3}</P> 
        <H2>{title4}</H2>
       <P>{description4}</P>
         
        <div className=" mb-8 text-gray-200">
         
          {buttonUrl}
        </div>

      
      </div>
    </section>
  );
}