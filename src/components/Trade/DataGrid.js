// import React from 'react';
// import './styleData.css'
//
// import ODataStore from 'devextreme/data/odata/store';
//
// import DataGrid, {
//     Column,
//     Grouping,
//     GroupPanel,
//     Pager,
//     Paging,
//     SearchPanel,
// } from 'devextreme-react/data-grid';
//
// import DiscountCell from './DiscountCell.js';
//
// const pageSizes = [10, 25, 50, 100];
//
// const dataSourceOptions = {
//     store: new ODataStore({
//         url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
//         key: 'Id',
//         beforeSend(request) {
//             const year = new Date().getFullYear() - 1;
//             request.params.startDate = `${year}-05-10`;
//             request.params.endDate = `${year}-5-15`;
//         },
//     }),
// };
//
// class MyDataGrid extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             collapsed: false,
//         };
//         this.onContentReady = this.onContentReady.bind(this);
//     }
//
//     render() {
//         return (
//             <DataGrid
//                 dataSource={dataSourceOptions}
//                 allowColumnReordering={true}
//                 rowAlternationEnabled={true}
//                 showBorders={true}
//                 width="100%"
//                 onContentReady={this.onContentReady}
//             >
//                 <GroupPanel visible={true} />
//                 <SearchPanel visible={true} highlightCaseSensitive={true} />
//                 <Grouping autoExpandAll={false} />
//
//                 <Column dataField="Product" groupIndex={0} />
//                 <Column
//                     dataField="Amount"
//                     caption="Sale Amount"
//                     dataType="number"
//                     format="currency"
//                     alignment="right"
//                 />
//                 <Column
//                     dataField="Discount"
//                     caption="Discount %"
//                     dataType="number"
//                     format="percent"
//                     alignment="right"
//                     allowGrouping={false}
//                     cellRender={DiscountCell}
//                     cssClass="bullet"
//                 />
//                 <Column dataField="SaleDate" dataType="date" />
//                 <Column dataField="Region" dataType="string" />
//                 <Column dataField="Sector" dataType="string" />
//                 <Column dataField="Channel" dataType="string" />
//                 <Column dataField="Customer" dataType="string" width={150} />
//
//                 <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
//                 <Paging defaultPageSize={10} />
//             </DataGrid>
//         );
//     }
//
//     onContentReady(e) {
//         if (!this.state.collapsed) {
//             e.component.expandRow(['EnviroCare']);
//             this.setState({
//                 collapsed: true,
//             });
//         }
//     }
// }
//
// export default MyDataGrid;
import React from 'react';
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel,
} from 'devextreme-react/data-grid';
import DiscountCell from './DiscountCell.js';
import ODataStore from 'devextreme/data/odata/store';
import {Lookup} from "devextreme-react";

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
        return (
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
                <Column
                    dataField="SaleDate"
                    dataType="date"
                />
                <Column
                    dataField="Region"
                    dataType="string"
                />
                <Column
                    dataField="Sector"
                    dataType="string"
                />
                <Column
                    dataField="Channel"
                    dataType="string"
                />
                <Column
                    dataField="Customer"
                    dataType="string"
                    width={150}
                >
                    <Lookup dataSource={this.getCustomerData()} />
                </Column>

                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
                <Paging defaultPageSize={10} />
            </DataGrid>
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

    getCustomerData() {
        // Здесь вы можете получить данные для выпадающего списка "Customer"
        // Например, из вашего локального массива данных или другого источника
        return ['Customer1', 'Customer2', 'Customer3'];
    }
}

export default MyDataGrid;

