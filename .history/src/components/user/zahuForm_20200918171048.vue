<template>
  <div>
    <a-form :model="form" ref="form" :rules="rules" class="form">
      <!-- 手机号码/用户名 输入框 -->
            <a-form-item class="form-item" prop="username">
                <a-input 
                placeholder="用户名/手机"
                v-moda="form.username">
                </a-input>
            </a-form-item>

            <!-- 手机验证码 输入框 -->
            <a-form-item class="form-item" prop="captcha">
                <a-input 
                placeholder="验证码" 
                v-moda="form.captcha">
                    <template slot="append">
                        <a-button :disabled="ison" @click="handleSendCaptcha">
                            {{btninfo}}
                        </a-button>
                    </template>
                </a-input>
            </a-form-item>

            <!-- 昵称 输入框 -->
            <a-form-item class="form-item" prop="nickname">
                <a-input 
                placeholder="你的名字"
                v-moda="form.nickname">
                </a-input>
            </a-form-item>

            <!-- 密码 输入框 -->
            <a-form-item class="form-item" prop="password">
                <a-input 
                placeholder="密码" 
                type="password"
                v-moda="form.password">
                </a-input>
            </a-form-item>

            <!-- 确认密码 输入框 -->
            <a-form-item class="form-item" prop="conpassword">
                <a-input 
                placeholder="确认密码" 
                type="password"
                v-moda="form.conpassword">
                </a-input>
            </a-form-item>

            <a-button 
            class="submit" 
            type="primary" 
            @click="handleRegSubmit">
                注册
            </a-button>
    </a-form>
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
.a-button {
  width: 112px;
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
</style>