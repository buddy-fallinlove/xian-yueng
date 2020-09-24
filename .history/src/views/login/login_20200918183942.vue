<template>
  <!-- 登录/注册页 -->
  <div>
    <img src="http://157.122.54.189:9095/assets/images/th03.jfif" alt class="img" />
    <div class="ding">
      <div class="d-f">
        <div class="log" :class="active===0 ? 'logins':''" @click="login">登录</div>
        <div class="renter" :class="active===1 ? 'logins':''" @click="register">注册</div>
      </div>
      <!-- 登录 -->
      <div v-if="active === 0" class="some">
        <div class="rules">
          <a-form
            ref="ruleForms"
            :model="forms"
            :rules="ruless"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <!-- 用户名 -->
            <a-form-item ref="name" name="name">
              <a-input v-model:value="forms.name" placeholder="用户名手机" />
            </a-form-item>
            <!-- 密码 -->
            <a-form-item ref="passwords" name="passwords">
              <a-input v-model:value="forms.passwords" placeholder="密码" type="password" />
            </a-form-item>
          </a-form>
          <div class="flex">忘记密码</div>
          <a-button type="primary" class="lu" @click="gohome">登录</a-button>
        </div>
      </div>
      <!-- 注册 -->
      <div v-else class="somes">
        <div class="lang">
          <a-form
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <!-- 用户名手机 -->
            <a-form-item ref="tells" name="tells">
              <a-input v-model:value="form.tells" placeholder="用户名手机" />
            </a-form-item>
            <!-- 验证码 -->
            <a-form-item ref="captcha" name="captcha">
              <div class="d-f">
                <a-input v-model:value="form.captcha" placeholder="验证码" />
                <a-button type="primary" @click="code">发送验证码</a-button>
              </div>
            </a-form-item>
            <!-- 昵称 -->
            <a-form-item ref="nickname" name="nickname">
              <a-input v-model:value="form.nickname" placeholder="昵称" />
            </a-form-item>
            <!-- 密码 -->
            <a-form-item ref="password" name="password">
              <a-input v-model:value="form.password" placeholder="密码" type="password" />
            </a-form-item>
            <!-- 确认密码 -->
            <a-form-item ref="pass" name="pass">
              <a-input v-model:value="form.pass" placeholder="确认密码" type="password" />
            </a-form-item>
          </a-form>
          <a-button type="primary" class="lu" @click="registers">注册</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// 引入router
import { useRouter } from "vue-router";
import api from "@/http/api";
import { defineComponent, reactive, toRefs, SetupContext, ref } from "vue";
import {
  FormItem,
  Rules,
  FormItems,
  RuleItem,
  Ruless,
  Users,
  Datas,
  Result,
  Face,
} from "@/views/login/type";
import { message } from "ant-design-vue";
// 定义数据类型
interface Data {
  active: number;
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
  setup(props, ctx: SetupContext) {
    // router 跳转路由定义
    const router = useRouter();
    //   定义初始化变量
    const data: Data = reactive<Data>({
      active: 0,
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
            validator: (rule: any, value: any) => {
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
    // 点击事件加赋值
    const login = (): void => {
      data.active = 0;
    };
    const register = (): void => {
      data.active = 1;
    };
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
            .then((res: Result) => {
              console.log(res);
              data.forms.name = res.user.username;
              router.push("login");
              data.active = 0;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error: any) => {
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
            .then((res: Users) => {
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
        .catch((error: any) => {
          console.log("error", error);
        });
    };
    return {
      ...toRefs(data),
      login,
      register,
      registers,
      code,
      ruleForm,
      ruleForms,
      gohome,
    };
  },
});
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 700px;
}
.ding {
  position: absolute;
  left: 500px;
  top: 200px;
}
.log {
  width: 200px;
  height: 50px;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
}
.renter {
  width: 200px;
  height: 50px;
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
}
.logins {
  background: white;
  border-top: 3px solid rgb(255, 165, 0);
  color: rgb(255, 165, 0);
}
.some {
  width: 400px;
  height: 250px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.somes {
  width: 400px;
  height: 400px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rules {
  width: 350px;
  height: 230px;
}
.flex {
  display: flex;
  justify-content: flex-end;
  color: rgb(24, 144, 255);
}
.lu {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
}
.lang {
  width: 350px;
  height: 380px;
}
</style>