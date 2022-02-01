module.exports = {
  env: {
    // @@@@@@@@@ this is only needed for github pages
      NEXT_PUBLIC_MAIN_APP: 'https://rifat32.github.io/abcd',
    // @@@@@@@@@
    NEXT_PUBLIC_LASTFM_API_KEY: 'ebe2c441c37e356caefe318275757b53',
    NEXT_PUBLIC_Weather_API_KEY: 'e3b952b7c233305e18697b3645934aa6',
    
  },
  // @@@@@@@@@ this is only needed for github pages 
    assetPrefix: '/abcd',
    basePath:"/abcd",
  // @@@@@@@@@
  
 
  reactStrictMode: true,
  webpack5: true,
  poweredByHeader: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Kherici',
        permanent: true,
      },
      // {
      //   source: '/twitter',
      //   destination: 'https://twitter.com/venolol',
      //   permanent: true,
      // },
      {
        source: '/discord',
        destination: 'https://discord.com/users/373006788380852236',
        permanent: true,
      },
    ]
  },
}
