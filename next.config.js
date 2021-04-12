module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/step/1',
        permanent: true,
      },
    ];
  },
};
