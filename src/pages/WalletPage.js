import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import ChartContainer from "../components/Balance/Balance";
// import {AppWallet} from "../components/Wallet/Wallet";
import './styleBalance.css'
import BalanceChart from "../components/Balance/BalanceChart";
import ProfitChart from "../components/Balance/ProfitChart";

export const WalletPage = () => {
    return (
        <>
            <MenuTop/>
            {/*<AppWallet/>*/}
            {/*<PieChart/>*/}
            <div className="centered-container">
                <h2 className='title-chart'>Распределение депозита по монетам</h2>
                <ChartContainer/>
                <h2 className='title-chart'>График баланса</h2>
                <BalanceChart/>
                <h2>График прибыли</h2>
                <ProfitChart/>
                <h2></h2>
            </div>

            <AppFooter/>

        </>

    )
}