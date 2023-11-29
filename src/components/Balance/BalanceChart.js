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
        this.state = {
            balanceData: [
                { date: '2023-11-01', value: 1000 },
                { date: '2023-11-02', value: 1020 },
                { date: '2023-11-03', value: 1050 },
                { date: '2023-11-04', value: 1070 },
                // Добавьте свои данные
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
