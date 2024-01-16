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
    WBNB: 1601.0,
    BabyDragon: 190.0,
    MongBNB: 190.0,
    AITECH: 190.0,
    FomoFi: 190.0,
    Dracarys: 190.0,
    EtherconnectCoin: 190.0,
    Grok: 190.0,
    JELLY: 190.0,
    AREON: 190.0,
    PAID: 190.0,
    PRIVA: 190.0,
    PALM: 190.0,
    ALGOMI: 190.0,
    GPTCEO: 190.0,
    AIBaby: 190.0
};

const data = Object.keys(newData).map((token) => ({
    region: token,
    val: newData[token],
}));

const customizeTooltip = (arg) => {
    return {
        text: `${arg.argumentText}\n${arg.value.toFixed(2)}$ ${(arg.percent * 100).toFixed(2)}%`,
    };
};

const customizeLabel = (pointInfo) => {
    const isMobile = window.innerWidth <= 768;

    return `${pointInfo.argumentText}\n${pointInfo.value.toFixed(2)}$ ${(pointInfo.percent * 100).toFixed(2)}%`;
};

const ChartContainer = () => {
    const containerStyles = {
        width: '100%',
        height: '370px',
        marginTop: '-10px',
        backgroundColor: 'white',
        display: 'flex',
        marginBottom: '0',
        fontSize: '10px',
    };

    const mobileContainerStyles = {
        width: '100%',
        height: '300px',
        backgroundColor: 'white',
        marginLeft: '5px',
        marginRight: '5px',
        marginBottom: '0',
        fontSize: '10px',
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div style={isMobile ? mobileContainerStyles : containerStyles} className="chart-container">
            <PieChart dataSource={data} palette={['#e9cbfc', '#8fefbc', '#abd9f1']}>
                <Series argumentField="region" innerRadius={isMobile ? 0.1 : 0.2}>
                    <Label
                        visible={true}
                        position={isMobile ? 'outside' : 'columns'}
                        customizeText={customizeLabel}
                        font={{ size: isMobile ? 8 : 12 }}
                    />
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














