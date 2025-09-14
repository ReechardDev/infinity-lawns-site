// app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://infinity-lawns-site.vercel.app/sitemap.xml",
  };
}
