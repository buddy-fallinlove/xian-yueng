<template>
 <div class="detailBox">
<a-row type="flex" justify="space-between">
<!-- 左边栏 -->
<div class="detailLeft">

</div>
</a-row>
 </div>
</template>

<script lang="ts">
import api from "@/http/api";
import {defineComponent, reactive, toRefs, SetupContext, onMounted} from 'vue'
import { useRoute } from 'vue-router';
// console.log(useRouter)
interface Data {
  id: string | number;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setup(props, ctx: SetupContext){
  // console.log(props)
  // console.log(ctx)
  const route = useRoute()
const data: Data = reactive<Data>({
  id:""
      
})

onMounted(() => {
  if(route.query.id){
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    data.id =route.query.id! as string;
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
api.getxiangqing({id :data.id}).then((res: any)=>{
  console.log(res)
}).catch((err)=>{
console.log(err)
})
})

return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
@import '@/styles/detail.scss'
</style>