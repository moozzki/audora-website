// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://useaudora.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1, // Prioritas tertinggi buat landing page
        },
        // Kalau lu nambahin halaman lain nanti (misal blog atau pricing), 
        // tinggal tambahin object baru di dalam array ini:
        {
            url: 'https://useaudora.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://useaudora.com/pricing',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://useaudora.com/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },

    ];
}