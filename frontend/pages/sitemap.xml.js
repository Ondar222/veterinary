//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'http://ohotnadzor.rtyva.ru';

const AuthHeaders = {
  headers: {
    Authorization: `Bearer ${process.env.token}`
  }
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = await fetch(`${process.env.APIpath}/api/posts?populate=*`,
    AuthHeaders)
    .then((res) => res.json())
    .then((res) => res.data);

  const aboutPages = await fetch(`${process.env.APIpath}/api/about-pages`,
    AuthHeaders)
    .then((res) => res.json())
    .then((res) => res.data)

  const activityPages = await fetch(`${process.env.APIpath}/api/activity-pages`,
    AuthHeaders)
    .then((res) => res.json())
    .then((res) => res.data)

  const civilservicePages = await fetch(`${process.env.APIpath}/api/civilservice-pages`,
    AuthHeaders)
    .then((res) => res.json())
    .then((res) => res.data)

  const sitemap = generateSiteMap(posts, aboutPages, activityPages, civilservicePages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {
      posts,
      aboutPages,
    },
  };
}

function generateSiteMap(posts, about, activity, civilservice) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>http://ohotnadzor.rtyva.ru</loc>
     </url>
     <url>
       <loc>http://ohotnadzor.rtyva.ru/management</loc>
     </url>
     <url>
       <loc>http://ohotnadzor.rtyva.ru/contacts</loc>
     </url>
     <url>
       <loc>http://ohotnadzor.rtyva.ru/sendrequest</loc>
     </url>
     <url>
       <loc>http://ohotnadzor.rtyva.ru/civilservice</loc>
     </url>
     ${civilservice.map(({ title }) => {
    return `
      <url>
         <loc>${`${EXTERNAL_DATA_URL}/civilservice/${title}`}</loc>
     </url>
      `
  })
      .join('')}
     <url>
       <loc>http://ohotnadzor.rtyva.ru/news</loc>
     </url>
     ${posts.map(({ id }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/news/${id}`}</loc>
       </url>
     `;
      })
      .join('')}
      <url>
        <loc>http://ohotnadzor.rtyva.ru/about</loc>
      </url>
      ${about.map(({ title }) => {
        return `
        <url>
           <loc>${`${EXTERNAL_DATA_URL}/about/${title}`}</loc>
       </url>
        `
      })
      .join('')}
      <url>
        <loc>http://ohotnadzor.rtyva.ru/activity</loc>
      </url>
      ${activity.map(({ title }) => {
        return `
        <url>
           <loc>${`${EXTERNAL_DATA_URL}/activity/${title}`}</loc>
       </url>
        `
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://jsonplaceholder.typicode.com</loc>
        </url>
        <url>
          <loc>https://jsonplaceholder.typicode.com/guide</loc>
        </url>
      </urlset>`
  )
}



export default SiteMap;