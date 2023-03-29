// In `pages/_document.js`
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import Image from 'next/image';

export default function Document() {
  return (
    <Html lang="ru">
      <Head >
        {/* <link rel="stylesheet" href="http://localhost:3000/bvi/css/bvi.min.css" type="text/css"></link> */}
       
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(92829324, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true
              });
              `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/12345678" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

      </body>
    </Html>
  )
}