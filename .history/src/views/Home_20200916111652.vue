<template>
  <div class="container">
    <!-- 幻灯片 -->
    <a-carousel :interval="5000" arrow="always">
      <a-carousel-item v-for="(item, index) in lunbo" :key="index">
        <div :style="` center center no-repeat;background-size:contain contain;`"></div>
        <img class="banner-image" :src="`http://157.122.54.189:9095${item.url}`" alt />
      </a-carousel-item>
    </a-carousel>
    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <a-row type="flex" class="search-tab">
          <span v-for="(item,index) in options" 
          :key="index"
          :class="{active: index===current}"
          @click="handleOption(index)"
           >
          <i>{{item.name}}</i>
          </span>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import api from "../http/api";
import { useRouter } from "vue-router"
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";


interface OptionsItem {
  name: string;
  placeholder: string;
  pageUrl: string;
}
interface Data {
  lunbo: List[];
  options: OptionsItem[];
   current: number;
}
interface List {
  url: string;
  desc: string;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      lunbo: [],
      options: [
        {
          name: "攻略",
          placeholder: "搜索城市",
          pageUrl: "/post?city=",
        },
        {
          name: "酒店",
          placeholder: "请输入城市搜索酒店",
          pageUrl: "/hotel?city=",
        },
        {
          name: "机票",
          placeholder: "请输入出发地",
          pageUrl: "/air",
        },
      ],
       current: 0// 当前选中的选项
    });
    //获取轮播图
    onMounted(() => {
      api
        .getBanners()
        .then((res: any) => {
          console.log(res);
          data.lunbo = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    const handleOption =(index: number): void=>{
      data.current=index
              // 判断如果点击的是机票栏则直接跳转
        if(index===2){
          router.push('/air')
        }

    }
    const router  = useRouter()
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;

  /deep/ .a-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 700px;
  }

  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px transparent solid;

    .search-bar {
      width: 552px;
      margin: 0 auto;
    }

    .search-tab {
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #eee;
        }
      }

      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;

        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }

        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }

    .search-input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;

      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }

      .a-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>