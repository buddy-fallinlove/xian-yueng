<template>
<div></div>
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
} from "./type";
interface Data {
    item: object;
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        // router 跳转路由定义
        const route = useRoute();
        const data: Data = reactive < Data > ({
            item: {},
        });
        // 接受传过来的数据
        data.item = JSON.parse(route.query.item!as string);
        console.log(data.item);
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style scoped lang='scss'>
</style>
