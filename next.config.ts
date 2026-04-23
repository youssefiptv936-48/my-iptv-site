
{/** import type { NextConfig } from "next";

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

export default nextConfig;*/}import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // حذف سجلات المبرمج عند رفع الموقع
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

// إعداد المحلل (Analyzer)
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzer(nextConfig);