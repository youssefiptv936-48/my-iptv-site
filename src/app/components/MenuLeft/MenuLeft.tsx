

import { ReactNode } from "react";
import H2red from "../HtmlTools/H2red";

import P from "../HtmlTools/P";

// تعريف الخصائص - استخدمنا "?" لجعلها اختيارية عند الحاجة
interface MenuLeftProps {
  
  title: string;
  description:string;
  li_1:string;
  li_2:string;
  li_3:string;
  li_4:string;
  li_5:string;
  li_6:string;
  li_7:string;
  li_8:string;
  li_9:string;
  buttonUrl: ReactNode;  // رابط الزر (إجباري بناءً على طلبك)
  children?:ReactNode;
}

export default function Menu_left({
  
  title,
  description,
  li_1,
  li_2,
  li_3,
  li_4,
  li_5,
  li_6,
  li_7,
  li_8,
  li_9,
  buttonUrl,
  children,
}: MenuLeftProps) {
  return (
    <section className="md:flex  relative md:justify-around leading-6  p-2   text-slate-200 md:h-screen ">
      
      {/* 1. قسم الأيقونات أو المحتوى الإضافي */}
      <div className=" lg:w-[48%]     lg:h-full grid grid-cols-2  ">
        {children}
      </div>

      {/* 2. قسم النصوص والزر */}
      <div className=" lg:w-[45%] p-5 text-right">
       <H2red>
        {title}
       </H2red>
          <P>{description}</P> 
       <ul className="space-y-3">
        <li>{li_1}</li>
        <li>{li_2}</li>
        <li>{li_3}</li>
        <li>{li_4}</li>
        <li>{li_5}</li>
        <li>{li_6}</li>
        <li>{li_7}</li>
        <li>{li_8}</li>
        <li>{li_9}</li>
       </ul>
        
       
         
        <div className=" mb-8 text-gray-200">
         
          {buttonUrl}
        </div>

      
      </div>
    </section>
  );
}