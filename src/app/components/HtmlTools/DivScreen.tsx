import { ReactNode } from "react";

interface Props {
  // حذفنا paragraph لأنه هو سبب المشكلة
  children: ReactNode;
}

export default function DivScreen({ children }: Props) {
  return (
    <div className="  pt-30 p-2   flex flex-col gap-3 items-center justify-center relative  overflow-hidden   text-slate-200  md:px-25 md:h-screen">
      {children}
    </div>
  );
}
