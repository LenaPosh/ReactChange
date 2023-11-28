import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import { customers } from './data.js';
import styles from './DataTable.module.css'; // Убедитесь, что путь к файлу CSS верный

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const DataTable = () => {
    return (
        <DataGrid
            dataSource={customers}
            keyExpr="ID"
            defaultColumns={columns}
            showBorders={true}
            rowAlternationEnabled={true}
            className={styles.dataGrid}
        />
    );
}

export default DataTable;

