<template>
<div>
    <!-- 头部组件-->
    <top></top>
    <!-- 内容占位组件 -->
    <router-view></router-view>
    <!--底部组件 -->
    <butta></butta>
</div>
</template>

<script lang="ts">
import top from "../../components/layouts/top.vue";
import butta from "../../components/layouts/butta.vue";
import {
    defineComponent,
    SetupContext
} from "vue";
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

<style lang="scss" scoped>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

ul,
li,
ol {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {}

em,
i {
    font-style: normal;
}
</style>
