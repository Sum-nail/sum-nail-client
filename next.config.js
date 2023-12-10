/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // config.output.filename = 'static/chunks/[name]-[chunkhash].js';
    return config;
  },
};

module.exports = nextConfig;
