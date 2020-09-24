<template>
<div></div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
//interface Data {
//}
export default defineComponent({
    name: "",
    props: {
        data: {
            type: Object,
            // 默认是空数组
            default: {},
        },
    },
    components: {},
    setup(props, ctx: SetupContext) {
        //const data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
