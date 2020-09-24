<template>
 <div>
123123
 </div>
</template>

<script lang="ts">
import api from "@/http/api";
import {defineComponent, reactive, toRefs, SetupContext, onMounted} from 'vue'
import { useRouter , useRoute } from 'vue-router';
console.log(useRouter)
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
  const route = useRoute()
const data: Data = reactive<Data>({
  id:""
      
})

onMounted(() => {
  if(route.query.id){
    data.id =route.query.id! as string;
    console.log(data.id)
  }
api.getxiangqing()
})

return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>