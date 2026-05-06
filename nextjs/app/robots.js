export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'portfolio-nextjs-three-wine.vercel.app/sitemap.xml',
  }
}