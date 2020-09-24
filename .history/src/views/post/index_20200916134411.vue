<template>
 <div>
<section class="container">
<a-row type="flex" justify="space-between">
<a-col class="menuBox">

</a-col>
<a-col class="">

</a-col>
</a-row>
</section>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
//interface Data {
//}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

//let data: Data = reactive<Data>({
//})
return {
//...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.container{
    width:1000px;
    margin:0 auto;
    padding: 20px 0;
    // 左边栏
    .menuBox{
        width: 260px;
        box-sizing: border-box;
    }
    // 右边栏搜索框
    .sosuoBox{
        width: 700px;
    }
}

</style>