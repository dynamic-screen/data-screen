<template>
    <div class="content">
        <div id="c1"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2';
export default {
    name: 'chart',

    data() {
        return {
            dataSource: [
                { genre: '一公寓', sold: 1000 },
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
            ],
        };
    },
    mounted() {
        this.initG2();
    },
    methods: {
        initG2() {
            // Step 1: 创建 Chart 对象
            const chart = new Chart({
                container: 'c1', // 指定图表容器 ID
                width: 740, // 指定图表宽度
                height: 500, // 指定图表高度
            });

            // Step 2: 载入数据源
            chart.data(this.dataSource);
            chart.scale('sold', {
                ticks: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                alias: '未作核酸人数',
            });
            // Step 3: 创建图形语法，绘制柱状图
            chart
                .interval()
                .position('genre*sold')
                .color('sold', value => {
                    if (value > 800) {
                        return 'blue';
                    }
                    return 'green';
                });

            // Step 4: 渲染图表
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
