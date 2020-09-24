<template>
  <div class="header">
    <div>
     <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
    </div>
    <div class="titles">
      <div class="til" :class="active=== 1 ? 'act' : ''" @click="dianji1">首页</div>
      <div class="til" :class="active=== 2 ? 'act' : ''" @click="dianji2">攻略</div>
      <div class="til" :class="active=== 3 ? 'act' : ''" @click="dianji3">酒店</div>
      <div class="til" :class="active=== 4 ? 'act' : ''" @click="dianji4">国内机票</div>
    </div>
    <div class="buttom" @click="tologin">
      <div>登录/注册</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
import {useRouter} from 'vue-router'

interface Data {
  active: number;
}
export default defineComponent({
  name: "top",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const router = useRouter()
    const data: Data = reactive<Data>({
      active: 1
    });

    const dianji1 =(): void =>{

    data.active=1
   router.push('/home')

    };
const tologin =(): void =>{
    router.push('/login')
};

    const dianji2 =(): void=>{
        data.active=2
        router.push('/strategy')
    };

      const dianji3 =(): void=>{
        data.active=3
        router.push('/hotel')
    };

      const dianji4 =(): void=>{
        data.active=4
        router.push('/air')
    }
    return {
      ...toRefs(data),
      dianji1,
dianji2,
dianji3,
dianji4,
tologin,
    };
  }
});
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 60px;
  border: 1px solid #eeeeee;
  display: flex;
}
.titles {
  display: flex;
  line-height: 60px;
  justify-content: space-between;

  .til {
    padding: 0px 20px 0px 20px;
    margin-left: 20px;
  }
}
.til:hover {
  color: skyblue;
  border-bottom: 4px solid blue;
  cursor: pointer;
}
.tb {
  height: 50px;
  margin-left: 150px;
  margin-top: 5px;
}
.buttom {
  margin-left: 300px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  line-height: 60px;
}
.buttom:hover {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
.act {
  background-color: blue;
  color: white;
}
</style>