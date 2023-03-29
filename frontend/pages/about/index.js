import { PageName } from "../../components/PageName/PageName";
import parser from 'html-react-parser'
import Head from "next/head";
import { AboutPageLayout } from "../../layouts/AboutPageLayout";
import StandartLayout from "../../layouts/StandartLayout";
import DocumentLink from "../../components/Document/DocumentLink";

export const getServerSideProps = async () => {
    const about = await fetch(`${process.env.APIpath}/api/about-pages?sort=sorting:ASC&populate[0]=page.documents.file`, {
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    })
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            about
        }
    }
}

export default function About({ about }) {
    return (
        <>
            <Head>
                <title>О государственном органе</title>
            </Head>
            <StandartLayout>
                <PageName title="О государственном органе" />
                <AboutPageLayout>
                    <div className="flex flex-col gap-4">
                        {
                            parser(about[0].page.content)
                        }
                        {
                            about[0].page.documents.map((item) => <DocumentLink key={item.id} filename={item.file.name} url={item.file.url} />)
                        }
                    </div>
                </AboutPageLayout>
            </StandartLayout>
        </>
    )
}