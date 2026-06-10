/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  /* ─── Permanent redirect: /services → /courses ───────────────────────
   * Belt-and-suspenders alongside the server-side redirect() in
   * app/services/page.tsx. This fires at the edge before React renders,
   * so crawlers see a clean HTTP 308 immediately.
   * ────────────────────────────────────────────────────────────────── */
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/courses',
        permanent: true,
      },
    ]
  },

  /* ─── HTTP Security & Performance Headers ────────────────────────────
   * Security headers are a Google trust signal and help Core Web Vitals
   * page-experience scores. HSTS in particular signals HTTPS commitment.
   * ────────────────────────────────────────────────────────────────── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          /* Prevent clickjacking */
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          /* Stop MIME-type sniffing */
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          /* Enable browser XSS filter */
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          /* Control referrer info shared with third parties */
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          /* Restrict browser feature access */
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          /* HTTPS enforcement — 2-year max-age with preload */
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      /* Cache static assets aggressively for Core Web Vitals (LCP / FID) */
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|mp4|webm)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
