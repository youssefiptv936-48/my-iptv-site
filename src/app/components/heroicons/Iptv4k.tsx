import React from "react";

export default function Iptv4k() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      /* توحيد القياس مع مكتبة Lucide */
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff0000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-20"
    >
      {/* رسم المربع البسيط فقط كما طلبت */}
      <rect x="2" y="4" width="20" height="16" rx="3" ry="3" />

      {/* نص 4K في المنتصف تماماً */}
      <text
        x="12"
        y="14.5"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="900"
        fill="#ff0000"
        textAnchor="middle"
        strokeWidth="0"
      >
        4K
      </text>
    </svg>
  );
}