// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            // Kalau ada halaman rahasia/dashboard admin di root domain, taruh di disallow
            // disallow: '/admin/', 
        },
        // Pastikan URL-nya ngarah ke domain utama lu
        sitemap: 'https://useaudora.com/sitemap.xml',
    };
}