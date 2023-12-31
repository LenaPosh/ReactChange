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
                { date: '00-00-0000', value: 0 },
                { date: '00-00-0000', value: 0 },
                { date: '00-00-0000', value: 0 },
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
