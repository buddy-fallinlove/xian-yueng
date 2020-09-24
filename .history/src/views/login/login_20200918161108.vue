<template>
  <div class="container">
    <!-- 主要内容 -->
    <a-row type="flex" justify="center" align="middle" class="main">
      <div class="form-wrapper">
        <!-- 表单头部tab -->
        <a-row type="flex" justify="center" class="tabs">
          <span
            :class="{active: current === index}"
            v-for="(item,index) in [`登录`,`注册`]"
            :key="index"
            @click="handleChangeTab(index)"
          >{{item}}</span>
        </a-row>
      </div>
    </a-row>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
interface Data {
  current: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      current: 0,
    });
    const handleChangeTab = (index: never): void=>{
       data.current = index;
    }
    return {
      ...toRefs(data),
      handleChangeTab
    };
  },
});
</script>

<style scoped lang='scss'>
.container {
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  min-width: 1000px;

  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .form-wrapper {
      width: 400px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;

      .tabs {
        span {
          display: block;
          width: 50%;
          height: 50px;
          box-sizing: border-box;
          border-top: 2px #eee solid;
          background: #eee;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          color: #666;

          &.active {
            color: orange;
            border-top-color: orange;
            background: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>