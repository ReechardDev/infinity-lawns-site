// app/sitemap.js
export default function sitemap() {
  const base = "https://infinity-lawns-site.vercel.app";

  // List only real, public routes. Add more as you create them.
  return [
    { url: `${base}/`,               lastModified: new Date() },
    { url: `${base}/booking`,        lastModified: new Date() },
    { url: `${base}/denver-lawn-care`, lastModified: new Date() },
  ];
}
