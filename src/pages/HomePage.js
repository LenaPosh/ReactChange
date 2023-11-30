import React from "react";
import { MenuTop } from "../components/MenuTop/MenuTop";
import { AppFooter } from "../components/Footer/Footer";
import NewsList from "../components/Home/NewsList";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';

const lightTheme = {
    backgroundColor: '#ffffff',
    textColor: '#2c2c2c',
    activeColor: '#08a652',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;

export const HomePage = () => {
    const location = useLocation();

    // Проверка, является ли текущий путь домашним
    const isHomePage = location.pathname === '/' || location.pathname === '';

    // Определение объекта newsData
    const newsData = [
        {
            id: 1,
            title: "Запуск новой версии личного кабинета в Телеграмме",
            description: "Мы рады сообщить, что мы запустили обновленную версию личного кабинета. Теперь у вас есть доступ к новым функциям и улучшенному пользовательскому опыту.",
            date: "2023-11-29",
            link: "#"
        },
    ];

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <MenuTop isHomePage={isHomePage} />
                <NewsList news={newsData} />
                <AppFooter />
            </ThemeProvider>
        </>
    );
};
