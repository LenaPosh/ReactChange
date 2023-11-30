import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import MyTable from "../components/Trade/MyTable";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import React from "react";

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
export const TradePage = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <MenuTop/>
                <h2 className='title-chart'>Список сделок</h2>
                <MyTable/>
                <AppFooter/>
            </ThemeProvider>

        </>

    )
}