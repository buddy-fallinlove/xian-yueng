
<template>
  <div class="container">
    <a-carousel autoplay>
      <div v-for="(item,index) in lunbo" :key="index">
        <img class="bg" :src="`http://157.122.54.189:9095${item.url}`" alt />
      </div>
    </a-carousel>

    <div class="sea">
      <div>
      <div v-for="(item,index) in options" :key="index">{{item.title}}</div>
      </div>
      <a-input-search
        v-model="value"
        placeholder="input search text"
        style="width: 550px"
        size="large"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted
} from "vue";
import api from "../http/api";
interface Data {
  lunbo: List[];
  total: number;
  value: string;
  options: object[];
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
      total: 0,
      value: "",
      options: [
        {
          title: "攻略",
          placeholder: "搜索城市"
        },
        {
          title: "酒店",
          placeholder: "请输入城市搜索酒店"
        },
        {
          title: "机票",
          placeholder: "请输入触发地"
        }
      ]
    });
    //获取轮播图
    onMounted(() => {
      api
        .getBanners()
        .then((res: any) => {
          console.log(res);
          data.lunbo = res.data;
        })
        .catch((err: any) => {
          console.log(err);
        });
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style scoped lang='scss'>
.bg {
  width: 100%;
  height: 600px;
}
.container {
  position: relative;
}
.sea {
  position: absolute;
  top: 300px;
  left: 355px;
  height: 80px;
  width: 555px;
  border: 1px solid white;
}
</style>