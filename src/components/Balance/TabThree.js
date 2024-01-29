import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css';
const data = [
    {'token': 'WBNB',
        'numberWithDollar': 1700,
        'numberWithPercentage': 27.29},
    {'token': 'BabyDragon',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'MongBNB',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'AITECH',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'FomoFi',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'Dracarys',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'EtherconnectCoin',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'Grok',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'JELLY',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'AREON',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'PAID Network',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 2.86},
    {'token': 'PRIVA',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 2.86},
    {'token': 'PALM',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'ALGOMI',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'GPTCEO',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'AIBaby',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'GAIAEverworld',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'BomberCoin',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'TRUMP',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 2.86},
    {'token': 'TRICERATOPS',
        'numberWithDollar': 184.63,
        'numberWithPercentage': 3.15},
    {'token': 'Spintop',
        'numberWithDollar': 184.63,
        'numberWithPercentage': 3.15},
    {'token': 'MonPolyMoney',
        'numberWithDollar': 184.63,
        'numberWithPercentage': 3.15},
    {'token': 'longzl',
        'numberWithDollar': 153.23,
        'numberWithPercentage': 2.46},
    {'token': 'Hydra',
        'numberWithDollar': 126.33,
        'numberWithPercentage': 2.03},
    {'token': 'DOGEMOON',
        'numberWithDollar': 126.33,
        'numberWithPercentage': 2.03},
    {'token': 'MrwebFinance',
        'numberWithDollar': 182.3,
        'numberWithPercentage': 2.93},
    {'token': 'PAIDNetwork',
        'numberWithDollar': 182.3,
        'numberWithPercentage': 2.93},
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

