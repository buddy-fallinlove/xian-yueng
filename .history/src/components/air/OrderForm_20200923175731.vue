<template>
<div>

</div>
</template>

<script lang="ts">
// 引入router
import {
    useRouter,
    useRoute
} from "vue-router";
import router from "@/router";
import api from "@/http/api";
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext,
    ref
} from "vue";
import {
    FormItem,
    Rules,
    RuleItem
} from "@/views/order/type";
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
                .catch((error: any) => {
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
.centers {
    width: 100%;
    display: flex;
    justify-content: center;
}

.box {
    width: 1200px;
    display: flex;
    justify-content: space-between;
}

.box-a {
    width: 800px;
}

.box-b {
    width: 350px;
}

.font {
    padding: 20px 0px;
    font-size: 20px;
    font-weight: 700;
}

.fonts {
    padding: 10px 0px;
}

.ipt {
    width: 800px;
    height: 45px;
    border: 1px solid #ccc;
    padding: 0px 15px;
    border-radius: 5px;
}

.size {
    padding: 10px 0px;
}

/deep/.ant-select-selection--single {
    width: 150px;
    height: 45px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.texts {
    width: 650px;
    height: 45px;
    border: 1px solid #ccc;
    padding: 0px 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: transparent;
}

/deep/.ant-select-selection__rendered {
    line-height: 45px;
}

.dashed {
    width: 800px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 40px 0px;
    border-top: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
}

.checked {
    width: 280px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.dash {
    width: 800px;
    border: 0.5px dashed #ddd;
    margin-top: 40px;
}

.fa {
    height: 45px;
}

.iptsed {
    width: 200px;
    height: 45px;
}

.ipts {
    width: 300px;
    height: 45px;
    border-radius: 5px;
}

.btn {
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(235, 181, 99);
    color: white;
    border-radius: 5px;
}

.kuan {
    width: 350px;
    height: 120px;
    border: 1px solid #ccc;
    border-bottom: transparent;
    margin-top: 25px;
    padding: 15px;
}

.gao {
    width: 350px;
    height: 40px;
    border: 1px dashed #ccc;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.gaos {
    width: 350px;
    height: 40px;
    border: 1px dashed #ccc;
    border-top: transparent;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.gai {
    width: 350px;
    height: 60px;
    border: 1px solid #ccc;
    border-top: transparent;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.fs {
    font-size: 22px;
    color: rgb(235, 181, 99);
}
</style>
