<template>
  <div class="detailBox">
    <a-row type="flex" justify="space-between">
      <!-- 左边栏 -->
      <div class="detailLeft">
         <a-breadcrumb separator="/">
    <a-breadcrumb-item><a href="/post">旅游攻略</a></a-breadcrumb-item>
    <a-breadcrumb-item>攻略详情</a-breadcrumb-item>
  </a-breadcrumb>
   <!-- 标题 -->
            <h1 class="detailTitle">{{wenzhang.title}}</h1>
      </div>
    </a-row>
  </div>
</template>

<script lang="ts">
import api from "@/http/api";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
import { useRoute } from "vue-router";
// console.log(useRouter)
interface Data {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  id: string | number;
  wenzhang: object;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, ctx: SetupContext) {
    // console.log(props)
    // console.log(ctx)
    const route = useRoute();
    const data: Data = reactive<Data>({
      id: "",
      wenzhang:{city:{},comments:{}}
    });

    onMounted(() => {
      if (route.query.id) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        data.id = route.query.id! as string;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      api
        .getxiangqing({ id: data.id })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          // eslint-disable-next-line @typescript-eslint/member-delimiter-style
          data.wenzhang= res.data.data.filter((v: { id: never; })=>{
             return v.id==data.route.query.id
          })
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
@import "@/styles/detail.scss";
</style>