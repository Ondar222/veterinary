import Head from "next/head";
import Link from "next/link";
import { PageName } from "../../../components/PageName/PageName";
import { PostCard } from "../../../components/Posts/PostPage";

export const getServerSideProps = async (context) => {
  const { name } = context.params
  const res = await fetch(`https://${process.env.BASE_API}/api/news/getFromTag?tag=${name}`);
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data.response)),
      name: name
    },
  }
};

function News({ name, posts }) {

  const datamap = posts.map((item) => {
    return (
      <Link href={`/news/${item.id}`} key={item.id} className='news'>
        <a>
          <PostCard
          id={item.id}
          title={item.title}
          upload_urls={item.upload_urls}
          body={item.body}
          tags={item.tags}
          createdAt={item.createdAt}
        />
        </a>
      </Link>
    )
  })

  return (
    <>
      {/*<Head>*/}
      {/*  <title>{`Новости с тегом ${name}`}</title>*/}
      {/*</Head>*/}

      {/*<div>*/}
      {/*  <PageName title={`Новости с тегом ${name}`} />*/}
      {/*  <div className={press.news}>*/}
      {/*    <menu>*/}
      {/*      <li>Новости</li>*/}
      {/*      <li>Анонсы</li>*/}
      {/*      <li>Интервью</li>*/}
      {/*      <li>Выступления и заявления</li>*/}
      {/*      <li>Официальный комментарий</li>*/}
      {/*      <li>Медиатека</li>*/}
      {/*    </menu>*/}

      {/*    <div className={press.news_content}>*/}
      {/*      <div className={press.news_date}></div>*/}
      {/*      {datamap}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div >*/}
    </>
  );
};

export default News;