const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }

    return config;
  },
  images: {
    domains: ['i.scdn.co']
  }
});
