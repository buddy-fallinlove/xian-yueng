<template>
<div class="aside">
    <div class="air-info">
        <a-row type="flex" justify="space-between" class="info-top">
            <div>{{data.dep_date}}</div>
            <div>{{data.org_city_name}} - {{data.dst_city_name}}</div>
        </a-row>
        <a-row type="flex" justify="space-between" align="middle" class="info-step">
            <a-col :span="5" class="flight-airport">
                <strong>{{data.dep_time}}</strong>
                <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
            </a-col>
            <a-col :span="14" class="flight-time">
                <span>--- 2小时25分---</span>
                <span>{{data.airline_name}}{{data.flight_no}}</span>
            </a-col>
            <a-col :span="5" class="flight-airport">
                <strong>{{data.arr_time}}</strong>
                <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
            </a-col>
        </a-row>
    </div>
    <a-row type="flex" justify="space-between" class="info-bar">
        <span>订单总价</span>
        <span>金额</span>
        <span>数量</span>
    </a-row>
    <a-row type="flex" justify="space-between" class="info-bar">
        <span>成人机票</span>
        <span>￥{{data.seat_infos.org_settle_price}}</span>
        <span>x1</span>
    </a-row>
    <a-row type="flex" justify="space-between" class="info-bar">
        <span>机建＋燃油</span>
        <span>¥{{data.airport_tax_audlet}}/人/单程</span>
        <span>x1</span>
    </a-row>
    <a-row type="flex" justify="space-between" align="middle" class="info-bar">
        <span>应付总额：</span>
        <span class="price">￥ {{data.base_price}}</span>
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
            // eslint-disable-next-line vue/require-valid-default-prop
            default: {},
        },
    },
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({});
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
/*aside*/
.aside {
    width: 350px;
    height: fit-content;
    border: 1px #ddd solid;
}

.air-info {
    padding: 15px;

    .info-top {
        margin-bottom: 10px;

        >div:last-child {
            font-size: 14px;
        }
    }

    .info-step {
        .flight-airport {
            strong {
                display: block;
                font-size: 22px;
                font-weight: normal;
            }

            span {
                font-size: 12px;
                color: #999;
            }
        }

        .flight-time {
            text-align: center;
            font-size: 12px;
            color: #999;

            span {
                display: block;
            }
        }
    }
}

.info-bar {
    border-top: 1px #ddd dashed;
    padding: 10px 15px;
    font-size: 14px;
    color: #666;

    .price {
        font-size: 28px;
        color: orange;
    }
}
</style>
