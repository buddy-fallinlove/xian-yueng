<template>
  <div class="detailBox">
    <a-row type="flex" justify="space-between">
      <!-- 左边栏 -->
      <div class="detailLeft">
        <a-breadcrumb separator="/">
          <a-breadcrumb-item>
            <a href="/post">旅游攻略</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>攻略详情</a-breadcrumb-item>
        </a-breadcrumb>
        <div v-for="(item,index) in wenzhang" :key="index">
          <!-- 标题 -->
          <h1 class="detailTitle">{{item.title}}</h1>
                    <!-- 说明 -->
            <div class="detailInfo">
                <span>发布时间：{{item.city.created_at}}</span>
                <span>阅读：{{item.watch}}</span>
            </div>
        </div>
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
  id: string | number;
  wenzhang: string[];
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
      wenzhang:[],
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
          data.wenzhang = res.data;
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