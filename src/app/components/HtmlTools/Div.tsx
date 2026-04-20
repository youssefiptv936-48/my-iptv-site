import { ReactNode } from "react"
interface Props {
    children:ReactNode;
    
}
export default function Div({children ,}: Props) {
  return (
    <div  className="overflow-y-scroll bg-neutral-700/30 max-h-96 w-full pr-3 border-2 border-solid rounded-2xl  ">{children}</div>
  )
}
