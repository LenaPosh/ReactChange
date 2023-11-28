import {MenuTop} from "../components/MenuTop/MenuTop";
// import YourComponent from "../components/Balance/response";
import DataTable from '../components/PNL/DataTable';
import {AppFooter} from "../components/Footer/Footer";

export const MenuPage = () => {
    return (

            <Screen>
                <MenuTop/>
                <h1>Таблица сделок</h1>
                <DataTable/>

                <AppFooter/>
            </Screen>


    )
}