<template>
  <div>
    <!-- -->
    <top></top>
  </div>
</template>

<script lang="ts">
import top from "../../components/layouts/top.vue";
// import footer from "../../components/layouts/footer.vue";
import { defineComponent, reactive, toRefs, SetupContext } from "vue";
// interface Data {
// }
export default defineComponent({
  name: "",
  props: {},
  components: {
    top,
    // footer,
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