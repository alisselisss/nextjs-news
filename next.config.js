/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["storage-api.petstory.ru",
              "static8.depositphotos.com"]
  }
}

module.exports = nextConfig
