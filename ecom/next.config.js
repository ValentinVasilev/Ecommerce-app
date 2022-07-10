/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['dummyjson.com'],
  },
  // webpack(config) {
  //   config.infrastructureLogging = { debug: /PackFileCache/ }
  //   return config;
  // }
}

module.exports = nextConfig
