<template>
    <div class="content">
        <div id="c2"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
    name: 'chart2',
    data() {
        return {
            dataSource: [
                { type: '已做核酸人数', value: 90 },
                { type: '未做核酸人数', value: 10 },
            ],
        };
    },

    mounted() {
        this.initG();
    },
    methods: {
        initG() {
            const chart = new Chart({
                container: 'c2',
                autoFit: true,
                height: 500,
            });

            chart.coordinate('theta', {
                radius: 0.75,
            });

            chart.data(this.dataSource);

            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });

            chart
                .interval()
                .position('value')
                .color('type')
                .label('type*value', {
                    layout: [{ type: 'pie-spider' }, { type: 'limit-in-plot', cfg: { action: 'ellipsis' /** 或 translate */ } }],
                    labelHeight: 20,
                    content: obj => `${obj.type} (${obj.value})`,
                    labelLine: {
                        style: {
                            lineWidth: 0.5,
                        },
                    },
                })
                .adjust('stack');

            chart.interaction('element-active');

            chart.render();
        },
    },
};
</script>

<style scoped>
.content {
    background-image: url('../../../assets/img/main_top_bottom.png');
    background-repeat: no-repeat;
    background-size: 100% 60vh;
    width: 49%;
}
</style>
