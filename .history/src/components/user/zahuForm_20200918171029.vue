<template>
  <div>
    <a-form :model="form" ref="form" :rules="rules" class="form">
      <!-- 手机号码/用户名 输入框 -->
            <el-form-item class="form-item" prop="username">
                <el-input 
                placeholder="用户名/手机"
                v-model="form.username">
                </el-input>
            </el-form-item>

            <!-- 手机验证码 输入框 -->
            <el-form-item class="form-item" prop="captcha">
                <el-input 
                placeholder="验证码" 
                v-model="form.captcha">
                    <template slot="append">
                        <el-button :disabled="ison" @click="handleSendCaptcha">
                            {{btninfo}}
                        </el-button>
                    </template>
                </el-input>
            </el-form-item>

            <!-- 昵称 输入框 -->
            <el-form-item class="form-item" prop="nickname">
                <el-input 
                placeholder="你的名字"
                v-model="form.nickname">
                </el-input>
            </el-form-item>

            <!-- 密码 输入框 -->
            <el-form-item class="form-item" prop="password">
                <el-input 
                placeholder="密码" 
                type="password"
                v-model="form.password">
                </el-input>
            </el-form-item>

            <!-- 确认密码 输入框 -->
            <el-form-item class="form-item" prop="conpassword">
                <el-input 
                placeholder="确认密码" 
                type="password"
                v-model="form.conpassword">
                </el-input>
            </el-form-item>

            <el-button 
            class="submit" 
            type="primary" 
            @click="handleRegSubmit">
                注册
            </el-button>
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