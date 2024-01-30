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
    WBNB: 2100.0,
    BabyDragon: 222.36,
    MongBNB: 222.36,
    AITECH: 222.36,
    FomoFi: 222.36,
    Dracarys: 222.36,
    EtherconnectCoin: 222.36,
    Grok: 222.36,
    JELLY: 222.36,
    AREON: 222.36,
    PAID: 222.36,
    PRIVA: 222.36,
    PALM: 222.36,
    ALGOMI: 222.36,
    GPTCEO: 222.36,
    AIBaby: 222.36,
    GAIAEverworld: 222.36,
    BomberCoin: 222.36,
    MonPolyMoney: 222.36,
    TRUMP: 222.36,
    TRICERATOPS: 222.36,
    Spintop: 222.36,
    longzl: 222.36,
    Hydra: 222.36,
    DOGEMOON: 222.36,
    MrwebFinance: 222.36,
    PAIDNetwork: 222.36



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














