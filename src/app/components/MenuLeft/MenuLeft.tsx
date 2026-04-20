

import { ReactNode } from "react";
import H2red from "../HtmlTools/H2red";
import H2 from "../HtmlTools/H2";
import P from "../HtmlTools/P";

// تعريف الخصائص - استخدمنا "?" لجعلها اختيارية عند الحاجة
interface MenuLeftProps {
  
  title: string; // إجباري
  paragraph1: string; // إجباري
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  paragraph5?: string;
  paragraph6?: string;
  className:string;
  buttonUrl: ReactNode;  // رابط الزر (إجباري بناءً على طلبك)
  children?:ReactNode;
}

export default function Menu_left({
  
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  className,
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

        <div className=" mb-8 text-gray-200">
          <h2  >{paragraph1}</h2>
          {paragraph6 && <P>{paragraph6}</P>}
          {paragraph2 && <P>{paragraph2}</P>}
          {paragraph3 && <P>{paragraph3}</P>}
          {paragraph4 && <P>{paragraph4}</P>}
          {paragraph5 && <P>{paragraph5}</P>}
          {buttonUrl}
        </div>

      
      </div>
    </section>
  );
}