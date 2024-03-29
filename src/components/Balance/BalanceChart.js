import React from 'react';
import Chart, { Series, CommonSeriesSettings, Legend, ArgumentAxis, ValueAxis } from 'devextreme-react/chart';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const chartStyles = {
    marginLeft: '10px', // Отступ слева
    marginRight: '10px', // Отступ справа

};

class BalanceChart extends React.Component {
    constructor(props) {
        super(props);

        // Ваши данные баланса (дата и значение)
    //     this.state = {
    //         balanceData: [
    //             { date: '26-11-2023', value: 392 },
    //             { date: '27-11-2023', value: 397 },
    //             { date: '28-11-2023', value: 405 },
    //         ],
    //     };
    // }
        this.state = {
            balanceData: [
                { date: '14-01-2024', value: 32.92 },
                { date: '15-01-2024', value: 31.85 },
                { date: '16-01-2024', value: 238.79 },
                { date: '17-01-2024', value: 146.7 },
                { date: '18-01-2024', value: 176.12 },
                { date: '19-01-2024', value: 23.86 },
                { date: '22-01-2024', value: 282.56},
                { date: '23-01-2024', value: 27.02},
                { date: '24-01-2024', value: 219.82},
                { date: '25-01-2024', value: 153.23},
                { date: '26-01-2024', value: 252.65},
                { date: '27-01-2024', value: 56.00},
                { date: '28-01-2024', value: 105.35},
                { date: '29-01-2024', value: 186.84},
                { date: '30-01-2024', value: 164.81},
                { date: '31-01-2024', value: 109.23}
            ],
        };
    }
    render() {
        const { balanceData } = this.state;

        return (
            <div style={chartStyles}>
                <Chart
                    // title="Balance Chart"
                    dataSource={balanceData}
                >
                    <CommonSeriesSettings
                        argumentField="date"
                        valueField="value"
                    />
                    <Series
                        argumentField="date"
                        valueField="value"
                        name="Balance"
                        type="line"
                        color="#08a652"
                    />
                    <ArgumentAxis
                        type="datetime"
                        label={{
                            format: 'dd/MM/yyyy',
                        }}
                    />
                    <ValueAxis />
                    <Legend visible={false} />
                </Chart>
            </div>


        );
    }
}

export default BalanceChart;
