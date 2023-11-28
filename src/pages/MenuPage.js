import {MenuTop} from "../components/MenuTop/MenuTop";

import {AppFooter} from "../components/Footer/Footer";
import AppTable from "../components/PNL/DataTable";

export const MenuPage = () => {
    return (

            <Screen>
                <MenuTop/>
                <h1>Таблица сделок</h1>
                <AppTable/>


                <AppFooter/>
            </Screen>


    )
}