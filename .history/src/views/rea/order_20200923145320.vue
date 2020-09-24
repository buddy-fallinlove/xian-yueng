<template>
<div>

</div>
</template>

<script lang="ts">
// 引入router
import {
    useRouter,
    useRoute
} from "vue-router";
import router from "@/router";
import api from "@/http/api";
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref
} from "vue";
import {
    FormItem,
    Rules,
    RuleItem
} from "@/views/order/type";
interface Data {}
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

<style scoped lang='scss'>

</style>
