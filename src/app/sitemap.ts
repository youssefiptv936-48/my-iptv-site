import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://my-iptv-site.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // إذا كان لديكِ صفحات أخرى مثل /pricing يمكنكِ إضافتها هنا
  ]
}