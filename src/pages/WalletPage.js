import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import ChartContainer from "../components/Balance/Balance";
// import {AppWallet} from "../components/Wallet/Wallet";
import './styleBalance.css'

import TableComponent from "../components/Balance/TabThree";
import React from "react";
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

export const WalletPage = () => {
    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <MenuTop/>

                <div className="centered-container">
                    <h2 className='title-chart'>Распределение депозита по монетам</h2>

                    <ChartContainer/>
                    <h2 className='title-chart-2'>Ваш баланс распределен:</h2>
                    <TableComponent/>
                </div>

                <AppFooter/>

            </ThemeProvider>


        </>

    )
}