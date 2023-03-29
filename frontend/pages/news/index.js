import { PageName } from "../../components/PageName/PageName";
import Link from 'next/link'
import { useRouter } from 'next/router';
import PostCard from "../../components/Posts/PostCard";
import MainPageLayout from "../../layouts/MainPageLayout";
import StandartLayout from "../../layouts/StandartLayout";
import Head from "next/head";

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const data = await fetch(`${process.env.APIpath}/api/posts?populate[0]=post_card.image&pagination[page]=${page}&pagination[pageSize]=10&sort=createdAt:desc`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
    .then((res) => res.json());

  return {
    props: {
      posts: data.data,

      page: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pageCount: data.meta.pagination.pageCount,
      total: data.meta.pagination.total
    }
  }
};

function News({ posts, page, pageSize, pageCount, total }) {
  const router = useRouter()
  let active = page
  let items = [];

  const paginationBasic = <div className='flex items-center justify-center'>{items}</div>

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <button key={number} className="bg-[#378ee6] border rounded px-3 py-2 text-white cursor-pointer"
        onClick={() => {
          router.push(`/news/?page=${number}`)
        }}>
        {number}
      </button>,
    );
  }

  return (
    <>
      <Head>
        <title>Новости</title>
      </Head>
      <MainPageLayout>
        <PageName title='Новости' />
        <div>
          <div className="flex flex-col gap-4">
            {posts.map((item) => {
              return (
                <PostCard
                  key={item.id}
                  card={item}
                />
              )
            })}
            {paginationBasic}
          </div>
        </div >
      </MainPageLayout>
    </>


  );
};

export default News;