import React from 'react';
import PieChart, {
    Legend,
    Series,
    Label,
    Export,
    Tooltip,
    Format,
} from 'devextreme-react/pie-chart';


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
        height: '600px',
        marginTop: '20px',
        backgroundColor: 'white'
    };

    return (
        <div style={containerStyles}>
            <PieChart dataSource={data} palette="Material" title="Распределение депозита по монетам">
                <Series argumentField="region">
                    <Label visible={true} position="columns" customizeText={customizeLabel} />
                </Series>
                <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
                    <Format type="millions" />
                </Tooltip>
                <Legend visible={false} />
                <Export enabled={true} />
            </PieChart>
        </div>
    );
};

export default ChartContainer;


















