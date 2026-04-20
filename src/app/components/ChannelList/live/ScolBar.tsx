import { ReactNode } from "react"
interface Props {
    children:ReactNode;
}

export default function ScolBar({children}:Props) {
  return (
    <div  className="bg-amber-400 max-w-2xl overflow-y-auto"> {children} </div>
  )
}
