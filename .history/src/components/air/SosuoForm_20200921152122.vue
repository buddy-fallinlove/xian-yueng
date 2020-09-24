<template>
<div>
    <div class="header">
        <img class="jp" src="../../assets/飞机.png" alt />
        <i>国内机票</i>
    </div>
    <div class="bodyer">
        <div class="left">
            <div class="dc">
                <img src="../../assets/单程.png" alt />
                <i>单程</i>
            </div>
            <div class="wf" @click="dianji">
                <img src="../../assets/wangfan.png" alt />
                <i>往返</i>
            </div>
            <div class="cf">
                出发城市
                <input type="text" placeholder="请搜索出发城市" v-model="value1" />
            </div>
            <div class="huan" @click="huan">换</div>
            <div class="dd">
                到达城市
                <input type="text" placeholder="请搜索到达城市" v-model="value2" />
            </div>
            <div class="cf1">
                <div class="cf11">出发时间</div>
                <div class="cf111">
                    <a-input-group compact>
                        <a-date-picker placeholder="请选择日期" v-model="value3" size="small" @change="change" />
                    </a-input-group>
                </div>
            </div>
            <div class="fd-box" @click="search">
                <img class="fd-tu" src="../../assets/放大.png" alt />
                <i>搜索</i>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/pic_sale.jpeg" alt />
        </div>
    </div>

    <div class="footer">
        <div class="tile">
            <img src="../../assets/商协LOGO.png" alt />
            <i>100%航协认证</i>
        </div>
        <div class="tile">
            <img src="../../assets/renzheng.png" alt />
            <i>出行保证</i>
        </div>
        <div class="tile1">
            <img src="../../assets/dianhua.png" alt />
            <i>7x24小时服务</i>
        </div>
    </div>

    <div class="header1">
        <img class="jp1" src="../../assets//航班计划.png" alt />
        <i>特价机票</i>
    </div>

    <div class="wei">
        <div v-for="(item,index) in tuijian" :key="index" class="box" @click="detail(item)">
            <img class="tu" :src="tuijian[0].cover" alt />
            <div class="city">{{item.departCity}}-{{item.destCity}}</div>
            <div class="pri">￥{{item.price}}</div>
        </div>
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
import api from "@/http/api";
import {
    useRouter
} from "vue-router";
import dayjs from 'dayjs'
interface Item {
    departCity ? : string;
    departCode ? : string;
    destCity ? : string;
    destCode ? : string;
    departDate ? : string;
}
interface Data {
    tuijian: object[];
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
    setup(props, ctx: SetupContext) {
        const router = useRouter();
        const data: Data = reactive < Data > ({
            tuijian: [],
            value1: "",
            value2: "",
            value3: "",
            it: {},
            cont1: "",
            cont2: "",
            cont3: "",
            cont4: ""
        });
        const dianji = (): void => {
            alert("目前暂不支持往返，请使用单程选票");
        };
        onMounted(() => {
            api
                .sale()
                .then((res: any) => {
                    console.log(res);
                    data.tuijian = res.data;
                })
                .catch((err: any) => {
                    console.log(err);
                });
        });
        const huan = (): void => {
            const template = data.value1;
            data.value1 = data.value2;

            data.value2 = template;
        };
        const detail = (item: object): void => {
            const it = JSON.stringify(item);
            console.log(it);
            router.push({
                path: "/liebiao",
                query: {
                    it: it
                }
            });
        };
        const change = (value: string): void => {
            data.value3 = dayjs(value).format("YYYY-MM-DD")
            console.log(data.value3)
        }
        const search = (): void => {

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
                    path: "/liebiao",
                    query: {
                        it: JSON.stringify(data.it)
                    }
                });
            }
        };

        return {
            ...toRefs(data),
            dianji,
            huan,
            detail,
            search,
            change
        };
    }
});
</script>

<style lang="scss" scoped>
.fd-box {
    width: 80%;
    margin: 0 auto;
    height: 40px;
    background-color: blueviolet;
    border-radius: 5px;
    line-height: 40px;
    text-align: center;

    .fd-tu {
        width: 15px;
        height: 15px;
    }

    i {
        color: white;
        font-size: 12px;
    }
}

.huan {
    color: white;
    width: 30px;
    height: 30px;
    background-color: #999999;
    margin-left: 85%;
    line-height: 30px;
    text-align: center;
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
    margin-left: 10px;
    height: 30px;
}

.cf,
.dd {
    font-size: 14px;
    text-indent: 2em;
    line-height: 30px;
    height: 30px;

    input {
        text-indent: 1em;
        margin-left: 5px;
        height: 30px;
        border: 1px solid #cccccc;

        width: 165px;
    }
}

.city {
    position: absolute;
    font-size: 16px;
    color: white;
    left: 10%;
    top: 130px;
}

.pri {
    position: absolute;
    font-size: 16px;
    color: white;
    right: 10%;
    top: 130px;
}

.box {
    position: relative;
    width: 25%;
    height: 180px;
}

.box:hover {
    cursor: pointer;
}

.tu {
    width: 90%;
    height: 140px;
    position: absolute;
    top: 20px;
    left: 5%;
}

.wei {
    width: 75%;
    justify-content: space-around;
    display: flex;
    border: 1px solid #cccccc;
    margin: 0px auto 50px auto;
}

.header {
    width: 75%;
    line-height: 70px;
    height: 70px;
    margin: 0 auto;

    i {
        font-size: 20px;
        display: inline-block;
        margin-left: 5px;
        color: #f8a503;
    }
}

.header1 {
    width: 75%;
    line-height: 70px;
    height: 70px;
    margin: 10px auto;

    i {
        font-size: 20px;
        display: inline-block;
        margin-left: 5px;
        color: blue;
    }
}

.footer {
    width: 75%;
    line-height: 70px;
    height: 70px;
    margin: 20px auto;
    border: 1px solid #cccccc;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;

    .tile {
        color: black;
        font-size: 18px;
        width: 33%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-top: 10px;
        border-right: 1px solid #cccccc;
    }

    img {
        width: 30px;
        height: 30px;
    }
}

.tile1 {
    color: black;
    font-size: 18px;
    width: 33%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-top: 10px;
}

.jp,
.jp1 {
    width: 30px;
    height: 30px;
}

.bodyer {
    display: flex;
    margin: auto;
    width: 75%;
}

.left {
    width: 33%;
    display: flex;
    height: 350px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    flex-wrap: wrap;
}

.right {
    width: 65%;
    margin-left: 2%;

    img {
        width: 100%;
        height: 350px;
    }
}

.dc {
    width: 50%;
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: 18px;
    border-top: 3px solid orange;

    img {
        width: 20px;
        height: 20px;
    }
}

.wf {
    width: 50%;
    text-align: center;
    line-height: 50px;
    height: 50px;
    font-size: 18px;
    background-color: #eeeeee;

    img {
        width: 20px;
        height: 20px;
    }
}
</style>
