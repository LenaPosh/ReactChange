import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import ChartContainer from "../components/Balance/Balance";
// import {AppWallet} from "../components/Wallet/Wallet";
import './styleBalance.css'

export const WalletPage = () => {
    return (
        <>
            <MenuTop/>
            {/*<AppWallet/>*/}
            {/*<PieChart/>*/}
            <h2 className='title-chart'>Распределение депозита <br/> по монетам</h2>
            <ChartContainer/>
            <AppFooter/>

        </>

    )
}