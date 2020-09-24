<template>
<div>
    <section class="contianer">
        <a-row type="flex" justify="space-between">
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
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
import {
    useRoute
} from "vue-router";
interface Data {}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const route = useRoute();
        const data: Data = reactive < Data > ({
            jipiao: {
                info: {},
                options: {},
                flights: []
            }
        });
        onMounted(() => {
            const item = JSON.parse(route.query.it as string);
            // console.log(item);
            api.airs({
                departCity: item.departCity,
                departCode: item.departCode,
                destCity: item.destCity,
                destCode: item.destCode,
                departDate: item.departDate,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }).then((res: any) => {
                console.log(res)
                data.jipiao = res.data

            }).catch((err) => {
                console.log(err)
            })
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
