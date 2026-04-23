import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // التغيير الأساسي هنا: استخدم النطاق الجديد الخاص بك


  return [
    {
      url: 'https://iptvforja.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://iptvforja.com/Subscriptions' ,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url:'https://iptvforja.com/freetrial' ,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url:'https://iptvforja.com/HelpCenter' ,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url:'https://iptvforja.com/Channel' ,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]
} 