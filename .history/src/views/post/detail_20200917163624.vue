<template>
 <div>
123123
 </div>
</template>

<script lang="ts">
import api from "@/http/api";
import {defineComponent, reactive, toRefs, SetupContext, onMounted} from 'vue'
import { useRouter } from "vue-router"
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
const data: Data = reactive<Data>({
  id:""
      
})
const router = useRouter()
onMounted(() => {
  if(router.query.id){
    console.log(data.id)
  }

})

return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>