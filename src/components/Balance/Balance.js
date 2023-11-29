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
    BNB: 40,
    USDT: 20,
    BTC: 40,
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
        height: '400px',
        marginTop: '-10px',
        backgroundColor: 'white',
        display: 'flex',
        marginLeft: '5px',
        marginRight: '5px',
        marginBottom: '0',
    };

    const mobileContainerStyles = {
        width: '100%',
        height: '300px',
        backgroundColor: 'white',
        marginLeft: '5px',
        marginRight: '5px',
        marginBottom: '0',
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div style={isMobile ? mobileContainerStyles : containerStyles} className="chart-container">
            <PieChart dataSource={data} palette={['#e9cbfc', '#8fefbc', '#abd9f1']}>
                <Series argumentField="region" innerRadius={isMobile ? 0.1 : 0.2}>
                    <Label visible={true} position={isMobile ? 'outside' : 'columns'} customizeText={customizeLabel} />
                </Series>
                <Tooltip enabled={true} customizeTooltip={customizeTooltip}>
                    <Format type="millions" />
                </Tooltip>
                <Legend visible={!isMobile} />
            </PieChart>
        </div>
    );
};

export default ChartContainer;













