import Head from "next/head";
import { PostPage } from "../../components/Posts/PostPage";
import MainPageLayout from "../../layouts/MainPageLayout";

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/posts/${id}?populate[0]=post_page.images`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
  const data = await res.json()

  return {
    props: { post: data.data },
  }
};

const NewsItem = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <MainPageLayout>
      <PostPage
        id={post.id}
        title={post.title}
        images={post.post_page.images}
        body={post.post_page.content}
      // tags={post.tags.data}
      />
    </MainPageLayout>
  </>

);

export default NewsItem;