<template>
<div>
    <div id='container'></div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    onMounted
} from 'vue'
interface Data {}
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    setup(props, ctx: SetupContext) {

        //const data: Data = reactive<Data>({
        //})
        const autoGetPosition = () => {
            const map = new AMap.Map('container', {
                resizeEnable: true
            });
            AMap.plugin('AMap.Geolocation', () => {
                const geolocation = new AMap.Geolocation({

                    enableHighAccuracy: true,

                    timeout: 10000,

                    buttonOffset: new AMap.Pixel(10, 20),

                    zoomToAccuracy: true,

                    buttonPosition: 'RB'
                })

                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete)
                AMap.event.addListener(geolocation, 'error', onError)

                const onComplete(data) => {
                    // data是具体的定位信息
                }

                const onError(data) => {
                    // 定位出错
                }
            })
            onMounted(() => {
                autoGetPosition()
            })
        }
        return {
            ...toRefs(data),
            autoGetPosition,
        }
    },
})
</script>

<style lang="scss" scoped>
.container {
    width: 500px;
    height: 500px;
}
</style>
