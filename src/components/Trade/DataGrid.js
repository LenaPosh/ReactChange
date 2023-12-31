import React from 'react';
import './styleData.css'

import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel,
} from 'devextreme-react/data-grid';

import DiscountCell from './DiscountCell.js';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
    store: new ODataStore({
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
            const year = new Date().getFullYear() - 1;
            request.params.startDate = `${year}-05-10`;
            request.params.endDate = `${year}-5-15`;
        },
    }),
};

class MyDataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.onContentReady = this.onContentReady.bind(this);
    }

    render() {
        const gridStyles = {
            marginTop: '100px', // Задайте нужный отступ сверху
        };
        return (
            <div style={gridStyles}>
                <DataGrid
                    dataSource={dataSourceOptions}
                    allowColumnReordering={true}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    width="100%"
                    onContentReady={this.onContentReady}
                >
                    <GroupPanel visible={true} />
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Grouping autoExpandAll={false} />

                    <Column dataField="Product" groupIndex={0} />
                    <Column
                        dataField="Amount"
                        caption="Sale Amount"
                        dataType="number"
                        format="currency"
                        alignment="right"
                    />
                    <Column
                        dataField="Discount"
                        caption="Discount %"
                        dataType="number"
                        format="percent"
                        alignment="right"
                        allowGrouping={false}
                        cellRender={DiscountCell}
                        cssClass="bullet"
                    />
                    <Column dataField="SaleDate" dataType="date" />
                    <Column dataField="Region" dataType="string" />
                    <Column dataField="Sector" dataType="string" />
                    <Column dataField="Channel" dataType="string" />
                    <Column dataField="Customer" dataType="string" width={150} />

                    <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                    <Paging defaultPageSize={10} />
                </DataGrid>
            </div>

        );
    }

    onContentReady(e) {
        if (!this.state.collapsed) {
            e.component.expandRow(['EnviroCare']);
            this.setState({
                collapsed: true,
            });
        }
    }
}

export default MyDataGrid;
// import React from 'react';
// import DataGrid from 'devextreme-react/data-grid';
// import { customers } from './data.js';
// import 'devextreme/dist/css/dx.common.css';
// // import 'devextreme/dist/css/dx.light.css';
// import 'devextreme/dist/css/dx.material.blue.light.css';
// import './styleData.css'; // Импорт файлов стилей
//
// const columns = [
//     { dataField: 'ID', width: 50 },
//     { dataField: 'CompanyName', width: 90 },
//     { dataField: 'Active', width: 80 },
//     { dataField: 'Quantity', width: 80 },
//     { dataField: 'AmountInDollars', width: 100 },
//     { dataField: 'Percentage', width: 70 },
// ];
//
//
// class MyGrid extends React.Component {
//     render() {
//         const gridStyles = {
//             marginTop: '140px', marginLeft: '1px' // Задайте нужный отступ сверху
//         };
//         return (
//             <div className="my-grid-wrapper" style={gridStyles}>
//                 <DataGrid
//                     dataSource={customers}
//                     keyExpr="ID"
//                     defaultColumns={columns}
//                     showBorders={true}
//                 />
//             </div>
//         );
//     }
// }
//
// export default MyGrid;




