/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Verify if 'ppr' is a valid option for your version
    // Remove or correct if it's not supported
    // ppr: 'incremental',
  },
  // Remove this if your app requires server-side features
  // output: 'export', // Uncomment if you're sure you want a static export
};

export default nextConfig;
