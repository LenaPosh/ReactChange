// import React from 'react';
// import DataGrid, {
//     Column,
//     GroupPanel,
//     Pager,
//     Paging,
//     MasterDetail,
// } from 'devextreme-react/data-grid';
//
// const data = [
//     {
//         DateTime: '28-11-2023 13:07:38',
//         Asset: 'TrustFi',
//         BaseAsset: 'WBNB',
//         Amount: 287.1,
//         Profit: 1.99,
//         details: [
//             { Direction: 'Buy', Amount: 287.1, Commission: 0.21, Link: 'https://bscscan.com/tx/0x3d5b3b4e74efe27a02eb3743261ff9c5f121513c57f9e8bb4457e4f8c6994432' },
//             { Direction: 'Sell', Amount: 1.0, Commission: 50, Link: 'Link 2' },
//         ],
//     },
//     {
//         DateTime: '2022-01-02 14:30',
//         Asset: 'ETH',
//         BaseAsset: 'USD',
//         Amount: 10,
//         Profit: 100,
//         details: [
//             { Direction: 'Buy', Amount: 2.0, Commission: 200, Link: 'Link 3' },
//             { Direction: 'Sell', Amount: 1.5, Commission: 100, Link: 'Link 4' },
//         ],
//     },
// ];
//
// const TableComponent = () => {
//     const gridStyles = {
//         marginTop: '100px', // Обновленный отступ сверху
//     };
//
//     return (
//         <div style={gridStyles}>
//             <h2>Data Table</h2>
//             <DataGrid
//                 dataSource={data}
//                 showBorders={true}
//                 keyExpr="DateTime"
//             >
//                 <GroupPanel visible={true} />
//                 <Column dataField="DateTime" dataType="datetime" />
//                 <Column dataField="Asset" />
//                 <Column dataField="BaseAsset" />
//                 <Column dataField="Amount" />
//                 <Column dataField="Profit" />
//                 <Pager allowedPageSizes={[5, 10, 20]} />
//                 <Paging defaultPageSize={5} />
//
//                 <MasterDetail
//                     enabled={true}
//                     component={(rowInfo) => renderDetail(rowInfo.data.details)}
//                 />
//             </DataGrid>
//         </div>
//     );
// };
//
// const renderDetail = (details) => {
//     return (
//         <DataGrid
//             dataSource={details}
//             showBorders={true}
//             keyExpr={(data, index) => index}
//         >
//             <Column dataField="Direction" />
//             <Column dataField="Amount" />
//             <Column dataField="Commission" />
//             <Column dataField="Link" />
//         </DataGrid>
//     );
// };
//
// export default TableComponent;


import React from 'react';
import DataGrid, {
    Column,
    GroupPanel,
    Pager,
    Paging,
    MasterDetail,
} from 'devextreme-react/data-grid';

const data = [
    {
        DateTime: '28-11-2023 13:07:38',
        Asset: 'TrustFi',
        BaseAsset: 'WBNB',
        Amount: 287.1,
        Profit: 1.99,
    },
    {
        DateTime: '28-11-2023 12:36:23',
        Asset: 'Friend3',
        BaseAsset: 'BUSD',
        Amount: 566.07,
        Profit: 11.66,
    },

];

const detailsData = [
    {
        Direction: 'BUY',
        Quantity: 287.1,
        Commission: 0.21,
        Link: 'https://bscscan.com/tx/0x3d5b3b4e74efe27a02eb3743261ff9c5f121513c57f9e8bb4457e4f8c6994432',
    },
    {
        Direction: 'SELL',
        Quantity: 289.36,
        Commission: 0.06,
        Link: 'https://bscscan.com/tx/0xf0a0b19d3223e073c9647135104fc585c89c9f0ab46362c2bf4db16cd24bad53',
    },

];

const TableComponent = () => {
    const gridStyles = {
        marginTop: '80px', // Обновленный отступ сверху
    };

    return (
        <div style={gridStyles}>
            {/*<h2>Data Table</h2>*/}
            <DataGrid
                dataSource={data}
                showBorders={true}
                keyExpr="DateTime"
            >
                <GroupPanel visible={true} />
                <Column dataField="DateTime" dataType="datetime" />
                <Column dataField="Asset" />
                <Column dataField="BaseAsset" />
                <Column dataField="Amount" />
                <Column dataField="Profit" />
                <Pager allowedPageSizes={[5, 10, 20]} />
                <Paging defaultPageSize={5} />

                <MasterDetail
                    enabled={true}
                    component={(rowInfo) => renderDetail(rowInfo.data)}
                />
            </DataGrid>
        </div>
    );
};

const renderDetail = (rowData) => {
    return (
        <DataGrid
            dataSource={detailsData}
            showBorders={true}
            keyExpr="Direction"
        >
            <Column dataField="Direction" />
            <Column dataField="Quantity" />
            <Column dataField="Commission" />
            <Column dataField="Link" />
        </DataGrid>
    );
};

export default TableComponent;





