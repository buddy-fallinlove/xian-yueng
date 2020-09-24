<template>
<div class="d-f j-c w-1">
    <div class="hotelbox">
        <!--面包屑-->
        <div class="topbox">
            <a-breadcrumb separator=">">
                <a-breadcrumb-item>酒店</a-breadcrumb-item>
                <a-breadcrumb-item>酒店预订</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <!--搜索框-->
        <div class="searchbox">
            <div class="citybox d-f a-l">
                <a-auto-complete v-model:value="cityname" :data-source="choselist" style="width: 100%" placeholder="选择城市" @select="onSelect" @search="onSearch" @change="onChange1" />
            </div>
            <div class="timebox d-f a-l">
                <img class="imgtime" src="../../../public/image/data.png" alt />
                <a-range-picker @change="onChange" :placeholder="['入驻日期','离开日期']" />
            </div>
            <div class="peobox d-f a-l">
                <div class="d-f a-l" @click="openbox">
                    <div class="inputbox">
                        <a-input placeholder="人数未定" v-model:value="choseNum" />
                    </div>
                    <div class="rightimgbox">
                        <img class="imgsss" src="../../../public/image/user.png" alt />
                    </div>
                </div>
                <div v-if="flag1 == true" class="chosebox">
                    <div class="chosebox1">
                        <div class="chtopbox">
                            <div>每间</div>
                            <div class="d-f">
                                <div class="m-r-10">
                                    <a-select show-search placeholder="2成人" option-filter-prop="children" style="width: 100px" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                                        <a-select-option value="1成人">1成人</a-select-option>
                                        <a-select-option value="2成人">2成人</a-select-option>
                                        <a-select-option value="3成人">3成人</a-select-option>
                                        <a-select-option value="4成人">4成人</a-select-option>
                                        <a-select-option value="5成人">5成人</a-select-option>
                                        <a-select-option value="6成人">6成人</a-select-option>
                                        <a-select-option value="7成人">7成人</a-select-option>
                                    </a-select>
                                </div>
                                <div>
                                    <a-select show-search placeholder="1儿童" option-filter-prop="children" style="width: 100px" :filter-option="filterOption1" @focus="handleFocus1" @blur="handleBlur1" @change="handleChange1">
                                        <a-select-option value="1儿童">1儿童</a-select-option>
                                        <a-select-option value="2儿童">2儿童</a-select-option>
                                        <a-select-option value="3儿童">3儿童</a-select-option>
                                        <a-select-option value="4儿童">4儿童</a-select-option>
                                    </a-select>
                                </div>
                            </div>
                        </div>
                        <div class="chbtbox">
                            <a-button type="primary" size="mini" @click="choseend">确定</a-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-l-10">
                <a-button type="primary">查看价格</a-button>
            </div>
        </div>
        <!--地图区域-->
        <div class="d-f w-1 m-b-15">
            <div class="l-box">
                <div class="d-f">
                    <div class="lbposition">区域：</div>
                    <div v-if="flag === false">
                        <div class="lbwords" v-for="(item,index) in scenics" :key="index">
                            <div v-for="(item1,index1) in item.scenics" :key="index1">
                                <div class="m-r-10 itembox">{{item1.name}}</div>
                            </div>
                        </div>
                        <div @click="openhigeht" class="fs14">
                            <img class="imgss" src="../../../public/image/open.png" alt /> 等25个区域
                        </div>
                    </div>
                    <div v-if="flag === true">
                        <div class="lbwords1" v-for="(item,index) in scenics" :key="index">
                            <div v-for="(item1,index1) in item.scenics" :key="index1">
                                <div class="m-r-10 itembox">{{item1.name}}</div>
                            </div>
                        </div>
                        <div @click="opendown" class="fs14">
                            <img class="imgss" src="../../../public/image/close.png" alt /> 等25个区域
                        </div>
                    </div>
                </div>
                <div class="d-f m-t-10">
                    <div class="lbposition1">
                        均价
                        <a-tooltip placement="topLeft">
                            <template v-slot:title>
                                <span>均价由平均假日价格计算得出，节假日价格可能上浮</span>
                            </template>
                            <span class="sloatas">?</span>
                        </a-tooltip>：
                    </div>
                    <div class="d-f ratebox">
                        <div class="m-r-10">
                            <a-tooltip placement="bottom">
                                <template v-slot:title>
                                    <span>等级评定是针对房价，设施和服务等各方面水平的综合评估</span>
                                </template>
                                <div>
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    ¥322
                                </div>
                            </a-tooltip>
                        </div>
                        <div class="m-r-10">
                            <a-tooltip placement="bottom">
                                <template v-slot:title>
                                    <span>等级评定是针对房价，设施和服务等各方面水平的综合评估</span>
                                </template>
                                <div>
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    ¥521
                                </div>
                            </a-tooltip>
                        </div>
                        <div class="m-r-10">
                            <a-tooltip placement="bottom">
                                <template v-slot:title>
                                    <span>等级评定是针对房价，设施和服务等各方面水平的综合评估</span>
                                </template>
                                <div>
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    <img class="imgss" src="../../../public/image/huangguan.png" alt />
                                    ¥768
                                </div>
                            </a-tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div class="r-box">
                <div id="container"></div>
            </div>
        </div>
        <!--条件搜索-->
        <div class="d-f w-1 m-t-10 m-b-15">
            <div class="searchBox d-f">
                <div class="searchBoxin">
                    <div class="moneybox">
                        <div class="d-f a-l j-c-sb m-t-10">
                            <div>价格</div>
                            <div class="m-r-10">0-{{value1}}</div>
                        </div>
                        <div class="m-r-10">
                            <a-slider @change="onChange" @afterChange="onAfterChange" v-model:value="value1" max="4000" />
                        </div>
                    </div>
                    <div class="levelbox">
                        <div class="m-t-10 m-l-20">住宿等级</div>
                        <div class="chosefont">
                            <div class="chosefont1">
                                <a-dropdown>
                                    <template v-slot:overlay>
                                        <a-menu>
                                            <a-menu-item v-for="(item,index) in levellist" :key="index" @change="handlelevel(item)">
                                                <a-radio v-model:checked="item.checked"></a-radio>
                                                {{item.name}}
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <div class="w-1 d-f a-l j-c-sb hotelsearchbox">
                                        <div>
                                            <a-input v-model:value="reslevel" placeholder="不限" />
                                        </div>
                                        <div class="m-r-10">
                                            <img class="imgsss" src="../../../public/image/down.png" alt />
                                        </div>
                                    </div>
                                </a-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="stybox">
                        <div class="m-t-10 m-l-20">住宿类型</div>
                        <div class="chosefont">
                            <div class="chosefont1">
                                <a-dropdown>
                                    <template v-slot:overlay>
                                        <a-menu>
                                            <a-menu-item v-for="(item,index) in types" :key="index" @change="handletype(item)">
                                                <a-radio v-model:checked="item.checked"></a-radio>
                                                {{item.name}}
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <div class="w-1 d-f a-l j-c-sb hotelsearchbox">
                                        <div>
                                            <a-input v-model:value="type" placeholder="不限" />
                                        </div>
                                        <div class="m-r-10">
                                            <img class="imgsss" src="../../../public/image/down.png" alt />
                                        </div>
                                    </div>
                                </a-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="shebox">
                        <div class="m-t-10 m-l-20">酒店设施</div>
                        <div class="chosefont">
                            <div class="chosefont1">
                                <a-dropdown>
                                    <template v-slot:overlay>
                                        <a-menu>
                                            <a-menu-item v-for="(item,index) in assets" :key="index" @change="handleasset(item)">
                                                <a-radio v-model:checked="item.checked"></a-radio>
                                                {{item.name}}
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <div class="w-1 d-f a-l j-c-sb hotelsearchbox">
                                        <div>
                                            <a-input v-model:value="asset" placeholder="不限" />
                                        </div>
                                        <div class="m-r-10">
                                            <img class="imgsss" src="../../../public/image/down.png" alt />
                                        </div>
                                    </div>
                                </a-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="pinpaibox">
                        <div class="m-t-10 m-l-20">酒店品牌</div>
                        <div class="chosefont">
                            <div class="chosefont1">
                                <a-dropdown>
                                    <template v-slot:overlay>
                                        <a-menu>
                                            <a-menu-item v-for="(item,index) in brands" :key="index" @change="handlebrand(item)">
                                                <a-radio v-model:checked="item.checked"></a-radio>
                                                {{item.name}}
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <div class="w-1 d-f a-l j-c-sa hotelsearchbox">
                                        <div>
                                            <a-input v-model:value="brand" placeholder="不限" />
                                        </div>
                                        <div class="m-r-10">
                                            <img class="imgsss" src="../../../public/image/down.png" alt />
                                        </div>
                                    </div>
                                </a-dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="retrunbox d-f j-c a-l">
                        <div class="m-l-10">
                            <a-button type="primary">撤销条件</a-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--酒店展示-->
        <div class="d-f w-1 m-t-10">
            <div class="hotelbox">
                <!--循环体-->
                <div class="d-f w-1 m-t-10 m-b-15" v-for="(item,index) in hotellist" :key="index">
                    <div class="hbimgbox m-r-10">
                        <img class="imghb" :src="item.photos" alt />
                    </div>
                    <div class="hbmsgbox">
                        <div class="hbmsgbox-fs">{{item.name}}</div>
                        <div class="hbmsgbox-fs2">
                            {{item.alias}}
                            <span v-if="item.hotellevel">
                                <a-rate v-model:value="item.hotellevel.level" disabled allow-half></a-rate>
                            </span>
                            <span v-if="item.hoteltype">{{item.hoteltype.name}}</span>
                        </div>
                        <div class="d-f m-b-15">
                            <div>
                                <span class="obfs">
                                    <a-rate v-model:value="item.stars" disabled allow-half />
                                    {{item.stars}}
                                </span>星
                            </div>
                            <div class="hbmsgfont m-l-10">{{item.very_bad_remarks +item.very_good_remarks}}条评论</div>
                            <div></div>
                        </div>
                        <div class="hbmsgfont">
                            <img class="imgss" src="../../../public/image/location.png" alt />
                            位于:{{item.address}}
                        </div>
                    </div>
                    <div class="otherbox">
                        <div class="otherbox1 d-f j-c-sb" v-for="(item1,index1) in item.products" :key="index1">
                            <div class="m-l-10">{{item1.name}}</div>
                            <div>
                                <span class="obfs">¥{{item1.price}}</span>
                                <span>起</span>
                                <img class="rightimg" src="../../../public/image/right.png" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    onMounted,
} from "vue";
import {
    useRoute
} from "vue-router";
import api from "@/http/api";
interface Data {
    value1: number;
    reslevel: string;
    asset: string;
    brand: string;
    type: string;
    name: string;
    scenics: string[];
    flag: boolean;
    flag1: boolean;
    choseNum: string;
    adpt: string;
    children: string;
    city: number;
    hotellist: string[];
    choselist: string[];
    cityname: string;
    levellist: string[];
    assets: string[];
    brands: string[];
    types: string[];
    checkedlevel: boolean;
    checkedbrand: boolean;
    checkedasset: boolean;
    checkedtype: boolean;
}
export default defineComponent({
    city: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        const data: Data = reactive < Data > ({
            name: "",
            value1: 4000,
            reslevel: "",
            asset: "",
            brand: "",
            type: "",
            scenics: [],
            flag: false,
            flag1: false,
            choseNum: "",
            adpt: "",
            children: "",
            city: 0,
            hotellist: [],
            cityname: "",
            choselist: [],
            levellist: [],
            assets: [],
            brands: [],
            types: [],
            checkedlevel: false,
            checkedbrand: false,
            checkedasset: false,
            checkedtype: false,
        });
        const getCity = (name: string) => {
            api
                .getcities({
                    name: name
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    data.scenics = res.data;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    res.data.map((item: any) => {
                        data.city = item.id;
                    });
                    console.log(data.city);
                    api
                        .getHotel({
                            city: data.city
                        })
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .then((res: any) => {
                            data.hotellist = res.data;
                            console.log(res);
                        })
                        .catch();
                })
                .catch();
        };
        const gethotel = (city: number) => {
            api
                .getHotel({
                    city: city
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .then((res: any) => {
                    console.log(res);
                })
                .catch();
        };
        const openhigeht = () => {
            data.flag = true;
        };
        const opendown = () => {
            data.flag = false;
        };
        const openbox = () => {
            data.flag1 = !data.flag1;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange = (value: any) => {
            data.adpt = value;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filterOption = (input: any, option: any) => {
            return (
                option.componentOptions.children[0].text
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange1 = (value: any) => {
            data.children = value;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filterOption1 = (input: any, option: any) => {
            return (
                option.componentOptions.children[0].text
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
        };
        const choseend = () => {
            data.choseNum = data.adpt + data.children;
            data.flag1 = false;
        };
        const onChange = (value: number) => {
            console.log("change: ", value);
        };
        const onAfterChange = (value: number) => {
            console.log("afterChange: ", value);
            data.value1 = value;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const choseitem = (item: any) => {
            data.cityname = item.name;
        };
        const onSearch = (searchText: string) => {
            if (data.cityname !== null) {
                data.cityname = searchText;
                api
                    .getcities({
                        name: data.cityname
                    })
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .then((res: any) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        res.data.map((item: any) => {
                            data.choselist.push(item.name);
                        });
                    })
                    .catch();
            }
        };
        const onSelect = (value: string) => {
            console.log("onSelect", value);
        };
        const onChange1 = (value: string) => {
            data.cityname = value;
        };
        //选中level
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handlelevel = (item: any) => {
            data.checkedlevel = true;
            console.log(item);
            data.reslevel = `已选择${item.name}`;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handletype = (item: any) => {
            data.checkedtype = true;
            data.type = `已选择${item.name}`;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleasset = (item: any) => {
            data.checkedasset = true;
            console.log(item);
            data.asset = `已选择${item.name}`;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handlebrand = (item: any) => {
            data.checkedbrand = true;
            console.log(item);
            data.brand = `已选择${item.name}`;
        };

        const route = useRoute();
        //获取传递过来的值
        onMounted(() => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            data.name = route.query.msgs!as string;
            // eslint-disable-next-line no-undef
            const map = new AMap.Map("container", {
                zoom: 12, //层级
            });
            console.log(map);
            // eslint-disable-next-line no-undef
            const marker: any = new AMap.Marker({
                // eslint-disable-next-line no-undef
                position: new AMap.LngLat(104.259259, 30.562096), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                title: "成都",
            });
            map.add(marker);
            if (route.query.msgs!as string) {
                getCity(data.name);
            } else {
                getCity("成都");
            }
            api
                .getoptions()
                .then((res: any) => {
                    data.levellist = res.data.levels;
                    data.levellist.map((item: any) => {
                        item.checked = false;
                    });
                    data.types = res.data.types;
                    data.types.map((item: any) => {
                        item.checked = false;
                    });
                    data.assets = res.data.assets;
                    data.assets.map((item: any) => {
                        item.checked = false;
                    });
                    data.brands = res.data.brands;
                    data.brands.map((item: any) => {
                        item.checked = false;
                    });
                })
                .catch();
        });

        return {
            ...toRefs(data),
            getCity,
            gethotel,
            openhigeht,
            opendown,
            openbox,
            handleChange,
            filterOption,
            handleChange1,
            filterOption1,
            choseend,
            onChange,
            onAfterChange,
            choseitem,
            onSearch,
            onSelect,
            onChange1,
            handlelevel,
            handletype,
            handleasset,
            handlebrand,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '../../../public/style/style.css';

.hotelbox {
    width: 1000px;
}

.topbox {
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.searchbox {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
}

.citybox {
    width: 200px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
}

.timebox {
    width: 350px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 15px;
    position: relative;
}

.peobox {
    width: 217px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
}

.l-box {
    width: 589px;
    height: 260px;
}

.r-box {
    width: 420px;
    height: 260px;
}

#container {
    width: 420px;
    height: 260px;
}

.lbposition {
    width: 60px;
    min-height: 60px;
}

.lbposition1 {
    width: 60px;
    min-height: 60px;
    position: relative;
}

.sloatas {
    position: absolute;
    top: -4px;
    right: 16px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgb(204, 204, 204);
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.lbwords {
    width: 514px;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

.lbwords1 {
    width: 514px;
    display: flex;
    flex-wrap: wrap;
}

.itembox {
    padding: 2 2px;
    font-size: 14px;
    margin-top: 5px;
}

.imgss {
    width: 14px;
    height: 14px;
}

.fs14 {
    font-size: 14px;
}

.imgtime {
    width: 16px;
    height: 16px;
    margin-left: 10px;
}

.chosebox {
    position: absolute;
    top: 50px;
    width: 300px;
    border: 1px solid #ccc;
    z-index: 99;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.chose1box {
    position: absolute;
    top: 50px;
    width: 200px;
    min-height: 100px;
    border: 1px solid #ccc;
    z-index: 99;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.chosebox1 {
    width: 95%;
    height: 95%;
}

.chtopbox {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.chbtbox {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

//条件搜索部分
.searchBox {
    width: 998px;
    height: 78px;
    border: 1px solid #ccc;
    border-radius: 5px;
    justify-content: center;
}

.searchBoxin {
    width: 95%;
    height: 95%;
    display: flex;
    font-size: 16px;
}

.moneybox {
    width: 190px;
    height: 100%;
    border-right: 1px dotted #ccc;
}

.levelbox {
    width: 180px;
    height: 100%;
    border-right: 1px dotted #ccc;
}

.stybox {
    width: 180px;
    height: 100%;
    border-right: 1px dotted #ccc;
}

.shebox {
    width: 180px;
    height: 100%;
    border-right: 1px dotted #ccc;
}

.pinpaibox {
    width: 170px;
    height: 100%;
    border-right: 1px dotted #ccc;
}

.retrunbox {
    width: 100px;
}

//酒店部分
.hotelbox {
    width: 1000px;
}

.hbimgbox {
    width: 320px;
    height: 210px;
}

.imghb {
    width: 320px;
    height: 210px;
}

.hbmsgbox {
    width: 410px;
    margin-left: 10px;
    margin-right: 10px;
}

.otherbox {
    margin-top: 20px;
    margin-left: 10px;
    width: 255px;
}

.hbmsgbox-fs {
    font-size: 20px;
}

.hbmsgbox-fs2 {
    margin-bottom: 10px;
}

.otherbox1 {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}

.obfs {
    margin-bottom: 5px;
    color: orange;
}

.rightimg {
    width: 14px;
    height: 14px;
    margin-right: 40px;
}

.hbmsgfont {
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
}

.ratebox {
    font-size: 14px;
    width: 65%;
    justify-content: space-between;
}

.chose1box1 {
    width: 90%;
}

.choseitem {
    line-height: 40px;
    width: 100%;
    height: 40px;
    font-size: 14px;
}

.rightimgbox {
    display: flex;
    justify-content: flex-end;
}

.inputbox {
    width: 190px;
}

.imgsss {
    width: 16px;
    height: 16px;
}

.chosefont {
    width: 100%;
    display: flex;
    justify-content: center;
}

.chosefont1 {
    width: 90%;
    height: 30px;
    font-size: 12px;
}

.chosefont2 {
    height: 150px;
    overflow: auto;
}

.hotelsearchbox {
    width: 100%;
}
</style>
