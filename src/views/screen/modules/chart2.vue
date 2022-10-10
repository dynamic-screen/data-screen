<template>
    <div class="content">
        <div class="title">核酸数据概览</div>
        <div ref="chartRef" class="chart"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
    name: 'chart2',
    props: {
        total: {
            type: Number,
        },
    },
    data() {
        return {
            dataSource: [
                { type: '已做', value: 90 },
                { type: '未做', value: 10 },
            ],
            chart: null,
        };
    },
    //
    mounted() {
        this.initG();
    },
    methods: {
        initG() {
            this.chart = new Chart({
                container: this.$refs.chartRef,
                // width: this.$refs.chartRef.offsetWidth,
                autoFit: true,
                height: this.$refs.chartRef.offsetHeight,
                padding: [20, 30, 60, 30],
            });
            this.chart.coordinate('theta', {
                radius: 0.65,
            });
            this.chart.data(this.dataSource);
            this.chart.tooltip({
                showTitle: false,
                showMarkers: false,
                itemTpl:
                    '<li class="g2-tooltip-list-item" style="font-size: 20px;height:20px;display:flex;align-items:center">' +
                    '<span class="g2-tooltip-marker" style="background-color:{color};width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
                    '{name}:' +
                    '<span class="g2-tooltip-value">{value}人</span>' +
                    '</li>',
                'g2-tooltip': {
                    position: 'absolute',
                    visibility: 'hidden',
                    border: '1px solid #017DFF',
                    backgroundColor: 'rgba(5,21,43,0.90)',
                    color: 'white',
                    padding: '0',
                    opacity: '1',
                    boxShadow: '0 0 10px 0 rgba(1,125,255,0.8)',
                    transition: 'top 200ms,left 200ms',
                }, // 设置 tooltip 的 css 样式
                'g2-tooltip-list': {
                    margin: '10px',
                },
                'g2-tooltip-marker': {
                    width: '0',
                    height: '0',
                },
            });
            this.chart.legend({
                position: 'right',
                itemName: {
                    style: {
                        fill: '#fff',
                        fontSize: 20,
                    },
                },
            });
            this.chart
                .interval()
                .position('value')
                .color('type')
                .label('value', {
                    layout: [{ type: 'pie-spider' }, { type: 'limit-in-plot', cfg: { action: 'ellipsis' /** 或 translate */ } }],
                    labelHeight: 30,
                    content: obj => `${obj.type} ${obj.value}人`,
                    labelLine: {
                        style: {
                            lineWidth: 2,
                        },
                    },
                    style: {
                        fontSize: 18,
                        fill: '#fff',
                    },
                })
                .adjust('stack');

            this.chart.interaction('element-active');

            this.chart.render();
        },
    },
};
</script>

<style scoped>
.content {
    background-image: url('../../../assets/img/main_top_bottom.png');
    background-repeat: no-repeat;
    background-size: 100% 50vh;
    width: 49%;
}
.title {
    color: #0efcff;
    margin: 1em 0 0 2em;
    font-size: 1.7em;
}
.chart {
    width: 90%;
    height: 55vh;
    position: relative;
    bottom: 3em;
}
</style>
