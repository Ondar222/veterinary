import { PageName } from "../PageName/PageName";
import Image from "next/image";
import parser from "html-react-parser";
import { useCallback, useState } from "react";
import Head from "next/head";
import myImageLoader from "../../loader";

export const PersonPage = (params) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <>
            <Head>
                <title>
                    {params.position}
                </title>
            </Head>

            <PageName title={params.position} />

            <div className="border border-black rounded-md">
                <div className="flex xs:flex-col md:flex-row gap-5">

                    <div className="relative min-w-[200px] min-h-[250px] max-w-[400px] max-h-[400px">
                        <Image
                            loader={myImageLoader}
                            alt='some'
                            src={process.env.APIpath + params.preview_image}
                            layout="fill"
                            objectFit="contain"
                            className="dark:grayscale" />
                    </div>

                    <div className="p-3">
                        <div className="text-2xl font-normal">
                            <h4>{params.surname}</h4>
                            <h4>{params.name}</h4>
                            <h4>{params.patronymic}</h4>
                        </div>

                        <div className="text-xl font-normal">
                            <h4>Образование</h4>
                            <div className="text-xl font-light">
                                {parser(params.education)}
                            </div>
                        </div>

                        <div className="text-xl font-normal">
                            <h4>Биография</h4>
                            <div className="text-xl font-light">{parser(params.biography)}</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-gray-100 border rounded-b-lg p-3 text-2xl gap-3">
                    <div>
                        <div className="font-normal">Контактные данные</div>
                        <div className="flex flex-col gap-2">
                            <div className="text-xl">{params.email}</div>
                            <div className="text-xl">{params.phone}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5">
                {/*{params.images.map((item, index) =>*/}
                {/*    <div key={index} className="flex items-start justify-start relative min-w-[200px] min-h-[250px] max-w-[400px] max-h-[400px]">*/}
                {/*        <Image*/}
                {/*            loader={myImageLoader}*/}
                {/*            alt="some"*/}
                {/*            src={item}*/}
                {/*            layout="fill"*/}
                {/*            objectFit='contain'*/}
                {/*            key={index}*/}
                {/*            onClick={() => openImageViewer(index)}*/}
                {/*            className="" />*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>

            {/*{*/}
            {/*    isViewerOpen && (<ImageViewer*/}
            {/*        src={params.images}*/}
            {/*        currentIndex={currentImage}*/}
            {/*        disableScroll={false}*/}
            {/*        closeOnClickOutside={true}*/}
            {/*        onClose={closeImageViewer}*/}
            {/*    />)*/}
            {/*}*/}
        </>
    )

}
