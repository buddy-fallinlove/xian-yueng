<template>
<div class="search-form"></div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
interface Data {
    tabs: array;
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            tabs: [{
                    img: "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
                    name: "单程",
                },
                {
                    name: "往返",
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
.search-form {
    border: 1px #ddd solid;
    border-top: none;
    width: 360px;
    height: 350px;
    box-sizing: border-box;
}

.search-tab {
    span {
        display: block;
        flex: 1;
        text-align: center;
        height: 48px;
        line-height: 42px;
        box-sizing: border-box;
        border-top: 3px #eee solid;
        background: #eee;
    }

    .active {
        border-top-color: orange;
        background: #fff;
    }

    i {
        margin-right: 5px;
        font-size: 18px;

        &:first-child {
            font-size: 16px;
        }
    }
}

.search-form-content {
    padding: 15px 50px 15px 15px;
    position: relative;

    .el-autocomplete {
        width: 100%;
    }
}

.reverse {
    position: absolute;
    top: 35px;
    right: 15px;

    &:after,
    &:before {
        display: block;
        content: "";
        position: absolute;
        left: -35px;
        width: 25px;
        height: 1px;
        background: #ccc;
    }

    &:after {
        top: 0;
    }

    &:before {
        top: 60px;
    }

    span {
        display: block;
        position: absolute;
        top: 20px;
        right: 0;
        font-size: 12px;
        background: #999;
        color: #fff;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;

        &:after,
        &:before {
            display: block;
            content: "";
            position: absolute;
            left: 10px;
            width: 1px;
            height: 20px;
            background: #ccc;
        }

        &:after {
            top: -20px;
        }

        &:before {
            top: 20px;
        }
    }
}
</style>
