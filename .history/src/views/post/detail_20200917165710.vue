/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
<template>
 <div>
123123
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
    console.log(data.id)
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

</style>