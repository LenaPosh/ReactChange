import {MenuTop} from "../components/MenuTop/MenuTop";
import {AppFooter} from "../components/Footer/Footer";


import TableComponent from "../components/Trade/TableComponennts";
import MyTable from "../components/Trade/MyTable";

export const TradePage = () => {
    return (
        <>
            <MenuTop/>
            <h2 className='title-chart'>Список сделок</h2>
            {/*<TableComponent/>*/}
            <MyTable/>
            <AppFooter/>
        </>

    )
}