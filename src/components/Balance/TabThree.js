import React from 'react';
import DataGrid, { Column, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './TableComponent.css';
const data = [
    {'token': 'WBNB',
        'numberWithDollar': 1700,
        'numberWithPercentage': 34.48},
    {'token': 'BabyDragon',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'MongBNB',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'AITECH',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'FomoFi',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'Dracarys',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'EtherconnectCoin',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'Grok',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'JELLY',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'AREON',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'PAID Network',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 3.64},
    {'token': 'PRIVA',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 3.64},
    {'token': 'PALM',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'ALGOMI',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'GPTCEO',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'AIBaby',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 3.64},
    {'token': 'GAIAEverworld',
        'numberWithDollar': 173.0,
        'numberWithPercentage': 3.64},
    {'token': 'BomberCoin',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64},
    {'token': 'MonPolyMoney',
        'numberWithDollar': 178.0,
        'numberWithPercentage': 3.64}
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

