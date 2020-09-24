<template>
<div>
    <section class="contianer">
        <a-row type="flex" justify="space-between">
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <FlightsFilters :data="jipiaoSon"></FlightsFilters>
            </div>
        </a-row>
    </section>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    onMounted,
} from "vue";
import api from "@/http/api";
import FlightsFilters from "@/components/air/FlightsFilters.vue";
import {
    useRoute
} from "vue-router";
interface Obj {
    info: object;
    options: object;
    flights: object[];
}
interface Item {
    info: object;
    options: object;
    flights: object[];
}
interface Data {
    jipiao: Obj;
    jipiaoSon: Item;
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        FlightsFilters,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const route = useRoute();
        const data: Data = reactive < Data > ({
            //总数据
            jipiao: {
                info: {},
                options: {},
                flights: [],
            },
            jipiaoSon: {
                info: {},
                options: {},
                flights: [],
            },
        });
        onMounted(() => {
            const item = JSON.parse(route.query.it as string);
            //   console.log(item);
            console.log(item, "ddadada");
            api
                .airs({
                    departCity: "广州市", // item.departCity,
                    departCode: "440100000000", //item.departCode,
                    destCity: "上海市", // item.destCity,
                    destCode: "310100000000", // item.destCode,
                    departDate: "departDate", //item.departDate,
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    console.log(res);
                    data.jipiao = res;
                    data.jipiaoSon = {
                        ...res,
                    };
                })
                .catch((err) => {
                    console.log(err);
                });
        });
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.contianer {
    width: 1000px;
    margin: 20px auto;
}

.flights-content {
    width: 745px;
    font-size: 14px;
}

.aside {
    width: 240px;
}
</style>
