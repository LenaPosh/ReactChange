import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css';
const data = [
    {'token': 'WBNB',
        'numberWithDollar': 2100,
        'numberWithPercentage': 26.65},
    {'token': 'BabyDragon',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'MongBNB',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'AITECH',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'FomoFi',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'Dracarys',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'EtherconnectCoin',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'Grok',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'JELLY',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'AREON',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'PAID Network',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'PRIVA',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'PALM',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'ALGOMI',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'GPTCEO',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'AIBaby',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'GAIAEverworld',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'BomberCoin',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'TRUMP',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'TRICERATOPS',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'Spintop',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'MonPolyMoney',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'longzl',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'Hydra',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'DOGEMOON',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'MrwebFinance',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
    {'token': 'PAIDNetwork',
        'numberWithDollar': 222.36,
        'numberWithPercentage': 2.82},
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

