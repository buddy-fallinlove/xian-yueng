<template>
 <div>
<a-form>

</a-form>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
// interface Data {
// }
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
    .a-button{
        width: 112px;
    }
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>