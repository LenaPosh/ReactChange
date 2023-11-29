import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";


import TableComponent from "../components/Trade/TableComponennts";

export const TradePage = () => {
    return (
        <>
            <MenuTop/>
            <h2 className='title-chart'>Data table</h2>
            <TableComponent/>
            <AppFooter/>
        </>

    )
}