import Image from "next/image";
import { unixTimeConverter } from "../functions/unixTimeConverter";
import Link from "next/link";
import Media from "react-media-next";
import { useEffect, useState } from "react";

const PostCard = ({ card }) => {
    const [formattedTimeString, setFormattedTimeString] = useState()

    useEffect(() => {
        setFormattedTimeString(unixTimeConverter(card.createdAt))
    }, [])
    return (
        <div className="flex xs:flex-col md:flex-row border-2 rounded-r">
            <div className='relative sm:min-w-[calc(200px)] md:min-w-[calc(350px)]'>
                <Image
                    alt='some'
                    src={process.env.APIpath + card.post_card.image.url}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="relative w-full flex flex-col flex-start gap-3 p-3">
                <div className="relative overflow-hidden h-[30px]">
                    <h1 className="absolute left-0 right-0 text-xl overflow-hidden text-ellipsis whitespace-nowrap">
                        {card.title}
                    </h1>
                </div>

                <div className="relative overflow-hidden">
                    <p className="max-h-[4.5em] text-justify overflow-hidden text-md text-ellipsis leading-6">
                        {card?.post_card?.content && card.post_card.content}
                    </p>
                </div>

                <div className="flex flex-row items-center justify-between">

                    <div className="flex xs:flex-col md:flex-row items-center gap-2">
                        <p className="font-bold">Дата публикации:</p>
                        <p>{formattedTimeString}</p>
                    </div>

                    <Link href={`/news/${card.id}`}>
                        <a className="button dark:bg-gray-500">
                            Читать
                        </a>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default PostCard