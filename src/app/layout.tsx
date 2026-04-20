import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* تحسين 1: إزالة الربط باللوكال هوست لأنه يسبب بطء في الاختبارات الحقيقية */}
        {/* تحسين 2: استدعاء الأيقونات والخطوط بشكل Preload إذا كانت خارجية */}

        <title>باقات اشتراك IPTV المتميزة | قنوات مباشرة وأفلام</title>
        <meta
          name="description"
          content="اشترك الآن في أفضل خدمة IPTV. أكثر من 46 ألف قناة و150 ألف فيلم بجودة عالية وبدون تقطيع."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
 
      </head>
      <body className="bg-black antialiased overflow-x-hidden">
        <header>
          <Navbar/>
        </header>
        {/* تحسين 3: استخدام contain-intrinsic-size لمنع الـ CLS */}
        <main className="min-h-screen">{children}</main>
        
      </body>
    </html>
  );
}
