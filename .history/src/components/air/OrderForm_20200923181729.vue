<template>
<div class="main">
    <div class="air-column">
        <h2>乘机人</h2>
        <div class="fonts">乘机人</div>
        <input type="text" placeholder="姓名" class="ipt" />
        <div class="size">证件类型</div>
        <div style=" display: flex;">
            <a-select label-in-value v-model:value="value" style="width: 150px" @change="handleChange">
                <a-select-option value="身份证">身份证</a-select-option>
                <a-select-option value="护照">护照</a-select-option>
            </a-select>
            <div>
                <input type="text" placeholder="证件号码" class="texts" />
            </div>
        </div>
        <div class="dashed">
            <a-button type="primary">添加乘机人</a-button>
        </div>
        <div class="font">保险</div>
        <div class="checked">
            <a-checkbox v-model:checked="checked"></a-checkbox>
            <div>航空意外险: ￥30/份x1 最高赔付260万</div>
        </div>
        <div class="checked" style=" margin-top: 20px;">
            <a-checkbox v-model:checked="checkeds"></a-checkbox>
            <div>航空延误险: ￥30/份x1 最高赔付300万</div>
        </div>
        <div class="dash"></div>
        <div class="font">联系人</div>
        <!-- 联系人 -->
        <div>
            <a-form ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
                <!-- 姓名 -->
                <a-form-item ref="name" name="name" label="姓名">
                    <a-input v-model:value="form.name" class="ipts" />
                </a-form-item>
                <!-- 手机 -->
                <a-form-item ref="tell" name="tell" label="手机">
                    <div style=" display: flex;">
                        <a-input v-model:value="form.tell" class="iptsed" />
                        <a-button type="primary" @click="code" class="fa">发送验证码</a-button>
                    </div>
                </a-form-item>
                <!-- 验证码 -->
                <a-form-item ref="code" name="code" label="验证码">
                    <a-input v-model:value="form.code" class="ipts" />
                </a-form-item>
            </a-form>
        </div>
        <div class="btn" @click="order">提交订单</div>
    </div>
</div>
</template>

<script lang="ts">
// 引入router
import {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useRouter,
    useRoute
} from "vue-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import router from "@/router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import api from "@/http/api";
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref
} from "vue";
import '../../../server/apidoc/css/style.css';
import {
    FormItem,
    Rules,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    RuleItem
} from "@/views/rea/type";
interface Data {
    value: object;
    checked: boolean;
    checkeds: boolean;
    form: FormItem;
    rules: Rules;
    item: object;
}
export default defineComponent({
    name: "",
    props: {},
    components: {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {
        // router 跳转路由定义
        const route = useRoute();
        const data: Data = reactive < Data > ({
            item: {},
            value: {
                key: "身份证"
            },
            checked: false,
            checkeds: false,
            form: {
                name: "",
                tell: "",
                code: "",
            },
            //  表单验证规则
            rules: {
                name: [{
                        required: true,
                        message: "联系人不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 2,
                        max: 6,
                        message: "2到6位姓名",
                        trigger: "blur",
                    },
                ],
                tell: [{
                        required: true,
                        message: "手机号不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 11,
                        max: 11,
                        message: "手机号必须是11位",
                        trigger: "blur"
                    },
                ],
                code: [{
                        required: true,
                        message: "验证码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 6,
                        message: "验证码必须是6位",
                        trigger: "blur"
                    },
                ],
            },
        });
        // 接受传过来的数据
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        data.item = JSON.parse(route.query.item!as string);
        console.log(data.item);
        const ruleForm = ref();
        // 点击提交表单验证
        const order = (): void => {
            ruleForm.value
                .validate()
                .then(() => {
                    // console.log('values', this.form);
                })
                .catch((error: unknown) => {
                    console.log("error", error);
                });
        };

        return {
            ...toRefs(data),
            ruleForm,
            order,
        };
    },
});
</script>

<style lang="scss" scoped>
.yanzhengbtn {
    width: 112px;
}

.air-column {
    border-bottom: 1px #ddd dashed;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.air-column h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: normal;
}

/deep/ .el-select .el-input {
    width: 130px;
}

.input-with-select {
    width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
    background-color: #fff;
}

.member-info /deep/ .el-form-item {
    margin-bottom: 0;
}

.member-info-item {
    border-bottom: 1px #eee dashed;
    padding-bottom: 20px;
    position: relative;

    &:first-child {
        .delete-user {
            display: none;
        }
    }
}

.add-member {
    margin-top: 20px;
}

.delete-user {
    display: block;
    background: #ddd;
    width: 16px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    line-height: 16px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    position: absolute;
    right: -30px;
    top: 50%;
}

.insurance {
    >div {
        margin-top: 10px;
    }
}

.insurance-item {
    margin-bottom: 20px;
}

.contact {
    /deep/ .el-input {
        width: 50%;
    }
}

.submit {
    margin: 50px auto;
    display: block;
    width: 250px;
    height: 50px;
}
</style>
