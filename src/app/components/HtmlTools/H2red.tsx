
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // إضافة دعم المحتوى الداخلي
    // أضفتها لتتمكن من تمرير الـ className من الملف الآخر
}

export default function H2red({ children,  }: Props) {
  return (
    <h2 className='  text-slate-200 border-r-2 border-solid border-[#ed0e0e] text-2xl font-black pr-2 mb-2 '>
      {children}
    </h2>
  );
}

