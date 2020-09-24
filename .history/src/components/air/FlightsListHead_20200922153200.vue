<template>
<div>
    <a-row class="flight-title">
        <a-col :span="5">
            航空信息
        </a-col>
        <a-col :span="14">
            <a-row type="flex" justify="space-between">
                <a-col :span="12">
                    起飞时间
                </a-col>
                <a-col :span="12">
                    到达时间
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="5">
            价格
        </a-col>
    </a-row>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactive,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toRefs,
    SetupContext
} from 'vue'
// interface Data {
// }
export default defineComponent({
    name: '',
    props: {},
    components: {

    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {

        //const data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
        }
    },
})
</script>

<style lang="scss" scoped>
.flight-title {
    padding: 0 15px;
    border: 1px #ddd solid;
    background: #f6f6f6;
    height: 38px;
    line-height: 38px;
    color: #666;
    font-size: 12px;
    margin-bottom: 10px;

    >div {
        text-align: center
    }
}
</style>
