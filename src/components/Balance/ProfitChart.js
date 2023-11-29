import React from 'react';
import Chart, { Series, CommonSeriesSettings, Legend, ArgumentAxis, ValueAxis } from 'devextreme-react/chart';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const profitChartStyles = {
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '50px',

};

class ProfitChart extends React.Component {
    constructor(props) {
        super(props);

        // Ваши данные прибыли (дата и значение)
        this.state = {
            profitData: [
                { date: '26-11-2023', profit: 2 },
                { date: '27-11-2023', profit: 5 },
                { date: '28-11-2023', profit: 8 },

            ],
        };
    }

    render() {
        const { profitData } = this.state;

        return (
            <div style={profitChartStyles}>
                <Chart dataSource={profitData}>
                    <CommonSeriesSettings argumentField="date" valueField="profit" />
                    <Series type="bar" color="#08a652" />
                    <ArgumentAxis type="datetime" label={{ format: 'dd/MM/yyyy' }} />
                    <ValueAxis />
                    <Legend visible={false} />
                </Chart>
            </div>
        );
    }
}

export default ProfitChart;
