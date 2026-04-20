import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // تحسينات إضافية للسرعة والإنتاج
  compiler: {
    // حذف أي سجلات مبرمج (console.logs) عند رفع الموقع لتحسين سرعة المتصفح
    removeConsole: process.env.NODE_ENV === "production",
  },
  // تحسين معالجة الصور حتى لو لم تستخدميها حالياً (للمستقبل)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
