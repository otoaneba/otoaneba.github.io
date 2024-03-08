/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",  // enable static exports
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
