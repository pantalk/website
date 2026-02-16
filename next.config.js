/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  transpilePackages: [
    // local packages
    // @todo export in own library
    ...(() => {
      const childProcess = require('child_process')

      const rootOutput = childProcess
        .execSync('pnpm list --json --depth -1 -r')
        .toString()

      const knownDependencies =
        JSON.parse(rootOutput)?.map?.(({ name }) => name) || []

      const localOutput = childProcess
        .execSync('pnpm list --json --depth 0')
        .toString()

      const transpileDependencies =
        JSON.parse(localOutput)?.[0]?.dependencies?.filter?.(({ name }) =>
          knownDependencies.includes(name)
        ) || []

      return transpileDependencies
    })(),
  ],

  webpack: (config, options) => {
    const { defaultLoaders } = options

    // transpile svg
    {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
    }

    // transpile shared code
    {
      // @todo export in own library
      config.module.rules.push({
        test: /\.(?:tsx?|jsx?)$/,
        include: [path.resolve(path.join(__dirname, '../../shared'))],
        exclude: /node_modules/,
        use: [defaultLoaders.babel],
      })
    }

    return config
  },
}

module.exports = nextConfig
