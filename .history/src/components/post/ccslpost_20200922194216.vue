<template>
<div class="post-ctrl">
    <a-row type="flex" justify="center">
        <div class="ctrl-item">
            <i>
                <FormOutlined />
            </i>
            <p>评论</p>
        </div>
        <div class="ctrl-item">
            <i>
                <StarOutlined />
            </i>
            <p>收藏</p>
        </div>
        <div class="ctrl-item">
            <i>
                <ShareAltOutlined />
            </i>
            <p>分享</p>
        </div>
        <div class="ctrl-item">
            <i>
                <LikeOutlined />
            </i>
            <p>点赞</p>
        </div>

    </a-row>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    SetupContext
} from 'vue'
// interface Data {
// }
export default defineComponent({
    name: '',
    props: {
        wenzhang: {
            type: Object,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: {}
        }
    },
    components: {

    },
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
.post-ctrl {
    padding: 50px 0 30px;

    .ctrl-item {
        margin: 0 20px;
        font-size: 20px;
        cursor: pointer;
        text-align: center;

        i {
            display: block;
            font-size: 28px;
            color: orange;

            &.active {
                color: skyblue
            }
        }

        p {
            color: #999;
            margin-top: 5px;
            font-size: 14px;
        }
    }
}
</style>
