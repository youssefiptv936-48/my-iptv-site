import { ReactNode } from "react";
interface Prorps {
  children: ReactNode;
}
export default function SpanHover({ children }: Prorps) {
  return (
    <span className=" flex text-slate-200 text-sm ml-2.5 lg:text-base hover:text-red-500 bg-neutral-800 hover:bg-neutral-900 cursor-default py-2 pr-1 border-r-2 border-transparent hover:border-red-500 my-0.5    text-right   rounded-sm">
      {children}
    </span>
  );
}
