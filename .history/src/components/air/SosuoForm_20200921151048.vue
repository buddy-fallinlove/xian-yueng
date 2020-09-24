<template>
<div class="search-form">
    <!-- 头部tab切换 -->
    <a-row type="flex" class="search-tab">
        <span v-for="(item,index) in tabs" :key="index" @click="handleSearchTab(item, index)" :class="{active: index === currentTab}">
            <i>
                <img :src="item.imgUrl" alt style="width: 20px;" />
            </i>
            {{item.name}}
        </span>
    </a-row>
    <a-form v-show="currentTab===0" class="search-form-content" ref="form" label-width="80px">
        <a-form-item label="Activity name">
            <a-input />
        </a-form-item>
    </a-form>
    <!-- 往返购票口 -->
    <p v-show="currentTab===1">暂无往返购票功能~</p>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from "vue";
import {
    fetch
} from "../../../server/plugins/upload/services/Upload";
interface TabsItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgUrl: any;
    name: string;
}
interface Data {
    tabs: TabsItem[];
    currentTab: number;
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            currentTab: 0,
            tabs: [{
                    imgUrl: require("../../assets/dan.png"),
                    name: "单程",
                },
                {
                    imgUrl: require("../../assets/wang.png"),
                    name: "往返",
                },
            ],
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleSearchTab = (item: any, index: any): void => {
            data.currentTab = index;
        };
        return {
            ...toRefs(data),
            handleSearchTab,
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
