import React from "react";
import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";

import BalanceChart from "../components/Balance/BalanceChart";
import ProfitChart from "../components/Balance/ProfitChart";


export const MenuPage = () => {
    return (
        <>
            <MenuTop/>
            <div className="centered-container">
                <h2 className='title-chart'>График баланса</h2>
                <BalanceChart/>
                <h2 className='title-chart-2'>График прибыли</h2>
                <ProfitChart/>
                {/*<h2></h2>*/}
                <h2>график</h2>
            </div>

            <AppFooter/>


        </>

    )
}