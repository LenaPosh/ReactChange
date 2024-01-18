import React from 'react';
import Chart, { Series, CommonSeriesSettings, Legend, ArgumentAxis, ValueAxis } from 'devextreme-react/chart';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const profitChartStyles = {
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '100px',

};

class ProfitChart extends React.Component {
    constructor(props) {
        super(props);

        // Ваши данные прибыли (дата и значение)
    //     this.state = {
    //         profitData: [
    //             { date: '26-11-2023', profit: 2 },
    //             { date: '27-11-2023', profit: 5 },
    //             { date: '28-11-2023', profit: 8 },
    //
    //         ],
    //     };
    // }

        this.state = {
            profitData: [
                { date: '14-01-2024', profit: 32.92 },
                { date: '15-01-2024', profit: 31.85 },
                { date: '16-01-2024', profit: 238.79 },
                { date: '17-01-2024', profit: 133.65 },

            ],
        };
    }

    render() {
        const { profitData } = this.state;

        return (
            <div style={profitChartStyles} >
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
