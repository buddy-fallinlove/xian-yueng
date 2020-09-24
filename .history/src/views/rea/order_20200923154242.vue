<template>
<div class="container">
    <a-row type="flex" justify="space-between">

    </a-row>
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
    ref,
    onMounted
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
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        data.item = JSON.parse(route.query.item!as string);
        console.log(data.item);
        onMounted(() => {

        })
        const ruleForm = ref();
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.container {
    width: 1000px;
    margin: 20px auto;
}

/*aside*/
.aside {
    width: 350px;
    height: fit-content;
    border: 1px #ddd solid;
}
</style>
