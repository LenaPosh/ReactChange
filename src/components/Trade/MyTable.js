import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './MyTable.css';

const MyTable = () => {
    const data = [
        {
            Datetime: '28.11.23 13:07:38',
            Active: 'TrustFi',
            BaseActive: 'WBNB',
            Amount: '$287.1',
            Profit: '$1.99',
            details: [
                { direction: 'BUY', quantity: '287.1', commission: '0.21', link: 'https://bscscan.com/tx/0x3d5b3b4e74efe27a02eb3743261ff9c5f121513c57f9e8bb4457e4f8c6994432' },
                { direction: 'SELL', quantity: '289,36', commission: '0.06', link: 'https://bscscan.com/tx/0xf0a0b19d3223e073c9647135104fc585c89c9f0ab46362c2bf4db16cd24bad53' },
            ],
        },
        {
            Datetime: '28.11.23 12:36:23',
            Active: 'Friend3',
            BaseActive: 'BUSD',
            Amount: '$566.07',
            Profit: '$11.66',
            details: [
                { direction: 'BUY', quantity: '566.07', commission: '0.5', link: 'https://bscscan.com/tx/0x6488b2a66f67885ddecb69f00b4a1359ce8b83e48b7909396f172be93a07a6e4' },
                { direction: 'SELL', quantity: '578.29', commission: '0.06', link: 'https://bscscan.com/tx/0x9568ba2b19c01dd7bf10e91304854090778043fb1365cde301723b393b4f3a46' },
            ],
        },
        // Add more data objects as needed
    ];

    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (index) => {
        const isRowExpanded = expandedRows.includes(index);
        setExpandedRows((prev) =>
            isRowExpanded ? prev.filter((rowIndex) => rowIndex !== index) : [...prev, index]
        );
    };

    return (
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
    );
};

export default MyTable;


