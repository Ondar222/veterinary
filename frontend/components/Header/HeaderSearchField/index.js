import React from 'react';
import Link from "next/link";
import {FaSearch} from "react-icons/fa";
import {observer} from "mobx-react-lite";
import searchQuery from '../../../store/search-query'

const HeaderSearchField = observer (() => {
    return (
        <div className="flex flex-row justify-center items-center p-1 bg-white cursor-pointer">

            <input type="text"
                   placeholder='Поиск'
                   onChange={(e) => searchQuery.search(e.target.value)}
                   className="text-sm text-black outline-0"/>

            <Link href='/search'>
                <a>
                    <FaSearch
                        onClick={(e) => {
                            searchQuery.fetchPosts(searchQuery.query)
                        }}
                        className="z-10 text-black"
                    />
                </a>
            </Link>
        </div>
    );
});

export default HeaderSearchField;
