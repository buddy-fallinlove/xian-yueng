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
            <!-- <a-select v-model:value="value1" style="width: 120px" @focus="focus" ref="select" @change="handleChange">
                <a-select-option value="jack">
                    Jack
                </a-select-option>
                <a-select-option value="lucy">
                    Lucy
                </a-select-option>
                <a-select-option value="disabled" disabled>
                    Disabled
                </a-select-option>
                <a-select-option value="Yiminghe">
                    yiminghe
                </a-select-option> 
        </a-select>-->
            <!-- <div v-for="(item, index) in data.options.airport" :key="index">{{item}}</div> -->
            <a-select v-model:value="airport" style="width: 120px" @focus="focus" ref="select" @change="handleChange">
                <a-select-option v-for="(item,index) in data.options.airport" :key="index" :label="item" :value="item">{{item}}</a-select-option>
            </a-select>
        </a-col>
        <!-- <a-col :span="4">
            <a-select size="mini" v-model:value="flightTimes" placeholder="起飞时间">
                <a-select-option v-for="(item,index) in data.options.flightTimes" :key="index" :label="`${item.from}:00 - ${item.to}:00`" :value="`${item.from},${item.to}`">
                </a-select-option>
            </a-select>
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
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {
    airport: string;
    flightTimes: string;
    company: string;
    airSize: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    model: any;
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
            flightTimes: "", // 出发时间
            company: "", // 航空公司
            airSize: "", // 机型大小
            model: [{
                    name: "大",
                    size: "L",
                },
                {
                    name: "中",
                    size: "M",
                },
                {
                    name: "小",
                    size: "S",
                },
            ],
        });
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
