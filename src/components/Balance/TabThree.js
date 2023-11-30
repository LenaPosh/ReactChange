import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css'; // Import your custom styles

const data = [
    { token: "WBNB", numberWithDollar: 280.00, numberWithPercentage: 69.00 },
    { token: "TrustFi", numberWithDollar: 60.00, numberWithPercentage: 14.80 },
    { token: "Friend3", numberWithDollar: 65.00, numberWithPercentage: 16.20 },
];

const TableComponent = () => {
    return (
        <div className="table-container">
            <DataGrid
                dataSource={data}
                showBorders={true}
                keyExpr="token"
            >
                <Column dataField="token" caption="Token" />
                <Column dataField="numberWithDollar" caption="Amount, $" />
                <Column dataField="numberWithPercentage" caption="Number, %" />
                <Pager allowedPageSizes={[5, 10, 20]} />
                <Paging defaultPageSize={5} />
            </DataGrid>
        </div>
    );
};

export default TableComponent;
