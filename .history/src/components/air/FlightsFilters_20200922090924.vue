<template>
<div class="filters">
    <a-row type="flex" class="filters-top" justify="space-between" align="middle">
        <a-col :span="8">
            单程：
            {{data.info.departCity}} - {{data.info.destCity}}
            /
            {{data.info.departDate}}
        </a-col>
        <a-col :span="4">
            <a-select size="mini" v-model:value="airport" placeholder="起飞机场">
                <a-select-option v-for="(item,index) in data.options.airport" :key="index" :label="item" :value="item">
                </a-select-option>
            </a-select>
        </a-col>
    </a-row>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {
    airport: string;
}
export default defineComponent({
    name: "",
    props: {
        data: {
            type: Object,
        },
    },
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            airport: "", // 机场
            flightTimes: "",
        })
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.filters {
    margin-bottom: 20px;
}

.filters-top {
    >div {
        /deep/ .el-select {
            margin-left: 10px;
        }
    }
}

.filter-cancel {
    margin-top: 10px;
}
</style>
