
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // إضافة دعم المحتوى الداخلي
  className?: string;  // أضفتها لتتمكن من تمرير الـ className من الملف الآخر
}

export default function H2red({ children, className }: Props) {
  return (
    <h2 className='text-slate-200 border-r-2 border-solid border-[#ed0e0e] text-2xl font-black pr-2'>
      {children}
    </h2>
  );
}

