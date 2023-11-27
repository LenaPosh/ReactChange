import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";
import ChartContainer from "../components/Balance/Balance";
// import {AppWallet} from "../components/Wallet/Wallet";

export const WalletPage = () => {
    return (
        <>
            <MenuTop/>
            {/*<AppWallet/>*/}
            {/*<PieChart/>*/}
            <ChartContainer/>
            <AppFooter/>

        </>

    )
}