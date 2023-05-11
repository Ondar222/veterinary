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
          <div className="map__veterinary">
            <p>Служба ветеринарии Республики Тыва</p>
            <iframe className='map__veterinary' src="https://yandex.ru/map-widget/v1/?um=constructor%3A4355f417be594224598fd47f0de72459ee91f2a9b2699155825a794c3b511712&amp;source=constructor" width="800" height="400"></iframe>
          </div>

        </div>
      </MainPageLayout>
    </>
  )
}