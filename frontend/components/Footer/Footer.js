import Link from 'next/link'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import Image from 'next/image'
import myImageLoader from '../../loader'

const Footer = (props) =>
    <footer className="sticky top-[100vh] dark:bg-gray-200 p-4 font-light">
        <section className="container flex flex-col mx-auto gap-4 text-white dark:text-black">
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col gap-4">
                    <Link href="/"><a>Государственный комитет по охране объектов животного мира республики тыва</a></Link>
                    <Link href="/"><a>Официальный интернет-ресурс</a></Link>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3">
                            <AiFillPhone />+7(39422)5-60-61
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <AiOutlineMail />ohota-tuva@yandex.ru
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Link className="cursor-pointer" href="https://vk.com/ohotnadzor17">
                            <a><Image loader={myImageLoader} alt='some' src="/vk_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale" /></a>
                            
                        </Link>
                        <Link className="cursor-pointer" href="https://t.me/polpredstvotuva">
                            <a><Image loader={myImageLoader} alt='some' src="/tg_logo.png" width={30} height={30} className="cursor-pointer dark:grayscale" /></a>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="">
                <p>Все материалы сайта доступны по лицензии: PERMISSIVE</p>
            </div>
        </section>
    </footer>

export default Footer