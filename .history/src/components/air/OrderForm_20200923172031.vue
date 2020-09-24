<template>
<div class="main">

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
</style>
