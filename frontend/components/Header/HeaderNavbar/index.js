import React from 'react';
import HeaderNavbarItem from './HeaderNavbarItem'

const HeaderNavbar = () => {
    return (
        <div
            className="container mx-auto xs:hidden md:flex flex-row justify-between items-center">
            <HeaderNavbarItem href="/">Главная</HeaderNavbarItem>
            <HeaderNavbarItem href="/about">О государственном органе</HeaderNavbarItem>
            <HeaderNavbarItem href="/activity">Деятельность</HeaderNavbarItem>
            <HeaderNavbarItem href="/news">Новости</HeaderNavbarItem>
            <HeaderNavbarItem href="/documents">Документы</HeaderNavbarItem>
            <HeaderNavbarItem href="/sendrequest">Прием обращений</HeaderNavbarItem>
            <HeaderNavbarItem href="/contacts">Контакты</HeaderNavbarItem>
        </div>
    );
};

export default HeaderNavbar;
