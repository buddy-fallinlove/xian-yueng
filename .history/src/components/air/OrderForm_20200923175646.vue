<template>
<div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs,
    SetupContext
} from 'vue'
// interface Data {
// }
export default defineComponent({
    name: '',
    props: {},
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
