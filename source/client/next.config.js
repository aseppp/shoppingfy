/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  domains: ['https://res.cloudinary.com/aseppp/image/upload/v1676970789'],
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_URL: process.env.IMAGE_URL,
  },
};

module.exports = nextConfig;
