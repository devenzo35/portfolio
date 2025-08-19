import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

export default withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
})
