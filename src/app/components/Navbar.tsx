"use client"; // ضروري لاستخدام الحالة والهوكس

import { useState } from "react";
import { usePathname } from "next/navigation"; // بديل لمعرفة الصفحة النشطة
import Link from "next/link"; // نظام الروابط في Next.js


import Button_black from "./Button_black"; 
import Accordion from "./Accordion"; 
import useToggle from "../custom_hooks/useToggle";
import { MenuIcon } from "./Icons";
import { CloseIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname(); // الحصول على المسار الحالي
  const [open, setOpen] = useState(false); 
  const toggleMenu = () => setOpen(!open); 

  const toggle1 = useToggle(false); 

  // دالة مساعدة لتحديد التنسيق إذا كان الرابط نشطاً (بديل NavLink)
  const getLinkClassName = (href: string) => {
    const isActive = pathname === href;
    return `text-start inline-block ${
      isActive ? "text-[#ff0031] font-black" : "text-amber-50"
    }`;
  };

  return (
    <div>
     {/***** قسم الهاتف (Responsive) Start *****/}
 <nav
   className={`h-20 pr-10 pl-10 flex items-center justify-between px-2 text-slate-200  lg:hidden ${
     open ? "bg-black" : ""
   }`}
 >
   <div className=" font-black text-2xl text-red-500">BestIPTV</div>

   {/* زر فتح القائمة */}
   {!open && (
     <button 
       onClick={toggleMenu} 
       className="block"
       aria-label="افتح القائمة الرئيسية" // هذا ما يطلبه Lighthouse
     >
       <MenuIcon />
     </button>
   )}

   {/* زر إغلاق القائمة */}
   {open && (
     <button 
       onClick={toggleMenu} 
       className="block"
       aria-label="أغلق القائمة" // هذا ما يطلبه Lighthouse
     >
       <CloseIcon/>
     </button>
   )}
 </nav>
      {/***** قسم الهاتف (Responsive) End *****/}

      {/***** قسم شاشات الحاسوب (Desktop - Large screens) *****/}
      <nav className="hidden lg:flex justify-around items-center h-20">
        <div className="w-40 bg-blue-800"> logo</div>

        <div className="w-2xl text-amber-50 flex justify-between gap-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={getLinkClassName("/")}
          >
            الرئيسية
          </Link>

          <Link
            href="/Pages/freetrial"
            onClick={() => setOpen(false)}
            className={getLinkClassName("/Pages/freetrial")}
          >
            تجربه مجانيه
          </Link>

          <Link
            href="/Pages/Subscriptions"
            onClick={() => setOpen(false)}
            className={getLinkClassName("/Pages/Subscriptions")}
          >
            انضم الى عائلتنا
          </Link>

          <Link
            href="/Pages/Channel"
            onClick={() => setOpen(false)}
            className={getLinkClassName("/Pages/Channel")}
          >
          قنوات
          </Link>

          <Link
            href="/Pages/HelpCenter"
            onClick={() => setOpen(false)}
            className={getLinkClassName("/Pages/HelpCenter")}
          >
            مركز المساعده
          </Link>
        </div>

        <div className="w-70 h-20 relative flex items-center justify-end">
          {/**  <Button>
            <Link
              href="Pages/Subscriptions"
              onClick={() => setOpen(false)}
              className="w-full text-start"
            >
              ابدا الان
            </Link>
          </Button>**/}

          <a
            className="text-start"
            href="https://chatgpt.com/c/68d6c11f-6964-8330-80c8-f58954f52989"
          >
            
          </a>
          <a
            className="text-start"
            href="https://chatgpt.com/c/68d6c11f-6964-8330-80c8-f58954f52989"
          >
          </a>
        </div>
      </nav>

      {/***** قائمة الهاتف (تظهر عند الضغط على زر toggle) *****/}
      <div
        className={`bg-black text-amber-50 h-screen overflow-hidden border-t border-rose-600/50 p-2 ${
          open ? "block" : "hidden"
        }`}
      >
        <div >
          <Button_black>
            
            <Link onClick={() => setOpen(false)} className="w-full text-start" href="/">
              الرئيسية
            </Link>
          </Button_black>

          <Button_black>
            
            <Link onClick={() => setOpen(false)} className="w-full text-start" href="/Pages/freetrial">
              تجربه مجانيه
            </Link>
          </Button_black>

          <Button_black>
          
            <Link onClick={() => setOpen(false)} className="w-full text-start" href="/Pages/Subscriptions">
              انضم الى عائلتنا
            </Link>
          </Button_black>

          <Button_black>
          
            <Link onClick={() => setOpen(false)} className="w-full text-start" href="/Pages/HelpCenter">
              مركز المساعده
            </Link>
          </Button_black>

          <Button_black>
         
            <a
              className="w-full text-start"
             href="https://wa.me/212609851199?text=اريد+ طلب+ مساعده+ تقنيه." 
            >
              WhatsApp
            </a>
          </Button_black>

          <Button_black>
           
            <a
              className="w-full text-start"
              href="https://chatgpt.com/c/68d6c11f-6964-8330-80c8-f58954f52989"
            >
              تيليجرام
            </a>
          </Button_black>
        </div>
      </div>
    </div>
  );


  
}