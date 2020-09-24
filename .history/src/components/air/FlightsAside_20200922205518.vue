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
                    <img src="../../assets/ser.png" alt style="width: 40px;height: 40px;" />
                </i>
                <span>航协认证</span>
            </a-col>
            <a-col :span="8">
                <i>
                    <img src="../../assets/ser.png" alt style="width: 40px;height: 40px;" />
                </i>
                <span>航协认证</span>
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
    SetupContext
} from "vue";
// interface Data {
// }
export default defineComponent({
    name: "",
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        //const data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
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
    padding: 10px;
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
