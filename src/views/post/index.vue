<template>
<div>
    <section class="container">
        <a-row type="flex" justify="space-between">
            <!-- 左边栏组件 -->
            <a-col class="menuBox">
                <LeftPost></LeftPost>
            </a-col>
            <!-- 右边栏组件 -->
            <a-col class="sosuoBox">
                <RightPost></RightPost>
            </a-col>
        </a-row>
    </section>
</div>
</template>

<script lang="ts">
import LeftPost from '../../components/post/LeftPost.vue'
import RightPost from '../../components/post/RightPost.vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
    defineComponent,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reactive,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toRefs,
    SetupContext
} from 'vue'
//interface Data {
//}
export default defineComponent({
    name: '',
    props: {},
    components: {
        LeftPost,
        RightPost

    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setup(props, ctx: SetupContext) {

        //let data: Data = reactive<Data>({
        //})
        return {
            //...toRefs(data),
        }
    },
})
</script>

<style lang="scss" scoped>
.container {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;

    // 左边栏
    .menuBox {
        width: 260px;
        box-sizing: border-box;
    }

    // 右边栏搜索框
    .sosuoBox {
        width: 700px;
    }
}
</style>
