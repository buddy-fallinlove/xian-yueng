<template>
<div>
    <section class="contianer">
        <a-row type="flex" justify="space-between">
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <FlightsFilters :data="jipiaoSon"></FlightsFilters>
                <!-- 航班头部布局 -->
                <FlightsListHead />
                <!-- 航班信息 -->
                <FlightsItem :data="jipiaoSon" />
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
import FlightsItem from "@/components/air/FlightsItem.vue";
import FlightsListHead from "@/components/air/FlightsListHead.vue";
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
        FlightsListHead,
        FlightsItem,
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
        const change = (page: number, pageSize: number): void => {
            data.page = page;
            console.log(pageSize);
        };
        const showSizeChange = (current: number, size: number): void => {
            data.pageSize = size;
        };
        onMounted(() => {
            const item = JSON.parse(route.query.it as string);
            console.log(item);
            api
                .airs({
                    departCity: item.departCity.replace("市", ""),
                    departCode: item.departCode,
                    destCity: item.destCity.replace("市", ""),
                    destCode: item.destCode,
                    departDate: item.departDate,
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    console.log(res);
                    data.jipiao = res;
                    data.jipiaoSon = {
                        ...res,
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data.jipiaoSon.flights.map((item: any) => {
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
        return {
            ...toRefs(data),
            change,
            showSizeChange,
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
