<template>
<div>
    <section class="container">
        <h2 class="air-title">
            <span></span>
            <i>国内机票</i>
        </h2>

    </section>
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
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({});
        return {
            ...toRefs(data),
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
    color: #409EFF;

    span {
        font-size: 20px;
    }
}
</style>w
