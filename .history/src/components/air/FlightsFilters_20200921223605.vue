<template>
<div class="filters">
    <a-row type="flex" class="filters-top" justify="space-between" align="middle">
        <!--<a-col :span="8">
            单程：
            {{data.info.departCity}} - {{data.info.destCity}}
            /
            {{data.info.departDate}}
        </a-col>-->
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
interface Data {}
export default defineComponent({
    name: "",
    props: {
        data: {
            type: Object,
        },
    },
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({})
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
