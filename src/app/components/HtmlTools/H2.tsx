import { ReactNode } from "react";

interface Props {
  children: ReactNode; // إضافة دعم المحتوى الداخلي
}

export default function H2({ children }: Props) {
  return (
    <h2 className=" text-xl font-bold leading-relaxed my-2 text-slate-200  ">
      {""}
      {children}
      {""}
    </h2>
  );
}