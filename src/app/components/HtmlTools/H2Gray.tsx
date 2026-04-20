import { ReactNode } from "react";

interface Props {
  // حذفنا paragraph لأنه هو سبب المشكلة
  children: ReactNode; 
}

export default function H2Gray({ children }: Props) {
  return (
    // نضع children هنا ليعرض النص الذي تكتبه بين الوسمين
    <p className='   text-[14px] text-zinc-400'>
      {children}
    </p>
  );
}