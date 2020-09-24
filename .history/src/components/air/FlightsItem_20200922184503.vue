<template>
<div class="flight-item" v-for="(item,index) in data.flights" :key="index">
    <div @click="clishow">
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
                ￥<span class="sell-price">{{item.base_price/2}}</span>起
            </a-col>
        </a-row>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    onMounted
} from "vue";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {
    isshow: boolean;
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
            isshow: false
        });
        const clishow = (): void => {
            data.isshow = !data.isshow
        }
        return {
            ...toRefs(data),
            clishow
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
