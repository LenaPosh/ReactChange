import React from 'react';
import PieChart, {
    Legend,
    Series,
    Label,
    Tooltip,
    Format,
} from 'devextreme-react/pie-chart';
import './style.css';

const newData = {
    "BNB": 40,
    "USDT": 20,
    "BTC": 40
};

const data = Object.keys(newData).map((token) => ({
    region: token,
    val: newData[token],
}));

const customizeTooltip = (arg) => {
    return {
        text: `${arg.argumentText}\n${(arg.percent * 100).toFixed(2)}%`,
    };
};

const customizeLabel = (pointInfo) => {
    return `${pointInfo.argumentText}\n${(pointInfo.percent * 100).toFixed(2)}%`;
};

const ChartContainer = () => {
    const containerStyles = {
        width: '100%',
        height: '500px',
        marginTop: '-90px',
        backgroundColor: 'white',
        display: 'flex',
        marginLeft: '30px',
        marginBottom: '0',
    };

    return (
        <div style={containerStyles} className="chart-container">
            <PieChart dataSource={data} palette="Material">
                <Series argumentField="region">
                    <Label visible={true} position="columns" customizeText={customizeLabel} />
                </Series>
                <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
                    <Format type="millions" />
                </Tooltip>
                <Legend visible={false} />
            </PieChart>
        </div>
    );
};

export default ChartContainer;
















