import { ReactNode } from "react";

interface Props {
  // حذفنا paragraph لأنه هو سبب المشكلة
  children: ReactNode; 
}

export default function PGray({ children }: Props) {
  return (
    // نضع children هنا ليعرض النص الذي تكتبه بين الوسمين
    <p className='   text-[14px] text-zinc-400 leading-6'>
      {children}
    </p>
  );
}