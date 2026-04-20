import { ReactNode } from "react";

interface Props {
  children: ReactNode; // إضافة دعم المحتوى الداخلي
}

export default function H1({ children }: Props) {
  return (
    <h1 className=" text-6xl font-black text-center leading-relaxed text-slate-200  md:w-[80%] bg-amber-300  ">
      {""}
      {children}
      {""}
    </h1>
  );
}
