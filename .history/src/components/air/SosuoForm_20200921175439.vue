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
        <!--出发城市-->
        <a-form-item label="出发城市" style="display: flex;">
            <a-input type="text" placeholder="请搜索出发城市" size="default" class="el-autocomplete" v-model:value="value1" />
        </a-form-item>
        <!--到达城市-->
        <a-form-item label="到达城市" style="display: flex;">
            <a-input type="text" placeholder="请搜索到达城市" size="default" class="el-autocomplete" v-model:value="value2" />
        </a-form-item>
        <!--出发时间-->
        <a-form-item label="出发时间" style="display: flex;">
            <div>
                <a-input-group compact>
                    <a-date-picker type="date" placeholder="请选择日期" v-model="value3" class="el-autocomplete" size="default" @change="change" />
                </a-input-group>
            </div>
        </a-form-item>
        <!-- 搜索 -->
        <a-form-item>
            <a-button style="width:100%;" type="primary" @click="handleSubmit">
                <i>
                    <SearchOutlined />
                </i>搜索
            </a-button>
        </a-form-item>
        <div class="reverse">
            <span @click="handleReverse">换</span>
        </div>
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
    SetupContext,
    onMounted
} from "vue";
import api from "@/http/api";
import {
    useRouter
} from "vue-router";
import dayjs from 'dayjs'
interface TabsItem {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imgUrl: any;
    name: string;
}
interface Data {
    tabs: TabsItem[];
    currentTab: number;
    value1: string;
    value2: string;
    value3: string;
    it: any;
    cont1: string;
    cont2: string;
    cont3: string;
    cont4: string;
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const router = useRouter();
        const data: Data = reactive < Data > ({
            currentTab: 0,
            value1: "",
            value2: "",
            value3: "",
            it: {},
            cont1: "",
            cont2: "",
            cont3: "",
            cont4: "",
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
        const change = (value: string): void => {
            data.value3 = dayjs(value).format("YYYY-MM-DD")
            // console.log(data.value3)
        };
        const handleReverse = (): void => {
            const template = data.value1;
            const templates = data.value2;
            data.value1 = templates;
            data.value2 = template;
        };
        const handleSubmit = (): void => {
            if (data.value1 === "") {
                alert("请输入出发城市")
            } else if (data.value2 === "") {
                alert("请输入到达城市")
            } else if (data.value3 === "") {
                alert("请输入日期")
            } else {
                api
                    .getCity({
                        name: data.value1
                    })
                    .then((res: any) => {

                        console.log(res)
                        data.cont1 = res.data[0].name
                        data.cont2 = res.data[0].sort

                    })
                    .catch((err: any) => {
                        console.log(err)
                    });
                api
                    .getCity({
                        name: data.value2
                    })
                    .then((res: any) => {

                        console.log(res)
                        data.cont3 = res.data[0].name
                        data.cont4 = res.data[0].sort
                        console.log(data.it)

                    })
                    .catch((err: any) => {
                        console.log(err)
                    });
                console.log(data.cont1)
                data.it.departCity = data.cont1
                data.it.departCode = data.cont2
                data.it.destCity = data.cont3
                data.it.destCode = data.cont4
                data.it.departDate = data.value3

                router.push({
                    path: "/flights",
                    query: {
                        it: JSON.stringify(data.it)
                    }
                });
            }
        }
        return {
            ...toRefs(data),
            handleSearchTab,
            change,
            handleReverse,
            handleSubmit

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
        width: 124%;
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

.cf1 {
    width: 100%;
    height: 30px;
    display: flex;
}

.cf11 {
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
}

.cf111 {
    height: 30px;
    width: 105%;
}
</style>
