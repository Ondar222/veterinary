/* @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  // target: 'server',
  env: {
    APIpath: 'http://api.tere-khol.khural.rtyva.ru',
    token: '7980cfe0d517fbdfd89dac33694676267561e773fd27ad2fc10835f8128e7ca24533703fc4928a366ce0417b6ed2c1580aec0e416e08c03aa8e927038332830b93cb028a99ab2b1d074de44fdc8827c53f131a685283f6532e92ec32848f7e85a1868214881c7cdaecffda390c237a3703d2a0df64d48612c64c350250ea3a18'
  },
  webpack: (config, { dev }) => {

    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery'
      })
    );

    return config
  },
  images: {
    domains: ['api.tere-khol.khural.rtyva.ru', 'mc.yandex.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.tere-khol.khural.rtyva.ru',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
        pathname: '/'
      }
    ]
  },
  compress: true,
  // assetPrefix: "http://api.ohornadzor.rtyva.ru",

  reactStrictMode: false,
  output: 'standalone'
}

module.exports = nextConfig