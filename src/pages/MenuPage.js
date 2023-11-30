import React from "react";
import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import BalanceChart from "../components/Balance/BalanceChart";
import ProfitChart from "../components/Balance/ProfitChart";
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

export const MenuPage = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />

                <MenuTop/>
                <div className="centered-container">
                    <h2 className='title-chart'>График баланса</h2>
                    <BalanceChart/>
                    <h2 className='title-chart-2'>Прибыль по дням</h2>
                    <ProfitChart/>

                </div>

                <AppFooter/>
            </ThemeProvider>




        </>

    )
}