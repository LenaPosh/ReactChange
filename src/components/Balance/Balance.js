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
    WBNB: 1606.0,
    BabyDragon: 173.0,
    MongBNB: 173.0,
    AITECH: 173.0,
    FomoFi: 173.0,
    Dracarys: 173.0,
    EtherconnectCoin: 173.0,
    Grok: 173.0,
    JELLY: 173.0,
    AREON: 173.0,
    PAID: 173.0,
    PRIVA: 173.0,
    PALM: 173.0,
    ALGOMI: 173.0,
    GPTCEO: 173.0,
    AIBaby: 173.0,
    GAIAEverworld: 173.0,
    BomberCoin: 173.0,
    MonPolyMoney: 173.0,


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














