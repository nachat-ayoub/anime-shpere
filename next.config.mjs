/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'img.flawlessfiles.com' }],
  },
};

export default nextConfig;
