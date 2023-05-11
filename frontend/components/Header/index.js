import React, { useEffect, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import HeaderNavbar from "./HeaderNavbar";
import { FaRegEye } from 'react-icons/fa'
import Image from 'next/image';
import HeaderSearchField from './HeaderSearchField';
import myImageLoader from '../../loader';
import MobileMenu from '../MobileMenu';
import MobileMenuItem from '../MobileMenu/MobileMenuItem';
import MobileMenuItemList from '../MobileMenu/MobileMenuItemList'
import dynamicPageRoutingSlice from '../../store/dynamicPageRoutingSlice';
import Link from 'next/link';

const Header = observer(() => {

    useEffect(() => {
        document.documentElement.setAttribute('font-size', 'A1')
        dynamicPageRoutingSlice.getAboutPageRoutes()
        dynamicPageRoutingSlice.getActivityPageRoutes()
        dynamicPageRoutingSlice.getCivilservicePageRoutes()

        console.log('rerendered')
    }, [])
    const eyeDamage = useRef()
    return (
        <header className="flex flex-col dark:bg-gray-700 text-gray-100 dark:text-black font-light">

            <div className="container mx-auto flex xs:flex-col md:flex-row xs:items-start md:items-center gap-4 justify-between py-4">
                <div className="flex flex-row items-center text-lg font-light gap-3">
                    <div className="sm:hidden xs:hidden md:block">
                        <Link href="/">
                            <a>
                                <Image loader={myImageLoader} alt='some' src="/logo10.png" width={80} height={80} className="dark:grayscale" />
                            </a>
                        </Link>

                    </div>

                    <h1 className="text-2xl font-normal">Служба ветеринарии Республики Тыва</h1>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="w-7 h-7">
                        <FaRegEye ref={eyeDamage} id='specialButton' className="w-full h-full cursor-pointer" />
                    </div>
                    <HeaderSearchField />
                </div>
            </div>
            <HeaderNavbar />
            <MobileMenu >
                <MobileMenuItem title="Главная" url="/" />
                <MobileMenuItemList title="О государственном органе" url="/about" items={dynamicPageRoutingSlice.aboutPage} />
                <MobileMenuItemList title="Деятельность" url="/activity" items={dynamicPageRoutingSlice.activityPage} />
                <MobileMenuItem title="Новости" url="/news" />
                <MobileMenuItem title="Документы" url="/documents" />
                <MobileMenuItem title="Прием обращений" url="/sendrequest" />
                <MobileMenuItem title="Контакты" url="/contacts" />
                <MobileMenuItemList title="Государственная служба" url="/civilservice" items={dynamicPageRoutingSlice.civilservicePage} />
            </MobileMenu>
        </header>
    )
})

export default React.memo(Header)