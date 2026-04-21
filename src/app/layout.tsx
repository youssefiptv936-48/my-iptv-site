import "./globals.css";
import { Tajawal } from 'next/font/google'; // استدعاء الخط بشكل ذكي
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// إعداد الخط ليكون سريعاً جداً ولا يحجب الصفحة
const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap', 
});

// الطريقة الاحترافية لتعريف معلومات الموقع في Next.js
export const metadata = {
  title: 'باقات اشتراك IPTV المتميزة | قنوات مباشرة وأفلام',
  description: 'اشترك الآن في أفضل خدمة IPTV. أكثر من 46 ألف قناة و150 ألف فيلم بجودة عالية وبدون تقطيع.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* ملاحظة: Next.js سيتعامل مع الـ Head تلقائياً من كائن metadata أعلاه */}
      
      <body className={`${tajawal.className} bg-black antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}