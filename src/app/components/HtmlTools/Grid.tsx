import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Grid({ children, className }: Props) {
  return (
    <div
      className={`grid  bg-amber-500  justify-items-center  w-full ${className}`}
    >
      
      {children}
    </div>
  );
}
