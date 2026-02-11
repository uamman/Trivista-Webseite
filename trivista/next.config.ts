import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },

  // 301 Redirects: WordPress → Next.js migration
  async redirects() {
    return [
      // ── WordPress system URLs ──
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-admin/:path+", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path+", destination: "/", permanent: true },
      { source: "/wp-includes/:path+", destination: "/", permanent: true },
      { source: "/wp-json/:path+", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },

      // ── WordPress feeds ──
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path+", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/rss", destination: "/", permanent: true },

      // ── WordPress sitemaps (old Rank Math) ──
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-posts-page-1.xml", destination: "/sitemap.xml", permanent: true },

      // ── WordPress default pages/archives ──
      { source: "/author/:slug+", destination: "/", permanent: true },
      { source: "/category/:slug+", destination: "/", permanent: true },
      { source: "/tag/:slug+", destination: "/", permanent: true },
      { source: "/archives/:path+", destination: "/", permanent: true },
      { source: "/page/:num+", destination: "/", permanent: true },

      // ── Elementor/Plugin artifacts ──
      { source: "/elementor-hf/:path+", destination: "/", permanent: true },
      { source: "/.well-known/acme-challenge/:path+", destination: "/", permanent: true },

      // ── Common crawler targets ──
      { source: "/readme.html", destination: "/", permanent: true },
      { source: "/license.txt", destination: "/", permanent: true },
      { source: "/wp-config.php", destination: "/", permanent: true },
    ];
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Long cache for static assets (images, video, fonts, docs)
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/video/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
