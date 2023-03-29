import Head from "next/head";
import MainPageLayout from "../../layouts/MainPageLayout";
import { PageName } from "../../components/PageName/PageName";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import parser from 'html-react-parser'
import DocumentLink from '../../components/Document/DocumentLink'

export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const data = await fetch(`${process.env.APIpath}/api/about-pages?populate[0]=page.documents.file.url&filters[page][title][$eqi]=${slug}`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
    .then((res) => res.json())

  return {
    props: { page: data.data[0] },
  }
};

const AboutStaticPage = ({ page }) => (
  <>
    <Head>
      <title>{page.title}</title>
    </Head>
    <MainPageLayout>
      <PageName title={page.title} />
      <AboutPageLayout>


        {parser(page.page.content)}
         {
          page.page.documents.map((item) => <DocumentLink key={item.id} filename={item.file.name} url={item.file.url} />)
        } 
      </AboutPageLayout>
    </MainPageLayout>
  </>

);

export default AboutStaticPage;