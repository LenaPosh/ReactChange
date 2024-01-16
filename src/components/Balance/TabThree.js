import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css';
const data = [
    {'token': 'WBNB',
        'numberWithDollar': 1601.0,
        'numberWithPercentage': 35.95},
    {'token': 'BabyDragon',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'MongBNB',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'AITECH',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'FomoFi',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'Dracarys',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'EtherconnectCoin',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'Grok',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'JELLY',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'AREON',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'PAID Network',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'PRIVA',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'PALM',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'ALGOMI',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'GPTCEO',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27},
    {'token': 'AIBaby',
        'numberWithDollar': 190.0,
        'numberWithPercentage': 4.27}
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

