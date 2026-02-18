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
}

module.exports = nextConfig
