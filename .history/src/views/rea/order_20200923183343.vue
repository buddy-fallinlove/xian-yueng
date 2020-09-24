<template>
<div class="container">
    <a-row type="flex" width="1200px" justify="space-between">
        <!-- 订单表单 -->
        <OrderForm :data="getAirsData" />
        <!-- 侧边栏 -->
    </a-row>
    <OrderAside :data="getAirsData" />
</div>
</template>

<script lang="ts">
import OrderForm from "@/components/air/OrderForm.vue";
import OrderAside from "../../components/air/OrderAside.vue";
// 引入router
import {
    useRoute
} from "vue-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import router from "@/router";
import api from "@/http/api";
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref,
    onMounted,
} from "vue";
import {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    FormItem,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Rules,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    RuleItem,
} from "./type";
interface Data {
    id: string | number;
    seatxid: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAirsData: any;
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        OrderForm,
        OrderAside,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        // router 跳转路由定义
        const route = useRoute();
        const data: Data = reactive < Data > ({
            id: "",
            seatxid: "",
            getAirsData: {
                // eslint-disable-next-line @typescript-eslint/camelcase
                seat_infos: {},
            },
        });

        onMounted(() => {
            // 接受传过来的数据
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            data.id = JSON.parse(route.query.item!as string);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            data.seatxid = JSON.parse(route.query.item1!as string);
            // console.log(data.id);
            // console.log(data.seatxid);
            api
                .chooseTicket({
                    id: data.id,
                    seatxid: data.seatxid,
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    data.getAirsData = res;
                    // console.log(data.getAirsData);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data.getAirsData.map((item: any) => {
                        const date1 = new Date(item.dep_datetime).getTime(); //开始时间
                        const date2 = new Date(item.arr_datetime).getTime(); //结束时间
                        const date3 = date2 - date1; //时间差的毫秒数
                        if (date3 > 0) {
                            item.time = date3 / 1000 / 60 / 60;
                            item.times = parseInt(item.time);
                            item.timees = date3 / 1000 / 60 - item.times * 60;
                        }
                        if (date3 < 0) {
                            item.time = date3 / 1000 / 60 / 60;
                            item.times = parseInt(item.time) + 23;
                            item.timees = date3 / 1000 / 60 - parseInt(item.time) * 60 + 60;
                        }
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
