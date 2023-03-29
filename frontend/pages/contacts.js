import parser from 'html-react-parser'
import Head from 'next/head'
import { PageName } from "../components/PageName/PageName";
import MainPageLayout from '../layouts/MainPageLayout';

export const getServerSideProps = async () => {
  const content = await fetch(`${process.env.APIpath}/api/contacts-page?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.token}`
    }
  })
    .then((res) => res.json())
    .then((res) => res.data)

  return {
    props: {
      content
    }
  }
}

export default function Contacts({ content }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <MainPageLayout>
        <PageName title="Контакты" />
        <div className="xs:w-full md:w-9/12">
          {parser(content?.page?.content)}
          <div>

          </div>
          <div className="flex flex-col gap-5 text-xl font-semibold">
            <p>Государственный комитет по охране объектов животного мира республики тыва на карте</p>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac097f156530a6ab29f96082781a0c423774710c9a547d3aab423941620e5ea97&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
          </div>

        </div>
      </MainPageLayout>
    </>
  )
}