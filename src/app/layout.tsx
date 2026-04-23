import type { Metadata } from "next";
// @ts-expect-error: TypeScript sometimes fails to resolve side-effect CSS imports in the app directory
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// هذا الجزء هو الذي سيصلح الـ SEO فوراً
export const metadata: Metadata = {
  title: "أفضل اشتراك IPTV في المغرب 2026 – سيرفرات بدون تقطيع ودعم فني",
  description: "استمتع بأقوى سيرفرات IPTV في المغرب مع دعم فني مستمر وجودة 4K فائقة السرعة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* ستقوم Next.js بحقن الـ Title والـ Description تلقائياً هنا من كائن metadata */}
      <body className="bg-black antialiased overflow-x-hidden font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}