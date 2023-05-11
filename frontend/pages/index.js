import { useRouter } from 'next/router'
import React from "react";
import { useEffect } from 'react';
import MainPageLayout from '../layouts/MainPageLayout';
import PostCard from '../components/Posts/PostCard'
import { LastPosts } from "../components/LastPosts"
import Carousel from '../components/Carousel';
// import PinnedLinks from '../components/PinnedLinks';
import { Widget } from '../classes/pos';
import Image from 'next/image';

export const getServerSideProps = async ({ query: { page = 1 } }) => {
    const news = await fetch(`${process.env.APIpath}/api/posts?pagination[page]=${page}&pagination[pageSize]=5&sort=createdAt:desc&populate[0]=post_card.image`, {
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    })
        .then((res) => res.json())

    const links = await fetch(`${process.env.APIpath}/api/main-page?populate[0]=slider.image&populate[1]=pinned_links.image`, {
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    })
        .then((res) => res.json())
        .then((res) => res.data)

    return {
        props: {
            news: news.data,
            links: links,

            page: news.meta.pagination.page,
            pageSize: news.meta.pagination.pageSize,
            pageCount: news.meta.pagination.pageCount,
            total: news.meta.pagination.total
        }
    }
}

const Home = ({ news, page, pageSize, pageCount, total, links }) => {
    useEffect(() => {
        Widget("https://pos.gosuslugi.ru/form", 343823)
    }, [])
    const router = useRouter()
    let active = page
    let items = [];

    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <button key={number}
                className="bg-[#378ee6] dark:bg-gray-500 border rounded px-3 py-2 text-white cursor-pointer"
                onClick={() => {
                    router.push(`/?page=${number}`)
                }}>
                {number}
            </button>
        );
    }

    return (
        <MainPageLayout>
            <div className="w-full relative flex xs:flex-col md:flex-row">
                <Carousel slider={links.slider} />
            </div>
            <div className="w-full flex flex-row gap-3">
                <div className="xs:w-full sm:w-5/5 md:w-5/5 lg:w-5/5">
                    <div className='xs:flex xs:flex-col xs:gap-3 md:hidden'>
                        {
                            news.map((item) => <PostCard
                                card={item}
                                key={item.title}
                            />)
                        }
                    </div>
                    <div className='xs:hidden sm:hidden md:block'>
                        <LastPosts news={news} />
                    </div>
                </div>
                {/* <div className="xs:hidden md:hidden lg:flex xs:flex-row md:flex-col gap-3 justify-start xs:w-full md:w-1/5 min-w-40 min-h-40">
                    <PinnedLinks pinned_links={links.pinned_links} />
                </div> */}
            <div className='container__gosuslugi'>
                <div id='js-show-iframe-wrapper'>
                    <div className='pos-banner-fluid bf-2'>

                        <div className='bf-2__decor'>
                            <div className='bf-2__logo-wrap'>
                                <Image
                                    className='bf-2__logo'
                                    // src='https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg'
                                    src='/gosuslugi-logo.svg'
                                    alt='Госуслуги'
                                    width={500}
                                    height={100}
                                />
                                <div className='bf-2__slogan'>Решаем вместе</div >
                            </div >
                        </div >
                        <div className='bf-2__content'>

                            <div className='bf-2__description'>
                                <span className='bf-2__text'>
                                                Есть вопрос?
                                            </span > 
                                 <span className='bf-2__text bf-2__text_small'>
                                                Напишите нам
                                            </span >
                            </div >

                            <div className='bf-2__btn-wrap'>
                                {/* <!-- pos-banner-btn_2 не удалять; другие классы не добавлять --> */}
                                <button
                                                className='pos-banner-btn_2'
                                                type='button'
                                            >Сообщить о проблеме
                                            </button >
                            </div >
                        </div >
                    </div >
            </div>
                </div >
            </div>


        </MainPageLayout >
    )
}

export default Home