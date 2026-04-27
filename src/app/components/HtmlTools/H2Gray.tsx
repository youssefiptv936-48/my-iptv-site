import { ReactNode } from "react";

interface Props {
  // حذفنا paragraph لأنه هو سبب المشكلة
  children: ReactNode; 
}

export default function H2Gray({ children }: Props) {
  return (
    // نضع children هنا ليعرض النص الذي تكتبه بين الوسمين
    <h2 className='   text-[16px]  text-zinc-400'>
      {children}
    </h2>
  );
}