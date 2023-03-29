import Image from 'next/image'
import parser from 'html-react-parser'
import { useRouter } from "next/router";
import React from "react";
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PostPage = (params) => {
    const router = useRouter()
    return (
        <div className="py-3">
            <div className="text-2xl py-3">{params.title}</div>
            <div className='py-3 leading-8'>
                {parser(params.body)}
            </div>
            <button onClick={() => router.push('/news')} className="button dark:bg-gray-500">
                Назад к новостям
            </button>
        </div>
    );
}