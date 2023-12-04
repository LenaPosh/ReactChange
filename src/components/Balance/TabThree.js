import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css'; // Import your custom styles

const data = [
    { token: "WBNB", numberWithDollar: 2000.00, numberWithPercentage: 57.48 },
    { token: "TrustFi", numberWithDollar: 300.00, numberWithPercentage: 8.54 },
    { token: "Friend3", numberWithDollar: 300.00, numberWithPercentage: 8.54 },
    { token: "EOS", numberWithDollar: 300.00, numberWithPercentage: 8.54 },
    { token: "Cake", numberWithDollar: 300.00, numberWithPercentage: 8.54 },
    { token: "STG", numberWithDollar: 300.00, numberWithPercentage: 8.54 },
];

const TableComponent = () => {
    return (
        <div className="table-container" style={{ marginBottom: '100px' }}>
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

