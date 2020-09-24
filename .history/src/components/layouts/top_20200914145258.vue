<template>
  <div>
    <header class="header">
      <a-row type="flex" justify="space-between" class="main">
        <!--logo-->
        <div class="logo">
          <div to="/">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
          </div>
        </div>
        <a-row type="flex" class="navs">
          <div class="box">首页</div>
          <div class="box">旅游攻略</div>
          <div class="box">酒店</div>
          <div class="box">国内机票</div>
        </a-row>
      </a-row>
            <!-- 登录/用户信息 -->
            <a-row type="flex" align="middle">
                <!-- 如果用户存在则展示用户信息，用户数据来自store -->
                <a-dropdown v-if="$store.state.user.userInfo.token">
                    <a-row type="flex" align="middle" class="a-dropdown-link">
                        <nuxt-link to="#">
                            <img :src="$axios.defaults.baseURL+$store.state.user.userInfo.user.defaultAvatar"/>
                            {{$store.state.user.userInfo.user.nickname}}
                        </nuxt-link>
                        <i class="a-icon-caret-bottom a-icon--right"></i>
                    </a-row>
                    <a-dropdown-menu>
                        <a-dropdown-item>
                            <div @click="handlaogout">退出</div> 
                        </a-dropdown-item>
                    </a-dropdown-menu>
                </a-dropdown>

                <!-- 不存在用户信息展示登录注册链接 -->
                <nuxt-link to="/user/login" class="account-link" v-ase>
                    登录 / 注册
                </nuxt-link>
            </a-row>
    </header>
  </div>
</template>

// <script>
// export default {
//     methods: {
//         // 用户退出
//         handleLogout(){
//             this.$message.success('退出成功~')
//             // 退出登录重置vuex中的数据
//             this.$store.commit('user/setUserInfo',{})
//             // 退出登录后跳转回登录页面
//             this.$router.push('/user/login')
//         }
//     }
// }

// </script>
<script lang="ts">
// import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// // interface Data {
// // }
// export default defineComponent({
//   name: "",
//   props: {},
//   components: {},
//   setup(props, ctx: SetupContext) {
//     //let data: Data = reactive<Data>({
//     //})
//     return {
//       //...toRefs(data),
//     };
//   },
// });
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

    .box {
      display: block;
      padding: 0 20px;
      height: 60px;
      box-sizing: border-box;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 5px #409eff solid;
        color: #409eff;
      }
    }

    /deep/ .div-exact-active {
      background: #409eff;
      color: #fff !important;
    }
  }

  .message {
    height: 36px;
    line-height: 1;
    cursor: pointer;
    .a-icon-bal {
      margin-right: 2px;
      font-size: 18px;
    }
  }

  .a-dropdown-link {
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
    color: #666;

    &:hover {
      color: #409eff;
      text-decoration: underline;
    }
  }
}
</style>