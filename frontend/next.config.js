/* @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  // target: 'server',
  env: {
    path: "api.oopt.rtyva.ru",
    APIpath: `http://api.oopt.rtyva.ru`,
    token: '44244d640c320765eaa6d82823383d43e0655d8df29a6a04f2f9893f19a4a90a44ebd0db36b806fa1ce08b4a8bb1b92902f482bc01f8b83b4bc80d9d237a270f949aaad406a33315f009bb5c32a7a83b5c417b2fd4e4178ae0d4dbe3e1267915cbdf471988cf8a288bff034500ae409a44e9fd416876b925f8e12bcad900fdaa'
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
    domains: [`api.oopt.rtyva.ru`, 'mc.yandex.ru'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `api.oopt.rtyva.ru`,
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

  reactStrictMode: false,
  output: 'standalone'
}

module.exports = nextConfig