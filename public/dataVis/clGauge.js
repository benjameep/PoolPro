var cl = document.getElementById('cl-G');
clGauge = echarts.init(cl);
var clOption = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            title: {
                show: true,
                offsetCenter: [0, -50],
                color: '#888',
                fontWeight: 'bold',
                fontSize: 36
            },
            clockwise: true,
            startAngle: 180,
            endAngle: 0,
            pointer: { show: true },
            axisTick: { show: true },
            splitLine: { show: false },
            name: "Cl Levels",
            type: 'gauge',
            min: 0,
            max: 4,
            detail: {
                offsetCenter: [5, 40],
                formatter: `{value}`
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, "#D81F31"],
                        [0.4, "#FF8C00"],
                        [0.6, "#5BABFF"],
                        [0.8, "#FF8C00"],
                        [1, "#D81F31"]
                    ]
                }
            },
            data: [{ value: 3, name: 'Cl' }]
        }
    ]
};

setInterval(function () {
    clOption.series[0].data[0].value = (Math.random() * 4).toFixed(1) - 0;
    clGauge.setOption(clOption, true);
},2000);