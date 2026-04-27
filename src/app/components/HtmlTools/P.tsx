import { ReactNode } from "react";

interface Props {
  // حذفنا paragraph لأنه هو سبب المشكلة
  children: ReactNode; 
}

export default function P({ children }: Props) {
  return (
    // نضع children هنا ليعرض النص الذي تكتبه بين الوسمين
    <p className='   text-[16px] leading-6 text-slate-200 '>
      {children}
    </p>
  );
}