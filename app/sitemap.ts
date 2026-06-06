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
  ]
}
