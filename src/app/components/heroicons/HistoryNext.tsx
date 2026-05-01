import React from "react";

export default function HistoryNext() {
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
      className="lucide lucide-refresh-ccw text-red-600  "
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
      
      {/* إضافة النص في المنتصف */}
      <text 
        x="12" 
        y="13.5" 
        fontSize="5" 
        fontWeight="bold" 
        fill="currentColor" 
        textAnchor="middle" 
        strokeWidth="0" /* نضع 0 لكي لا يكون الخط عريضاً جداً ويصعب قراءته */
      >
        24/7
      </text>
    </svg>
  );
}