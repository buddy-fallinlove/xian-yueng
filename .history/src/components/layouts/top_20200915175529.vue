<template>
  <div>
    <header class="header">
      <a-row type="flex" justify="space-between" class="main">
        <!-- logo -->
        <div class="logo">
          <a href="/">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
          </a>
        </div>

        <!-- 菜单栏 -->
        <a-row type="flex" class="navs">
          <div>
            <a href="/">首页</a>
          </div>
          <div>
            <a href="/post">旅游攻略</a>
          </div>
          <div>
            <a href="/hotel">酒店</a>
          </div>
          <div>
            <a href="/rea">国内机票</a>
          </div>
        </a-row>
        <a-row>
          <a href="/login" class="account-link">登录 / 注册</a>
        </a-row>
      </a-row>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    //let data: Data = reactive<Data>({
    //})
    return {
      //...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.header {
  height: 60px;
  line-height: 60px;
  background: #fff;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;

  .main {
    width: 1000px;
    margin: 0 auto;
  }

  .logo {
    width: 156px;
    padding-top: 8px;

    img {
      display: block;
      width: 100%;
    }
  }

  .navs {
    margin: 0 20px;
    flex: 1;

    a {
      display: block;
      padding: 0 20px;
      height: 60px;
      box-sizing: border-box;
      text-decoration: none;
      color: #000;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 5px #409eff solid;
        color: #409eff;
      }
    }

    /deep/ .a-exact-active {
      background: #409eff;
      color: #fff !important;
    }
  }

  .message {
    height: 36px;
    line-height: 1;
    cursor: pointer;
    .el-icon-bell {
      margin-right: 2px;
      font-size: 18px;
    }
  }

  .el-dropdown-link {
    margin-left: 20px;

    &:hover {
      img {
        border-color: #409eff;
      }
    }

    a {
      display: block;
    }

    img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      border: 2px #fff solid;
      border-radius: 50px;
    }
  }

  .account-link {
    font-size: 14px;
    margin-left: 10px;
    text-decoration: none;
    color: #666;

    &:hover {
      color: #409eff;
      text-decoration: underline;
    }
  }
}
</style>