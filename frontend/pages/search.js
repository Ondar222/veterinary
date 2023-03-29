import { observer } from "mobx-react-lite"
import PostCard from "../components/Posts/PostCard"
import Link from "next/link"
import searchQuery from "../store/search-query"
import { useEffect } from "react"
import searchDocs from "../store/search-docs";
import Head from "next/head";
import MainPageLayout from "../layouts/MainPageLayout"
import StandartLayout from "../layouts/StandartLayout"

const SearchPage = observer(() => {

    useEffect(() => {
        searchfunction()
    }, [])

    const searchfunction = async () => {

        if (searchQuery.query !== 'undefined') {
            await searchQuery.fetchPosts(searchQuery.query)
        } else {
            await searchQuery.fetchPostsAll()
        }
    }

    const datamap = searchQuery?.result?.map((item) => {

        return (
            <Link href={`/news/${item.id}`} key={item.id} className='news'>
                <a>
                    <PostCard
                        id={item.id}
                        title={item.title}
                        preview_image={`${process.env.APIpath}` + item.preview_image.url}
                        news_preview={item.news_preview}
                        body={item.body}
                        createdAt={item.createdAt
                        }
                    />
                </a>
            </Link>
        )
    })

    return (
        <>
            <Head>
                <title>Поиск</title>
            </Head>
            <MainPageLayout>


                <div className="flex flex-col gap-4 py-5">

                    <div className="flex justify-content-between border rounded">
                        <input defaultValue={searchDocs.query}
                            onChange={(e) => {
                                searchQuery.search(e.target.value)
                            }}
                            className='w-full rounded-l px-2 outline-0' />
                        <button onClick={searchfunction}
                            className="w-fit h-fit text-white bg-[#378ee6] rounded-r px-3 py-2">Поиск
                        </button>
                    </div>

                    <div className="flex flex-col gap-5">
                        {
                            searchQuery.result.length < 1
                                ?
                                <div>
                                    <p>По вашему запросу ничего не найдено</p>
                                    <p>Попробуйте ввести другой запрос</p>
                                </div>
                                :
                                datamap
                        }
                    </div>
                </div>
            </MainPageLayout>
        </>


    )
})

export default SearchPage