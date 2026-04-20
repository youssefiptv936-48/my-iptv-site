import { ReactNode } from "react"
interface Props{
    children:ReactNode;
    className:string;
}

export default function FlexBox({children,className}: Props) {
  return (
    <div className={`  w-auto flex flex-col items-center md:flex-row ${className}`}>{children}</div>
  )
}
