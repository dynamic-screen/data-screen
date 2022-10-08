<template>
    <div class="screen-bg" ref="screenRef">
        <div class="line">
            <div class="head-box">
                <img src="@/assets/img/title_bg.png" class="bg-img" />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    data() {
        return {};
    },
    created() {},
};
</script>

<style scoped>
/* 网格 */
.screen-bg {
    width: 100%;
    height: 100%;
    background: -webkit-linear-gradient(top, transparent 10px, #f0f0f0 10px, #cdcdcd 12px, transparent 12px, transparent 69px, #f0f0f0 60px),
        -webkit-linear-gradient(left, transparent 10px, #f0f0f0 10px, #cdcdcd 12px, transparent 12px, transparent 69px, #f0f0f0 60px);
    -webkit-background-size: 41px 41px;
    -moz-background-size: 41px 41px;
    background-size: 41px 41px;
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
    opacity: 0.7;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#000327, #000214, #000752, #000a77, #000752);
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
}
</style>
