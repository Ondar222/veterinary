import { useEffect, useState } from "react";
import { GrMenu, GrClose } from 'react-icons/gr'

const MobileMenu = ({ children, className }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        isNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [isNavOpen])

    return (
        <div className="xs:black md:hidden dark:bg-gray-900">
            <nav className="container mx-auto rounded-3 py-3">
                <section className="MOBILE-MENU flex">
                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <GrMenu className="w-7 h-7 [&>path]:stroke-white" fill="white" />
                    </div>
                    <div className={isNavOpen ? "fixed top-0 right-0 w-full h-full z-10 bg-black opacity-50" : "hidden"}>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>

                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <GrClose className="w-7 h-7 [&>path]:stroke-white" />
                        </div>

                        <ul className="mobile__menu__ul first-letter:flex flex-col gap-3 overflow-scroll justify-start min-h-[250px] max-h-4/6 h-3/4 px-8 list-none [&>li]:mt-4 [&>li]:uppercase"
                        >
                            {children}
                        </ul>
                    </div>
                </section>
            </nav>
        </div>

    )
}

export default MobileMenu