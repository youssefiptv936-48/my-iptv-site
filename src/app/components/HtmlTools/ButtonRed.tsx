
import Link from 'next/link'
interface Props {
    href:string;
    LinkText:string;
    
}


export default function ButtonRed({href,LinkText}: Props) {
  return (
    
 <Link href={href}   className="px-7 py-2 m-1 text-center text-slate-200 min-w-44 inline-block rounded-r-3xl rounded-ee-3xl font-bold text-ms bg-linear-to-l from-[#ed0e0e] to-[#a30525] hover:scale-105 ">
    {LinkText}
    </Link>
    
   
  )
}
