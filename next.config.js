module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/generate-sitemap');
    }

    return config;
  },
  images: {
    domains: ['i.scdn.co']
  }
};
