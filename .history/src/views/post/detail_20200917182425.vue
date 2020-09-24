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
            <!-- 内容 -->
            <div class="detailContent" v-html="item.content"></div>
        </div>
      </div>


        <!-- 右边栏 -->
        <div class="detailRight">
            <h4 class="titleRight">相关攻略</h4>
            <div class="listRight">
                <a href="#" class="item">
                    <a-row type="flex" justify="space-between">
                        <img src="http://157.122.54.189:9095/uploads/0261fb2c2d0043e4a30eefae4fd4cd3b.jpg" class="item-img">
                        <div class="item-info">
                          <h5>小哥哥一起来打篮球啊！！！！</h5>
                            <h6>2019-05-22 10:57 阅读：12685</h6>
                        </div>
                    </a-row>
                </a>
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
.detailBox {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    // 左边栏
    .detailLeft {
        width: 700px;
        /deep/.detailContent img {
            margin: 10px 0;
            max-width: 700px!important;
        }
        // 标题
        .detailTitle {
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
        }
        // 说明
        .detailInfo {
            color: #999;
            padding: 20px;
            text-align: right;
            span {
                margin-left: 20px;
            }
        }
        // 收藏点赞
        // 评论列表
        .comment {
            margin-bottom: 20px;
            >h4 {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 20px;
            }
            .comment-input {
                margin-bottom: 10px;
            }
            // 评论列表
            .comment-list {
                margin-top: 30px;
                margin-bottom: 10px;
                border: 1px solid #ddd;
                .comment-item {
                    padding: 20px 20px 5px;
                    border-bottom: 1px dashed #ddd;
                    // 评论人信息
                    .comment-info {
                        color: #666;
                        font-size: 12px;
                        margin-bottom: 10px;
                        img {
                            width: 16px;
                            height: 16px;
                            border-radius: 50%;
                        }
                        i {
                            color: #999;
                        }
                        span {
                            float: right;
                        }
                    }
                    .comment-content {
                        padding-left: 30px;
                        .comment-new {
                            // 评论内容
                            .comment-message {
                                margin-top: 10px;
                            }
                            // 评论内容图片盒子
                            .comment-pic {
                                width: 80px;
                                height: 80px;
                                padding: 5px;
                                overflow: hidden;
                                margin-top: 10px;
                                margin-right: 5px;
                                border-radius: 6px;
                                border: 1px dashed #ddd;
                                /deep/img {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                    cursor: pointer;
                                    object-fit: cover;
                                    -o-object-fit: cover;
                                }
                            }
                            // 鼠标移入显示的回复
                            .comment-ctrl {
                                height: 20px;
                                font-size: 12px;
                                color: #1e50a2;
                                text-align: right;
                                line-height: 20px;
                                &:hover span {
                                    display: inline-block;
                                }
                                span {
                                    display: none;
                                    &:hover {
                                        cursor: pointer;
                                        text-decoration: underline;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /deep/.a-upload-list li,
        /deep/.a-upload {
            width: 100px;
            height: 100px;
            line-height: 100px;
        }
    }
    // 右边栏
    .detailRight {
        width: 280px;
        .titleRight {
            font-size: 18px;
            font-weight: 400;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
        }
        .item {
            display: block;
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
            .item-img {
                display: block;
                width: 100px;
                height: 80px;
                flex-shrink: 0;
                overflow: hidden;
                object-fit: cover;
                background: #ddd;
                margin-right: 10px;
            }
            .item-info {
                flex: 1;
                position: raative;
                >div {
                    width: 100%;
                    height: 45px;
                    overflow: hidden;
                    position: absolute;
                    padding-left: 3px;
                    top: 0;
                    left: 0px;
                }
                >p {
                    color: #999;
                    font-size: 12px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }
}
</style>