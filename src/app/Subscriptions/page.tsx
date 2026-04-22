import React from 'react'
//import My_List from '../components/ChannelList/My_List'
import SectionPrice from '@/app/components/price/SectionPrice'
import Head from 'next/head' // استيراد Head للتحكم في الميتا تاق

export default function Subscriptions() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product", // تم التغيير من ItemList إلى Product لجذب "نجوم التقييم" في جوجل
    "name": "باقات اشتراك IPTV المتميزة",
    "description": "أفضل اشتراكات IPTV بدون تقطيع، تضم جميع القنوات العربية والعالمية بجودة عالية.",
    "brand": {
      "@type": "Brand",
      "name": "IPTV Service"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "10",
      "highPrice": "100",
      "offerCount": "3"
    }
  };

  return (
    <>
      <Head>
        {/* حل مشكلة الـ SEO 91 -> 100 */}
        <title>باقات اشتراك IPTV | أسعار تنافسية واشتراكات متنوعة</title>
        <meta name="description" content="استكشف باقات اشتراك IPTV المتنوعة، اشتراكات شهرية وسنوية بأفضل الأسعار وبدون تقطيع." />
        <link rel="canonical" href="https://yourdomain.com/Subscriptions" />
      </Head>

      <main>
        {/* كود السكيما */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        
        {/* تحسين رندرة المكونات الثقيلة */}
        <section style={{ contentVisibility: 'auto' }}>
           <SectionPrice/>
        </section>

        <section style={{ contentVisibility: 'auto' }}>
           
        </section>
      </main>
    </>
  )
}