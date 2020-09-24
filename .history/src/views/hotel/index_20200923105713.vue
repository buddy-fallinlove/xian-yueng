<template>
<div>
    <div id="container">
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    </div>
</div>
</template>

<script>
export default {
    name: "",
    props: {
        name: {
            type: String,
        },
    },
    components: {},
    data() {
        return {

        };
    },
    methods: {},
    mounted() {
        // eslint-disable-next-line no-undef
        const map = new AMap.Map('container', {
            resizeEnable: true,
            center: [104.069826, 30.665826],
            zoom: 13
        });
        //实时路况图层
        // eslint-disable-next-line no-undef
        const trafficLayer = new AMap.TileLayer.Traffic({
            zIndex: 10
        });
        map.add(trafficLayer); //添加图层到地图
    },
    watch: {},
    computed: {},
};
</script>

<style lang="scss" scoped>
#container {
    width: 420px;
    height: 260px;
}
</style>
