<template>
<div class="aside">
    <div class=""></div>
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
