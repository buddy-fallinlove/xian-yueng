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
        <!-- 登录功能组件 -->
        <div v-if="current == 0">
          <a-form
            :model="forms"
            ref="ruleForms"
            :rules="ruless"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
          >
            <!-- 用户名-->
            <a-form-item class="form-item" ref="name" name="name">
              <a-input v-model:value="forms.name" placeholder="用户名手机" />
            </a-form-item>
            <!--密码-->
            <a-form-item class="form-item" ref="passwords" name="passwords">
              <a-input v-model:value="forms.passwords" placeholder="密码" type="password" />
            </a-form-item>

            <p class="form-text">
              <a href="#">忘记密码</a>
            </p>

            <a-button class="submit" type="primary" @click="gohome">登录</a-button>
          </a-form>
        </div>
        <!-- 注册功能组件 -->
        <div v-if="current == 1" @zhuce="current=0">
          <el-form
            :model="form"
            ref="ruleForm"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
          >
            <!-- 手机号码/用户名 输入框 -->
            <el-form-item class="form-item" prop="username">
              <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
            </el-form-item>

            <!-- 手机验证码 输入框 -->
            <el-form-item class="form-item" prop="captcha">
              <el-input placeholder="验证码" v-model="form.captcha">
                <template slot="append">
                  <el-button :disabled="ison" @click="handleSendCaptcha">{{btninfo}}</el-button>
                </template>
              </el-input>
            </el-form-item>

            <!-- 昵称 输入框 -->
            <el-form-item class="form-item" prop="nickname">
              <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
            </el-form-item>

            <!-- 密码 输入框 -->
            <el-form-item class="form-item" prop="password">
              <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
            </el-form-item>

            <!-- 确认密码 输入框 -->
            <el-form-item class="form-item" prop="conpassword">
              <el-input placeholder="确认密码" type="password" v-model="form.conpassword"></el-input>
            </el-form-item>

            <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
          </el-form>
        </div>
      </div>
    </a-row>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import api from "@/http/api";
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
import { FormItem, Rules, FormItems, Ruless } from "@/views/login/type";
import { message } from "ant-design-vue";
interface Data {
  current: number;
  //   登录
  forms: FormItems;
  ruless: Ruless;
  //   注册
  form: FormItem;
  rules: Rules;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx: SetupContext) {
    // router 跳转路由定义
    const router = useRouter();
    const data: Data = reactive<Data>({
      current: 0,
      //   登录
      forms: {
        name: "",
        passwords: "",
      },
      ruless: {
        name: [
          { required: true, message: "请输入用户手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "用户手机号必须是11位",
            trigger: "blur",
          },
        ],
        passwords: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "密码6到15位", trigger: "blur" },
        ],
      },
      //   注册
      form: {
        tells: "",
        captcha: "",
        nickname: "",
        password: "",
        pass: "",
      },
      //   注册表单验证规则
      rules: {
        tells: [
          { required: true, message: "请输入用户手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "用户手机号必须是11位",
            trigger: "blur",
          },
        ],
        captcha: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6, max: 6, message: "验证码必须是6位", trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 2, max: 10, message: "昵称2到10位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "密码6到15位", trigger: "blur" },
        ],
        pass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            validator: (rule: unknown, value: unknown) => {
              if (value === "") {
                return Promise.reject("请再次输入密码");
              } else if (value !== data.form.password) {
                return Promise.reject("两次输入的密码不一致");
              } else {
                return Promise.reject();
              }
            },
            trigger: "blur",
          },
        ],
      },
    });
    const ruleForm = ref();
    // 注册请求
    const registers = (): void => {
      ruleForm.value
        .validate()
        .then(() => {
          // console.log('values', this.form);
          api
            .postregister({
              username: data.form.tells,
              nickname: data.form.nickname,
              captcha: data.form.captcha,
              password: data.form.password,
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((res: any) => {
              console.log(res);
              data.forms.name = res.user.username;
              router.push("login");
              data.current = 0;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error: unknown) => {
          console.log("error", error);
        });
    };
    // 验证码
    const code = (): void => {
      api
        .postcaptchas({
          tel: data.form.tells,
        })
        .then((res) => {
          console.log(res);
          message.success("模拟手机验证:000000");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const ruleForms = ref();
    // 登录跳转到首页
    const gohome = (): void => {
      ruleForms.value
        .validate()
        .then(() => {
          // console.log('values', this.form);
          api
            .postlogin({
              username: data.forms.name,
              password: data.forms.passwords,
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((res: any) => {
              console.log(res);
              // 存本地
              localStorage.setItem("token", res.token);
              localStorage.setItem("user", JSON.stringify(res.user));
              router.push("/");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          console.log("error", error);
        });
    };
    const handleChangeTab = (index: never): void => {
      data.current = index;
    };
    return {
      ...toRefs(data),
      handleChangeTab,
      registers,
      code,
      gohome,
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
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
.a-button {
  width: 112px;
}
</style>