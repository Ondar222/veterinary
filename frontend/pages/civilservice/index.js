import { PageName } from "../../components/PageName/PageName"
import React from 'react';
import CivilservicePageLayout from "../../layouts/CivilservicePageLayout";
import StandartLayout from "../../layouts/StandartLayout";
import parser from 'html-react-parser'
import DocumentLink from "../../components/Document/DocumentLink";

export const getServerSideProps = async () => {
    const civilservice = await fetch(`${process.env.APIpath}/api/civilservice-pages?sort=sorting:ASC&populate[0]=page.documents.file`, {
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    })
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            civilservice
        }
    }
}

const CivilService = ({ civilservice }) => {
    return (
        <StandartLayout>
            <PageName title="Государственная служба" />
            <CivilservicePageLayout>
                <div className="flex flex-col gap-4">
                    {
                        parser(civilservice[0].page.content)
                    }
                    {
                        civilservice[0].page.documents.map((item) => <DocumentLink key={item.id} filename={item.file.name} url={item.file.url} />)
                    }
                </div>



            </CivilservicePageLayout>
        </StandartLayout>

    )
}

export default CivilService