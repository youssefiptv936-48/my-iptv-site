"use client";

import { useEffect, useState } from "react";

// 1. تعريف الأنواع لإصلاح خطأ TypeScript
interface StatItemProps {
  label: string;
  value: number;
}

// 2. تمرير الأنواع للمكون
function StatItem({ label, value }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / 50);

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-center p-4 ">
      <h3 className="text-3xl md:text-4xl font-black text-slate-200 mb-2">
        {count.toLocaleString()}+
      </h3>
      <p className="text-gray-400 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [clients, setClients] = useState(1200);

  useEffect(() => {
    const interval = setInterval(() => {
      setClients((prev) => prev + 1);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="grid grid-cols-2 md:grid-cols-4 gap-6   rounded-2xl" 
      dir="rtl"
    >
      <StatItem label="قناة عالمية" value={46565} />
      <StatItem label="فيلم ومسلسل" value={153859} />
      <StatItem label="تحديث يومي" value={39949} />
      <StatItem label="عميل سعيد" value={clients} />
    </section>
  );
}