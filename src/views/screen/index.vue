<template>
    <div class="screen-bg" ref="screenRef">
        <div class="line">
            <!-- 标题 -->
            <div class="head-box">
                <img src="@/assets/img/title_bg.png" class="bg-img" />
                <span class="title">哈尔滨华德学院核酸数据可视化大屏</span>
            </div>
            <!-- 总人数 -->
            <div class="w-p-63 middle m-t-20">
                <div class="total m-r-10">当前场次:</div>
                <div class="num-box total">
                    <span class="m-l-10">{{ title }}</span>
                </div>
            </div>
            <div class="w-p-63 middle m-t-20">
                <div class="total">总检测人数</div>
                <div class="num-box">
                    <div class="num-item m-r-20" v-for="(item, index) in count" :key="index">
                        <img src="@/assets/img/center_num.png" class="num-img inline" />
                        <span class="num">{{ item }}</span>
                    </div>
                </div>
            </div>
            <div class="data-content m-t-20">
                <chart-vue2 :total="total" ref="chart2"></chart-vue2>
                <chart-vue ref="chart"></chart-vue>
            </div>
            <div class="provider">{{ provider }}</div>
        </div>
    </div>
</template>
//
<script>
// @ is an alias to /src
import { getScreen } from '@/api/screen/index';
import chartVue from './modules/chart.vue';
import chartVue2 from './modules/chart2.vue';

export default {
    components: {
        chartVue,
        chartVue2,
    },
    data() {
        return {
            count: ['0', '0', '0', '0', '0'],
            total: 1000,
            provider: 'Powered by 软件工程系·创客实验室',
            title: '无',
            joinYesNum: 0,
            timer: null,
        };
    },
    methods: {
        // 数字转换
        parseNum(origin, res, countIndex) {
            for (let index = origin.length - 1; index > -1; index--) {
                res[countIndex] = origin[index];
                countIndex--;
            }
            // 更新补0
            let decrease = res.length - origin.length;
            for (let index = 0; index < decrease; index++) {
                res[index] = '0';
            }
        },
        // 5s更新一次数据
        updateScreen() {
            setInterval(() => {
                this.getScreenData();
            }, 5000);
        },
        getScreenData() {
            getScreen().then(res => {
                console.log(res);
                if (res.code == 20000) {
                    const { title } = res.data.roundData;
                    const { joinYesNum } = res.data;
                    this.joinYesNum = joinYesNum;
                    this.title = title;
                    let tempCount = joinYesNum.toString().split('');
                    let countIndex = this.count.length - 1;
                    this.parseNum(tempCount, this.count, countIndex);
                    this.$refs.chart.chart.render();
                    this.$refs.chart2.chart.render();
                } else {
                    this.$message.error(res.message);
                }
            });
        },
    },
    created() {
        this.updateScreen();
    },
};
</script>

<style scoped>
.provider {
    color: #fff;
    position: relative;
    bottom: 20px;
    font-size: 15px;
}
/* 网格 */
.screen-bg {
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent 10px, #f0f0f0 10px, #cdcdcd 12px, transparent 12px, transparent 69px, #f0f0f0 60px),
        -webkit-linear-gradient(left, transparent 10px, #f0f0f0 10px, #cdcdcd 12px, transparent 12px, transparent 69px, #f0f0f0 60px);
    margin: 0;
    -webkit-background-size: 20px 20px;
    -moz-background-size: 20px 20px;
    background-size: 20px 20px;
}
/* 标题背景 */
.bg-img {
    width: 100%;
    display: inline;
}
/* 背景色 */
.line {
    opacity: 0.89;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#1d2b56, #1d2b56, #1d2b56, #1d2b56, #1d2b56);
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.head-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 63%;
    font-size: 2vw;
    color: #0efcff;
}
.title {
    position: absolute;
}
.total {
    font-size: 30px;
    color: #0efcff;
    margin-left: 20%;
}

.middle {
    display: flex;
    align-items: center;
}
.num-img {
    width: 100%;
}
.num-box {
    margin-left: 60px;
    width: 50%;
    display: flex;
}
.num {
    font-size: 40px;
    color: #0efcff;
    position: absolute;
}
.num-item {
    position: relative;
    width: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.data-content {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    justify-content: space-between;
}
.s {
    padding: 40px 60px 0;
}
</style>
