import React from "react";
import { MenuTop } from "../components/MenuTop/MenuTop";
import { AppFooter } from "../components/Footer/Footer";
import NewsList from "../components/Home/NewsList";
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const lightTheme = {
    backgroundColor: '#ffffff',
    textColor: '#2c2c2c',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;
export const HomePage = () => {
    // Новость о запуске новой версии личного кабинета в Телеграме
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
                <MenuTop />
                <NewsList news={newsData} />
                <AppFooter />

            </ThemeProvider>
        </>
    );
};
