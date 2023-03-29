import parser from 'html-react-parser'
import { PageName } from "../../components/PageName/PageName";
import Head from "next/head";
import React, { useEffect } from "react";
import ActivityPageLayout from '../../layouts/ActivityPageLayout';
import StandartLayout from '../../layouts/StandartLayout';
import DocumentLink from '../../components/Document/DocumentLink';

export const getServerSideProps = async () => {
    const activity = await fetch(`${process.env.APIpath}/api/activity-pages?sort=sorting:ASC&populate[0]=page.documents.file`, {
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    })
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            activity
        }
    }
}

export default function Activity({ activity }) {
    return (
        <>
            <Head>
                <title>Деятельность</title>
            </Head>
            <StandartLayout>
                <PageName title="Деятельность" />
                <ActivityPageLayout>
                    <div className="flex flex-col gap-4">
                        {
                            parser(activity[0].page.content)
                        }
                        {
                            activity[0].page.documents.map((item) => <DocumentLink key={item.id} filename={item.file.name} url={item.file.url} />)
                        }
                    </div>
                </ActivityPageLayout>
            </StandartLayout>
        </>
    )
}