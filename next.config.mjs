/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['fixdoor.com', 'mwi.imgix.net', 'www.mwcomponents.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },

  experimental: {
    // ✅ Disable legacy polyfills and transpilation
    legacyBrowsers: false,

    // ✅ Optimize `react-icons` bundle size
    modularizeImports: {
      'react-icons': {
        transform: 'react-icons/{{member}}',
      },
    },
  },

  // (Optional) Additional compression settings if needed
  compress: true, // ensure text compression like gzip/brotli is on
};

export default nextConfig;
