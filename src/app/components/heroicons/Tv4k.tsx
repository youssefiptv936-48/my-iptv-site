import React from "react";

export default function Tv4k() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-tv  text-red-600 "
    >
      {/* قرون الاستشعار (Antenna) */}
      <path d="m17 2-5 5-5-5" />
      {/* إطار التلفاز */}
      <rect width="20" height="15" x="2" y="7" rx="2" />
      
      {/* النص - الإحداثيات الآن داخل نطاق الـ 24 */}
      <text
        x="12" 
        y="17" 
        fontSize="10" 
        fontWeight="bold" 
        fill="none" 
        textAnchor="middle"
        strokeWidth="0"
      >
        4K
      </text>
    </svg>
  );
}