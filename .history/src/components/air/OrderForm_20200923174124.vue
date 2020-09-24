<template>
<div class="main">
    <!-- 乘机人 -->
    <div class="air-column">
        <h2>乘机人</h2>
        <a-form class="member-info">
            <div class="member-info-item" v-for="(item,index) in users" :key="index">
                <a-form-item label="乘机人类型">
                    <a-input placeholder="姓名" class="input-with-select" v-model="item.username">
                        <a-select slot="prepend" value="1" placeholder="请选择">
                            <a-option label="成人" value="1"></a-option>
                        </a-select>
                    </a-input>
                </a-form-item>
                <a-form-item label="证件类型">
                    <a-input placeholder="证件号码" class="input-with-select" v-model="item.id">
                        <a-select slot="prepend" value="1" placeholder="请选择">
                            <a-option label="身份证" value="1" :checked="true"></a-option>
                        </a-select>
                    </a-input>
                </a-form-item>
                <span class="delete-user" @click="handleDeleteUser(index)">-</span>
            </div>
        </a-form>

    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Data {}
export default defineComponent({
    name: '',
    props: {
        data: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    components: {

    },
    setup(props, ctx: SetupContext) {

        //const data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
        }
    },
})
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
