import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://aibgin.cz', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://aibgin.cz/bezpecnost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://aibgin.cz/cenik', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://aibgin.cz/compliance', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/o-nas', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://aibgin.cz/kontakt', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://aibgin.cz/registrace', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://aibgin.cz/podminky', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: 'https://aibgin.cz/privacy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: 'https://aibgin.cz/cookies', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://aibgin.cz/ai-act-pro-skoly', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/ai-pro-ddm', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/ai-pro-krouzky', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/ai-pro-materske-skoly', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/ai-pro-zakladni-skoly', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://aibgin.cz/blog', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://aibgin.cz/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://aibgin.cz/gdpr-ve-skolstvi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://aibgin.cz/jak-zavest-ai-ve-skole', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://aibgin.cz/kontrola-csi-a-ai', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://aibgin.cz/dpa', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://aibgin.cz/odstoupeni', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: 'https://aibgin.cz/reklamace', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
