import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import ChartContainer from "../components/Balance/Balance";
// import {AppWallet} from "../components/Wallet/Wallet";
import './styleBalance.css'

import TableComponent from "../components/Balance/TabThree";
import React from "react";
import {ThemeProvider} from "react-bootstrap";


export const WalletPage = () => {
    return (
        <>
            <ThemeProvider>
                <MenuTop/>
                {/*<AppWallet/>*/}
                {/*<PieChart/>*/}
                <div className="centered-container">
                    <h2 className='title-chart'>Распределение депозита по монетам</h2>
                    {/*<PieChartDiagram/>*/}
                    <ChartContainer/>
                    <h2 className='title-chart-2'>Ваш баланс распределен:</h2>
                    <TableComponent/>
                    {/*<h2>график</h2>*/}
                    {/*<h2></h2>*/}
                    {/*<h2 className='title-chart'>График баланса</h2>*/}
                    {/*<BalanceChart/>*/}
                    {/*<h2>График прибыли</h2>*/}
                    {/*<ProfitChart/>*/}
                    {/*<h2></h2>*/}
                </div>

                <AppFooter/>
            </ThemeProvider>


        </>

    )
}