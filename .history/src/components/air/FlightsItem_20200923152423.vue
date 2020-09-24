<template>
<div class="flight-item" v-for="(item,index) in data.flights.slice((page-1)*pageSize,page*pageSize)" :key="index">
    <div @click="clishow(index)">
        <a-row type="flex" align="middle" class="flight-info">
            <a-col :span="6">
                <span>{{item.airline_name}}</span>
                {{item.flight_no}}
            </a-col>
            <a-col :span="12">
                <a-row type="flex" justify="space-between" class="flight-info-center">
                    <a-col :span="8" class="flight-airport">
                        <strong>{{item.dep_time}}</strong>
                        <span>{{item.org_airport_name}}{{item.org_airport_quay}}</span>
                    </a-col>
                    <a-col :span="8" class="flight-time">
                        <span>{{`${item.times}小时${item.timees}分`}}</span>
                    </a-col>
                    <a-col :span="8" class="flight-airport">
                        <strong>{{item.arr_time}}</strong>
                        <span>{{item.dst_airport_name}}{{item.dst_airport_quay}}</span>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="6" class="flight-info-right">
                ￥
                <span class="sell-price">{{item.base_price/2}}</span>起
            </a-col>
        </a-row>
    </div>
    <div class="flight-recommend" v-if="isshow ==index">
        <!-- 隐藏的座位信息列表 -->
        <a-row type="flex" v-for="(item1,index1) in item.seat_infos" :key="index1" justify="space-between" align="middle">
            <a-col :span="4">低价推荐</a-col>
            <a-col :span="20">
                <a-row type="flex" justify="space-between" align="middle" class="flight-sell">
                    <a-col :span="16" class="flight-sell-left">
                        <span>{{item1.name}}</span>
                        | {{item1.supplierName}}
                    </a-col>
                    <a-col :span="5" class="price">￥{{item1.settle_price}}</a-col>
                    <a-col :span="3" class="choose-button">
                        <a-button type="danger" @click="search(item.id)">选定</a-button>
                        <p>剩余：{{item1.discount}}</p>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>
</div>
<div>
    <!-- 分页 -->
    <a-pagination :total="data.flights.length" show-size-changer show-quick-jumper :page-size-options="pageSizeOptions" v-model:current="current1" :page-size="pageSize" @change="change" @showSizeChange="showSizeChange" :show-total="total => `共 ${total} 条`">
        <template v-slot:buildOptionText="props">
            <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
            <span v-else>全部</span>
        </template>
    </a-pagination>
</div>
</template>

<script lang="ts">
import router from "@/router";
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    // onMounted
} from "vue";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {
    isshow: number;
    pageSizeOptions: string[];
    current1: number;
    pageSize: number; // 页数
    page: number; //条数
}
export default defineComponent({
    name: "",
    props: {
        data: {
            type: Object,
            // 默认是空数组
            // eslint-disable-next-line vue/require-valid-default-prop
            default: {},
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            isshow: -1,
            current1: 1,
            page: 1,
            pageSize: 3,
            pageSizeOptions: ["3", "6", "9", "12", "15"],
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const change = (page: number, pageSize: number): void => {
            data.page = page;
            console.log(pageSize);
        };
        const showSizeChange = (current: number, size: number): void => {
            data.pageSize = size;
        };
        const clishow = (index: number): void => {
            // console.log(index)
            if (data.isshow === index) {
                data.isshow = -1;
            } else {
                data.isshow = index;
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const search = (item: any): void => {
            router.push({
                path: "/order",
                query: {
                    item: JSON.stringify(item.id),
                },
            });
        };
        return {
            ...toRefs(data),
            clishow,
            change,
            showSizeChange,
            search,
        };
    },
});
</script>

<style lang="scss" scoped>
.flight-item {
    border: 1px #ddd solid;
    margin-bottom: 10px;

    .flight-info {
        padding: 15px;
        cursor: pointer;

        >div {

            &:first-child,
            &:last-child {
                text-align: center;
            }
        }
    }

    .flight-info-center {
        padding: 0 30px;
        text-align: center;

        .flight-airport {
            strong {
                display: block;
                font-size: 24px;
                font-weight: normal;
            }

            span {
                font-size: 12px;
                color: #999;
            }
        }

        .flight-time {
            span {
                display: inline-block;
                padding: 10px 0;
                border-bottom: 1px #eee solid;
                color: #999;
            }
        }
    }

    .flight-info-right {
        .sell-price {
            font-size: 24px;
            color: orange;
            margin: 0 2px;
        }
    }
}

.flight-recommend {
    background: #f6f6f6;
    border-top: 1px #eee solid;
    padding: 0 20px;

    .flight-sell {
        border-bottom: 1px #eee solid;
        padding: 10px 0;

        &:last-child {
            border-bottom: none;
        }

        .flight-sell-left {
            font-size: 12px;

            span {
                color: green;
            }
        }

        .price {
            font-size: 20px;
            color: orange;
        }

        .choose-button {
            text-align: center;
            color: #666;

            button {
                display: block;
                width: 100%;
                margin-bottom: 5px;
            }
        }
    }
}
</style>
