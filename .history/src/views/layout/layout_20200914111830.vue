<template>
  <div>
    <!-- 头部组件-->
    <top></top>

    <!--底部组件 -->
    <butta></butta>
  </div>
</template>

<script lang="ts">
import top from "../../components/layouts/top.vue";
import butta from "../../components/layouts/butta.vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {
    top,
    butta,
  },
  setup(props, ctx: SetupContext) {
    //let data: Data = reactive<Data>({
    //})
    return {
      //...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
</style>