import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './MyTable.css';

const MyTable = () => {
    const data = [
        {
            Datetime: '16.01.24 06:48:48',
            Active: 'BabyDragon',
            BaseActive: 'WBNB',
            Amount: '$359.69',
            Profit: '$0.79',
            details: [
                { direction: 'BUY', quantity: '359.69', commission: '0.12', link: 'https://bscscan.com/tx/0x7a3ee2e8fde223ef8c5c6704930beb9e253275d05b8337e1745c1b0d5bd49f42' },
                { direction: 'SELL', quantity: '360.69', commission: '0.09', link: 'https://bscscan.com/tx/0x0dd8b7a520ab44490122f2a79312327f6a0f86ae2e4c439ca350594621f66571' },
            ],
        },
        {
            Datetime: '16.01.24 05:25:08',
            Active: 'MongBNB',
            BaseActive: 'WBNB',
            Amount: '$424.60',
            Profit: '$1.27',
            details: [
                { direction: 'BUY', quantity: '424.60', commission: '0.15', link: 'https://bscscan.com/tx/0x22471d40166152d65be3115bc67128175de799057633e26ec0abb83946b00bc0' },
                { direction: 'SELL', quantity: '426.11', commission: '0.09', link: 'https://bscscan.com/tx/0x8a4a171019fe1aee88e615bbc20d92e3114176edb0f3cbdca3bc061cc52b88f2' },
            ],
        },
        {
            Datetime: '16.01.24 03:24:33',
            Active: 'AITECH',
            BaseActive: 'WBNB',
            Amount: '$3403.14',
            Profit: '$94.05',
            details: [
                { direction: 'BUY', quantity: '3403.14', commission: '0.31', link: 'https://bscscan.com/tx/0x5656690562b147491b3e4965fe535fda2b514b8a57f3738ea06324d1d9c233b7' },
                { direction: 'SELL', quantity: '3497.79', commission: '0.29', link: 'https://bscscan.com/tx/0xaa4fe1308dbcf6c52e15a51103ea4180366fb73cb883dfbb593bb8a54e3fb10e' },
            ],
        },
        {
            Datetime: '16.01.24 12:08:04',
            Active: 'FomoFi',
            BaseActive: 'WBNB',
            Amount: '$768.14',
            Profit: '$7.77',
            details: [
                { direction: 'BUY', quantity: '768.14', commission: '0.87', link: 'https://bscscan.com/tx/0x8aa9a698155fc0ccd8c87ae2f6a568fa27d5fcdec91f95ad151eafa2b9f38c6b' },
                { direction: 'SELL', quantity: '776.96', commission: '0.18', link: 'https://bscscan.com/tx/0x56bb56956d248a5b5b84d6feaa36c0b914d0fc4d1fb760142ff4a89a8b62fc46' },
            ],
        },
        {
            Datetime: '15.01.24 11:12:32',
            Active: 'MongBNB',
            BaseActive: 'WBNB',
            Amount: '$130.98',
            Profit: '$1.08',
            details: [
                { direction: 'BUY', quantity: '130.98', commission: '0.14', link: 'https://bscscan.com/tx/0x85cf3d4f493bf5bcbe707a80249a6938e5e351f12ce2a2b2acf85a2c56a23024' },
                { direction: 'SELL', quantity: '132.29', commission: '0.09', link: 'https://bscscan.com/tx/0x9c1028fa213e2f174b81bd8d2d7fe6452c4f0122936ff4f34fa8267db36cbffb' },
            ],
        },
        {
            Datetime: '15.01.24 08:25:58',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$781.57',
            Profit: '$7.72',
            details: [
                { direction: 'BUY', quantity: '781.57', commission: '0.84', link: 'https://bscscan.com/tx/0x33b5be1bc1e498de060c177567e06e39d0977e3c2072954bdeac3a88848d42ea' },
                { direction: 'SELL', quantity: '790.22', commission: '0.09', link: 'https://bscscan.com/tx/0x50162c34ab85f283034b56a7b706ada758b743bf4a6fbbc800da63798bd1542c' },
            ],
        },
        {
            Datetime: '15.01.24 07:07:20',
            Active: 'EtherconnectCoin',
            BaseActive: 'WBNB',
            Amount: '$242.08',
            Profit: '$2.09',
            details: [
                { direction: 'BUY', quantity: '242.08', commission: '0.27', link: 'https://bscscan.com/tx/0x1395ff317c8acf17282aedd8a2d1e6e1c1372635280da2ec7050e6bda85b9e57' },
                { direction: 'SELL', quantity: '244.53', commission: '0.09', link: 'https://bscscan.com/tx/0x64532dd97971993d99b5e4e461514bee8bee98aeb3b4b1c3d21aff335d877a5d' },
            ],
        },
        {
            Datetime: '15.01.24 06:56:33',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$373.31',
            Profit: '$1.06',
            details: [
                { direction: 'BUY', quantity: '373.31', commission: '5.15', link: 'https://bscscan.com/tx/0xaba1bb0f396f79025a81f40f16e4996eb1f3e0bef3ddc17528c9ef57df1ca148' },
                { direction: 'SELL', quantity: '379.61', commission: '0.09', link: 'https://bscscan.com/tx/0x092e9a1453d7ce3f6febcc604b7ace9118b8e4a53f40b0f5d11bd526a048bfa0' },
            ],
        },
        {
            Datetime: '15.01.24 02:28:15',
            Active: 'Grok',
            BaseActive: 'WBNB',
            Amount: '$947.20',
            Profit: '$1.29',
            details: [
                { direction: 'BUY', quantity: '947.20', commission: '3.33', link: 'https://bscscan.com/tx/0xd54303c28cd9cc66b6b03e9e9d86135b4b8f0f8238bb4ee508c2db10d1ab0c47' },
                { direction: 'SELL', quantity: '951.91', commission: '0.09', link: 'https://bscscan.com/tx/0x06fe8de584a733052632b39ebf43ff6ee6754d00c83637e50b8b0b89959ef3ef' },
            ],
        },
        {
            Datetime: '15.01.24 01:19:27',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$917.05',
            Profit: '$14.69',
            details: [
                { direction: 'BUY', quantity: '917.05', commission: '1.54', link: 'https://bscscan.com/tx/0x378898cbec2068f0e013ba5ba195ef23d6ac0f15f2e70ae36a02c3eba30f6f68' },
                { direction: 'SELL', quantity: '933.38', commission: '0.10', link: 'https://bscscan.com/tx/0x12f88b0535b275fbe15d000ecd1cb270894be6dbe8d4d44fcb0c98d87ed7ca36' },
            ],
        },
        {
            Datetime: '15.01.24 05:30:06',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$250.29',
            Profit: '$1.47',
            details: [
                { direction: 'BUY', quantity: '250.29', commission: '0.21', link: 'https://bscscan.com/tx/0x5acc6677eb305943991359df9ca8393f12da105d6b0dcbc84b07bb4a33043dc6' },
                { direction: 'SELL', quantity: '252.06', commission: '0.09', link: 'https://bscscan.com/tx/0x44fcc33c85ffeb213afbc94fd0e7d670f82744d9ce3bd94591a53c1e1ffa1ac1' },
            ],
        },
        {
            Datetime: '15.01.24 03:52:04',
            Active: 'BabyDragon',
            BaseActive: 'WBNB',
            Amount: '$461.30',
            Profit: '$2.45',
            details: [
                { direction: 'BUY', quantity: '461.30', commission: '1.97', link: 'https://bscscan.com/tx/0x28e48d6a2d9b738a9c07200bf4222903948eca94ad7ded47219da6616109aac7' },
                { direction: 'SELL', quantity: '463.75', commission: '0.23', link: 'https://bscscan.com/tx/0xe6efd6e63324b5d807c65558ddf4d93fea3c6b5363e35c3c948328a7aad75328' },
            ],
        },
        {
            Datetime: '14.01.24 08:37:42',
            Active: 'PAID Network',
            BaseActive: 'WBNB',
            Amount: '$925.11',
            Profit: '$0.36',
            details: [
                { direction: 'BUY', quantity: '925.11', commission: '2.22', link: 'https://bscscan.com/tx/0xdbff13ff7c2f312635f5d47309c8e06d1927c40680ba2fa8889f79c94e82c26e' },
                { direction: 'SELL', quantity: '929.18', commission: '1.49', link: 'https://bscscan.com/tx/0xb169876597bb09e53ee5d98bdbf6ca234397269999c370c8982946221b6159af' },
            ],
        },
        {
            Datetime: '14.01.24 08:15:03',
            Active: 'Etherconnect Coin',
            BaseActive: 'WBNB',
            Amount: '$265.94',
            Profit: '$11.36',
            details: [
                { direction: 'BUY', quantity: '265.94', commission: '1.19', link: 'https://bscscan.com/tx/0xcc3ac38af03cee0d053e1dc8d2f290c6b20f60f89e136e4ee218f9982fcff114' },
                { direction: 'SELL', quantity: '278.58', commission: '0.09', link: 'https://bscscan.com/tx/0xd9a09216ce85232dc01b346154d1b82812bbc8d15e3520b4520bfb89147e0255' },
            ],
        },
        {
            Datetime: '14.01.24 05:59:24',
            Active: 'PRIVA',
            BaseActive: 'WBNB',
            Amount: '$674.57',
            Profit: '$1.95',
            details: [
                { direction: 'BUY', quantity: '674.57', commission: '0.25', link: 'https://bscscan.com/tx/0xb988524afe5bf090bb2ea433bb01d3ee6132d139914f17e94c8cb1496895ec74' },
                { direction: 'SELL', quantity: '676.86', commission: '0.09', link: 'https://bscscan.com/tx/0xefa3b147873c51cb9f1b71a7885d96ce1a27f9d6eeef1ae795dd966ad304b6eb' },
            ],
        },
        {
            Datetime: '14.01.24 05:19:52',
            Active: 'JELLY',
            BaseActive: 'WBNB',
            Amount: '$186.81',
            Profit: '$1.77',
            details: [
                { direction: 'BUY', quantity: '186.81', commission: '0.25', link: 'https://bscscan.com/tx/0x8de6ab1c6f713f0b526bdcb21f60f72ba54f2427d0ad7c47f1680de17b455520' },
                { direction: 'SELL', quantity: '188.93', commission: '0.10', link: 'https://bscscan.com/tx/0xf11ba78c64b335312d720f20141c0a499d631df9630a2cd54a65c2910c0f7751' },
            ],
        },
        {
            Datetime: '14.01.24 04:52:08',
            Active: 'Dracarys',
            BaseActive: 'WBNB',
            Amount: '$428.75',
            Profit: '$4.32',
            details: [
                { direction: 'BUY', quantity: '428.75', commission: '0.5', link: 'https://bscscan.com/tx/0xadbbea4dabca067afa055091f45321e93b51ab5db7ce3336a835789c41135092' },
                { direction: 'SELL', quantity: '433.66', commission: '0.09', link: 'https://bscscan.com/tx/0x43a6663560cbaa71f36c767b77f905b377eb1674e6f603d418b9a7135a6dac81' },
            ],
        },
        {
            Datetime: '14.01.24 03:29:23',
            Active: 'PALM',
            BaseActive: 'WBNB',
            Amount: '$567.86',
            Profit: '$9.13',
            details: [
                { direction: 'BUY', quantity: '567.86', commission: '0.97', link: 'https://bscscan.com/tx/0xbd6cadfccf04e42c163271a8452ce98dcdcd2dcfadc688233c6dfe5712ff1df1' },
                { direction: 'SELL', quantity: '578.05', commission: '0.09', link: 'https://bscscan.com/tx/0x3f86deb6bca91adeb6d5870e0d2c18e77739572accef5db8ae0e57d434693ff5' },
            ],
        },
        {
            Datetime: '14.01.24 11:45:16',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$142.21',
            Profit: '$3.61',
            details: [
                { direction: 'BUY', quantity: '142.21', commission: '3.76', link: 'https://bscscan.com/tx/0x718585af1ec8f9b7fe0085dfe7242cd32f519230be6f98886c6496df22807cbd' },
                { direction: 'SELL', quantity: '149.67', commission: '0.09', link: 'https://bscscan.com/tx/0x56ae5a8abb3a2ae45a170b445609559677d4bf7bb9f653e0ad6490326261611a' },
            ],
        },
        {
            Datetime: '14.01.24 11:28:55',
            Active: 'AREON',
            BaseActive: 'WBNB',
            Amount: '$156.42',
            Profit: '$0.42',
            details: [
                { direction: 'BUY', quantity: '156.42', commission: '0.08', link: 'https://bscscan.com/tx/0xde278e1108a4caccd8cde33b947258ebb5d72fb9cb396b308fc4daeee8db8914' },
                { direction: 'SELL', quantity: '157.01', commission: '0.09', link: 'https://bscscan.com/tx/0x58bb66ad4f463bc8fae04f3fa676f4dfc762aaefd402e753e9c0f1dcb76076c6' },
            ],
        },
    ];

    // const data = [
    //     {
    //         Datetime: '00.00.00 00:00:00',
    //         Active: '-',
    //         BaseActive: '-',
    //         Amount: '$0.00',
    //         Profit: '$0.00',
    //         details: [
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //         ],
    //     },
    //     {
    //         Datetime: '00.00.00 00:00:00',
    //         Active: '-',
    //         BaseActive: '-',
    //         Amount: '$0.00',
    //         Profit: '$0.00',
    //         details: [
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //             { direction: '-', quantity: '000.0', commission: '0.00', link: '000' },
    //         ],
    //     },
    // ];

    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (index) => {
        const isRowExpanded = expandedRows.includes(index);
        setExpandedRows((prev) =>
            isRowExpanded ? prev.filter((rowIndex) => rowIndex !== index) : [...prev, index]
        );
    };

    return (
        <div className="scrollable-table">
            <table className="my-table">
                <thead>
                <tr>
                    <th>Date and Time</th>
                    <th>Active</th>
                    <th>Base Active</th>
                    <th>Amount</th>
                    <th>Profit</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr
                            className={`main-row ${expandedRows.includes(index) ? 'expanded' : ''}`}
                            onClick={() => toggleRow(index)}
                        >
                            <td>{row.Datetime}</td>
                            <td>{row.Active}</td>
                            <td>{row.BaseActive}</td>
                            <td>{row.Amount}</td>
                            <td>{row.Profit}</td>
                            <td>
                                <div className="arrow">
                                    <FontAwesomeIcon icon={expandedRows.includes(index) ? faAngleUp : faAngleDown} />
                                </div>
                            </td>
                        </tr>
                        {expandedRows.includes(index) &&
                            row.details.map((detail, detailIndex) => (
                                <tr key={`${index}-${detailIndex}`} className="detail-row">
                                    <td>Direction: {detail.direction}</td>
                                    <td>Quantity: {detail.quantity}</td>
                                    <td>Commission: {detail.commission}</td>
                                    <td>
                                        <a
                                            href={detail.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Details
                                        </a>
                                    </td>
                                </tr>
                            ))}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default MyTable;


