<template>
<div>
    <section class="container">
        <h2 class="air-title">
            <span>
                <img src="../../assets/飞机.png" alt />
            </span>
            <i>国内机票</i>
        </h2>
        <!-- 搜索广告栏 -->
        <a-row type="flex" justify="space-between">
            <!-- 搜索表单 -->
            <SosuoForm />
            <!-- banner广告 -->
            <div class="sale-banner">
                <img src="http://157.122.54.189:9093/images/pic_sale.jpeg" />
            </div>
        </a-row>
        <!-- 广告 -->
        <a-row type="flex" class="statement">
            <a-col :span="8">
                <img src="../../assets/ser.png" alt style="width:30px; height:32px;" />
                <span>100%航协认证</span>
            </a-col>
            <a-col :span="8">
                <img src="../../assets/盾牌.png" alt="" style="width:37px; height:32px;">
                <span>出行保证</span>
            </a-col>
            <a-col :span="8">
                <img src="../../assets//电话.png" alt="">
                <span>7x24小时服务</span>
            </a-col>
        </a-row>
        <h2>
            <span class=" air-sale-title">
                <ThunderboltFilled />
                <i>特价机票</i>
            </span>
        </h2>
        <!-- 特价机票 -->
        <div class="air-sale">
            <a-row type="flex" class="air-sale-pic" justify="space-between">
                <a-col :span="6" v-for="(item,index) in resuu" :key="index">
                    <img :src="resuu[0].cover" alt="">
                </a-col>
            </a-row>
        </div>
    </section>
</div>
</template>

<script lang="ts">
import SosuoForm from "../../components/air/SosuoForm.vue";
import api from "@/http/api";
import {
    defineComponent,
    reactive,
    SetupContext,
    onMounted
} from "vue";
interface Data {
    resuu: object[];
}
export default defineComponent({
    name: "",
    props: {},
    components: {
        SosuoForm,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            resuu: []
        });
        onMounted(() => {
            api
                .sale()
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    console.log(res);
                    data.resuu = res.data;
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .catch((err: any) => {
                    console.log(err);
                });
        })
        return {
            // ...toRefs(data),
        };
    },
});
</script>

<style lang="scss" scoped>
.air-sale {
    border: 1px #ddd solid;
    padding: 20px;
    margin-bottom: 50px;

    .air-sale-pic {
        >div {
            width: 225px;
            height: 140px;
            position: relative;
            overflow: hidden;

            img {
                width: 100%;
            }

            .layer-bar {
                position: absolute;
                bottom: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                height: 30px;
                line-height: 30px;
                width: 100%;
                box-sizing: border-box;
                padding: 0 15px;
                font-size: 14px;

                span:last-child {
                    font-size: 18px;
                }
            }
        }
    }
}

.air-sale-group {
    margin-top: 20px;
    padding-top: 8px;
    border-right: 1px #eee solid;

    &:last-child {
        border-right: none;
    }

    .air-sale-row {
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;

        .air-sale-price {
            color: orange;
            font-size: 20px;
        }
    }
}

.container {
    width: 1000px;
    margin: 0 auto;
}

.air-title {
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: orange;

    span {
        font-size: 20px;
    }
}

.statement {
    margin: 15px 0;
    border: 1px #ddd solid;
    background: #f5f5f5;
    height: 58px;
    padding: 10px 0;
    box-sizing: border-box;

    >div {
        text-align: center;
        line-height: 38px;
        border-right: 1px #ddd solid;

        &:last-child {
            border-right: none;
        }

        * {
            vertical-align: middle;
        }

        i {
            font-size: 30px;
        }
    }
}

.air-sale-title {
    margin: 15px 0;
    font-size: 20px;
    font-weight: normal;
    color: #409eff;

    span {
        font-size: 20px;
    }
}
</style>w
