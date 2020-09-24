<template>
<div class="aside">
    <div class="statement">
        <a-row type="flex" justify="space-between" class="statement-list">
            <a-col :span="8">
                <i>
                    <img src="../../assets/ser.png" alt style="width: 40px;height: 40px;" />
                </i>
                <span>航协认证</span>
            </a-col>
            <a-col :span="8">
                <i>
                    <img src="../../assets/盾牌.png" alt style="width: 40px;height: 33px;" />
                </i>
                <span>出行保证</span>
            </a-col>
            <a-col :span="8">
                <i>
                    <img src="../../assets/电话.png" alt style="width: 40px;height: 34px;" />
                </i>
                <span>7x24</span>
            </a-col>
        </a-row>
        <p class="service-tel">免费客服电话：4006345678转2</p>
    </div>
    <div class="history">
        <h5>历史查询</h5>
        <!-- <div v-for="()"></div> -->
        <!-- <a href="`/rea/flights?departCity=${item.departCity}&departCode=${item.departCode}&destCity=${item.destCity}&destCode=${item.destCode}&departDate=${item.departDate}`">
        </a> -->
    </div>
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
import {
    useRoute
} from "vue-router";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const route = useRoute();
        const data: Data = reactive < Data > ({});
        onMounted(() => {
            const item = JSON.push(route.query.it);
            console.log(item)
        });
        return {
            ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.statement {
    border: 1px #ddd solid;

    .statement-list {
        padding: 10px 0;

        >div {
            text-align: center;

            i {
                display: block;
                font-size: 40px;
            }

            span {
                font-size: 12px;
            }
        }
    }

    .service-tel {
        height: 32px;
        line-height: 32px;
        padding: 0 10px;
        background: #f6f6f6;
        font-size: 14px;
    }
}

.history {
    border: 1px #ddd solid;
    margin-top: 10px;

    h5 {
        font-size: 16px;
        font-weight: normal;
        padding-bottom: 10px;
        border-bottom: 1px #eee solid;
    }

    .history-item {
        padding: 10px 0;
        font-size: 14px;
        border-bottom: 1px #eee solid;

        &:last-child {
            border: none;
        }

        .to-from {
            margin-bottom: 5px;
        }

        p {
            font-size: 12px;
            color: #666;
        }

        span {
            color: #fff;
            display: block;
            padding: 2px 10px;
            background: orange;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
        }
    }
}
</style>
