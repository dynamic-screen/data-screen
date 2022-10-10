<template>
    <div class="content">
        <div class="title">核酸地点数据概览</div>
        <div ref="chartRef" class="chart"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
    name: 'chart',
    //
    data() {
        return {
            dataSource: [
                { genre: '一公寓', sold: 100 },
                { genre: '二公寓', sold: 800 },
                { genre: '三公寓', sold: 920 },
                { genre: '四公寓', sold: 950 },
                { genre: '五公寓', sold: 750 },
                { genre: '六公寓', sold: 850 },
                { genre: '七公寓', sold: 850 },
                { genre: '八公寓', sold: 950 },
                { genre: '九公寓', sold: 850 },
                { genre: '十公寓', sold: 750 },
                { genre: '十一公寓', sold: 650 },
                { genre: '十二公寓', sold: 800 },
                { genre: '食堂', sold: 850 },
                // { genre: '一1公寓', sold: 100 },
                // { genre: '二1公寓', sold: 800 },
                // { genre: '三1公寓', sold: 920 },
                // { genre: '四1公寓', sold: 950 },
                // { genre: '五1公寓', sold: 750 },
                // { genre: '六1公寓', sold: 850 },
                // { genre: '七1公寓', sold: 850 },
                // { genre: '八1公寓', sold: 950 },
                // { genre: '九1公寓', sold: 850 },
                // { genre: '十1公寓', sold: 750 },
                // { genre: '十1一公寓', sold: 650 },
                // { genre: '十1二公寓', sold: 800 },
                // { genre: '一2公寓', sold: 100 },
                // { genre: '二2公寓', sold: 800 },
                // { genre: '三2公寓', sold: 920 },
                // { genre: '四2公寓', sold: 950 },
                // { genre: '五2公寓', sold: 750 },
                // { genre: '六2公寓', sold: 850 },
                // { genre: '七2公寓', sold: 850 },
                // { genre: '八2公寓', sold: 950 },
                // { genre: '九2公寓', sold: 850 },
                // { genre: '十2公寓', sold: 750 },
                // { genre: '十2一公寓', sold: 650 },
                // { genre: '十2二公寓', sold: 800 },
            ],
            chart: null,
        };
    },
    mounted() {
        this.initG2();
    },
    methods: {
        initG2() {
            // Step 1: 创建 Chart 对象
            this.chart = new Chart({
                container: this.$refs.chartRef, // 指定图表容器 ID
                // width: this.$refs.chartRef.offsetWidth,
                autoFit: true,
                height: this.$refs.chartRef.offsetHeight,
                padding: [20, 30, 120, 30],
            });

            // Step 2: 载入数据源
            this.chart.data(this.dataSource);
            this.chart.scale('sold', { alias: '已做人数', nice: true });
            // Step 3: 创建图形语法，绘制柱状图
            this.chart.legend(false);
            this.chart.axis('sold', {
                label: {
                    style: {
                        fill: '#fff',
                    },
                    title: {
                        style: {
                            fontSize: 14,
                            fontFamily: 'Roboto-Bold',
                            textAlign: 'center',
                            fill: '#fff', // 文本颜色
                        },
                    },
                },
            });
            this.chart.axis('genre', {
                label: {
                    style: {
                        fill: '#fff',
                    },
                },
            });
            this.chart.tooltip({
                marker: false,
                showTitle: false,
                domStyles: {
                    'g2-tooltip-value': {
                        fontSize: '1.5em',
                    },
                    'g2-tooltip-name': {
                        fontSize: '1.5em',
                    },
                    'g2-tooltip-list-item': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            });
            this.chart.interval().position('genre*sold').color('genre');
            // this.chart.option('scrollbar', {
            //     type: 'horizontal',
            //     style: {
            //         trackColor: '#fff',
            //     },
            // });
            this.dataSource.forEach(item => {
                this.chart.annotation().text({
                    position: [item.genre, item.sold],
                    content: item.sold + '人',
                    style: {
                        textAlign: 'center',
                        fill: '#fff',
                        fontSize: 15,
                    },
                    offsetY: -6,
                });
            });
            // this.chart.interaction('element-visible-filter');
            // this.chart.interaction('plot-mousewheel-scroll', {
            //     start: [{ trigger: 'plot:mousewheel', action: 'mousewheel-scroll:scroll', arg: { wheelDelta: 5 } }],
            // });
            // Step 4: 渲染图表
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
    height: 40vh;
    margin: 0 auto;
    position: relative;
    top: 5em;
}
</style>
