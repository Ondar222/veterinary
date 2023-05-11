/* @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  // target: 'server',
  env: {
    path: "http://api.vetservice.rtyva.ru",
    APIpath: `http://api.vetservice.rtyva.ru`,
    token: 'c0ab10a72eebac346aef17d3888163af4d480e7c4f64b41d547f9ef9e10ed0a92b68362f8d5b395c8653b39ca854e954abe31581c6b69fa671cd508aef7f50bf29d6c3d82401b557911b68db2947babfa28a5d5b7cb273f3a96cb1ceea35df007a31152c43c26fcd15407c0eecba77011f1fc2edfc36da3c857b0e3ebdd7ebd1'
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
    domains: [`api.vetservice.rtyva.ru`, 'mc.yandex.ru'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `api.vetservice.rtyva.ru`,
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