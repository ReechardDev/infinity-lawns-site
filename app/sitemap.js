// app/sitemap.js
export default function sitemap() {
  const base = "https://infinity-lawns-site.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/pricing`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
