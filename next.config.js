/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
