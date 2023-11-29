import React from "react";
import { MenuTop } from "../components/MenuTop/MenuTop";
import { AppFooter } from "../components/Footer/Footer";
import NewsList from "../components/Home/NewsList";

export const HomePage = () => {
    // Пример данных для новостей
    const newsData = [
        { id: 1, title: "Заголовок 1", description: "Описание 1", date: "2023-11-29", link: "#" },
        { id: 2, title: "Заголовок 2", description: "Описание 2", date: "2023-11-30", link: "#" },
        // Добавьте свои данные
    ];

    return (
        <>
            <MenuTop />
            <NewsList news={newsData} />
            <AppFooter />
        </>
    );
};