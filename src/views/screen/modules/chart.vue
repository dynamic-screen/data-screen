<template>
    <div class="content">
        <div class="title">已做核酸人数实时统计</div>
        <div ref="chartRef" class="chart"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
    name: 'chart',
    props: {
        address: {
            type: Array,
            default: () => [],
        },
    },
    //
    data() {
        return {
            // dataSource: [
            //     { genre: '一公寓', sold: 100 },
            //     { genre: '二公寓', sold: 800 },
            //     { genre: '三公寓', sold: 920 },
            //     { genre: '四公寓', sold: 950 },
            //     { genre: '五公寓', sold: 750 },
            //     { genre: '六公寓', sold: 850 },
            //     { genre: '七公寓', sold: 850 },
            //     { genre: '八公寓', sold: 950 },
            //     { genre: '九公寓', sold: 850 },
            //     { genre: '十公寓', sold: 750 },
            //     { genre: '十一公寓', sold: 650 },
            //     { genre: '十二公寓', sold: 800 },
            //     { genre: '食堂', sold: 850 },
            //     // { genre: '一公寓1', sold: 100 },
            //     // { genre: '二公寓1', sold: 800 },
            //     // { genre: '三公寓1', sold: 920 },
            //     // { genre: '四公寓1', sold: 950 },
            //     // { genre: '五公寓1', sold: 750 },
            //     // { genre: '六公寓1', sold: 850 },
            //     // { genre: '七公寓1', sold: 850 },
            //     // { genre: '八公寓1', sold: 950 },
            //     // { genre: '九公寓1', sold: 850 },
            //     // { genre: '十公寓1', sold: 750 },
            //     // { genre: '十一公寓1', sold: 650 },
            //     // { genre: '十二公寓1', sold: 800 },
            // ],
            chart: null,
        };
    },
    mounted() {
        this.initG2();
    },
    methods: {
        // 更新图表上方的人数
        sign(arr) {
            arr.forEach(item => {
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
        },
        refresh() {
            this.chart.data(this.address);
            this.sign(this.address);
            this.chart.render();
        },
        initG2() {
            // Step 1: 创建 Chart 对象
            this.chart = new Chart({
                container: this.$refs.chartRef, // 指定图表容器 ID
                // width: this.$refs.chartRef.offsetWidth,
                autoFit: true,
                height: this.$refs.chartRef.offsetHeight,
                padding: [30, 30, 80, 30],
            });

            // Step 2: 载入数据源
            this.chart.data(this.address);
            this.chart.scale('sold', { alias: '已做核酸人数', nice: true });
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
                tickInterval: 1,
                label: {
                    style: {
                        fill: '#fff',
                    },
                    offset: 30, // 设置坐标轴文本 label 距离坐标轴线的距离
                    textStyle: {
                        textAlign: 'center', // 文本对齐方向，可取值为： start middle end
                        fill: '#404040', // 文本的颜色
                        fontSize: '12', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        rotate: 30,
                        textBaseline: 'top', // 文本基准线，可取 top middle bottom，默认为middle
                    }, // 文本样式，支持回调
                    autoRotate: true, // 是否需要自动旋转，默认为 true
                    rotate: 0.35,
                },
            });
            this.chart.tooltip({
                marker: false,
                showTitle: true,
                domStyles: {
                    'g2-tooltip-value': {
                        fontSize: '1em',
                    },
                    'g2-tooltip-name': {
                        fontSize: '1em',
                    },
                    'g2-tooltip-title': {
                        fontSize: '1.5em',
                    },
                    'g2-tooltip-list-item': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
                itemTpl:
                    '<li class="g2-tooltip-list-item" style="font-size: 20px;height:20px;display:flex;align-items:center">' +
                    '<div><span class="g2-tooltip-marker" style="background-color:{color};width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
                    '已做:' +
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
            this.chart.interval().position('genre*sold').color('genre');
            this.chart.interaction('element-visible-filter');
            this.chart.interaction('plot-mousewheel-scroll', {
                start: [{ trigger: 'plot:mousewheel', action: 'mousewheel-scroll:scroll', arg: { wheelDelta: 5 } }],
            });
            // 滚动条
            // this.chart.option('scrollbar', {
            //     type: 'horizontal',
            //     style: {
            //         trackColor: 'rgba(255, 255, 255, 0.699)',
            //         thumbColor: 'rgba(0, 0, 0, 0.4)',
            //     },
            //     categorySize: 80,
            // });
            this.sign(this.address);
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
    top: 1em;
}
</style>
