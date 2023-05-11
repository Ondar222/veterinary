import React from 'react';
import Head from 'next/head'
import '../styles/globals.scss'
import { observer } from 'mobx-react-lite';
import '../public/bvi/css/bvi.css'
// import { FaRegEye } from 'react-icons/fa'
import Header from '../components/Header'
import '../styles/pos.scss'

import Script from 'next/script';
const MyApp = observer(({ Component, pageProps }) => (
  <>
    <Head>
      <title>Главная</title>
      <meta name="description" content="Официальный веб-ресурс Государственного комитета по охране объектов животного мира республики тыва" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/tuvan_herb.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <script async src="https://lidrekon.ru/slep/js/jquery.js"></script>
      <script async src="https://lidrekon.ru/slep/js/uhpv-full.min.js"></script>
    </Head>

    <div className='min-h-screen flex flex-col'>
      <Script async src="/js/pos.js"></Script>
      <Header />
      <Component {...pageProps} />
    </div>
  </>
))

export default MyApp