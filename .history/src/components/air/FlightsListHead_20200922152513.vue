<template>
<div>
    <a-row class=""></a-row>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
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
