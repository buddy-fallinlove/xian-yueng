<template>
  <div class="rightPost">
    <a-row class="sosuo_kuang" type="flex" justify="space-between" align="middle">
      <input type="text" ref="sosuoInput" placeholder="请输入想去的地方，比如：'广州'" />
      <i>
        <SearchOutlined />
      </i>
    </a-row>
    <div class="sosuo_tuijian">
      推荐：
      <span v-for="(item,index) in ['广州','上海','北京']" :key="index">{{item}}</span>
    </div>
    <!-- 标题 -->
    <a-row class="title" type="flex" justify="space-between" align="middle">
      <h4>推荐攻略</h4>
      <a-button type="primary">
        <i>
          <EditOutlined />
        </i>
        <span>写游记</span>
      </a-button>
    </a-row>
    <!-- 内容 -->
    <div class="post_item" v-for="(item,index) in postList" :key="index">
      <!-- 多张图片 -->
      <div v-if="item.images.length>=3">
        <!-- 标题 -->
        <h4 class="post_item_title">{{item.title}}</h4>
        <!-- 文章 -->
        <p class="post_item_desc">{{item.summary}}</p>
        <!-- 图片 -->
        <a-row class="post_item_img" type="flex" justify="space-between">
          <a href="#" v-for="(imglist,index) in item.images.slice(0,3)" :key="index">
            <img :src="imglist" />
          </a>
        </a-row>
        <!-- 说明 -->
        <a-row class="post_item_info" type="flex" justify="space-between">
          <a-row class="post_item_info_left" type="flex" justify="space-between" align="middle">
            <span>
              <i>
                <EnvironmentOutlined />
              </i>
              {{item.cityName}}
            </span>
            <a-row class="post_user" type="flex" align="middle">
              <a href="#">
                <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
              </a>
              <a href="#">{{item.account.nickname}}</a>
            </a-row>
            <span>
              <i>
                <EyeOutlined />
              </i>
              {{item.watch}}
            </span>
          </a-row>
          <div class="post_item_info_right">73 赞</div>
        </a-row>
      </div>
      <!-- 一张图片 -->
      <a-row v-if="item.images.length<3" type="flex" justify="space-between">
        <!-- 图片 -->
        <div class="post_item_cover">
          <a href="#">
            <img :src="item.images[0]" alt />
          </a>
        </div>
        <!-- 内容 -->
        <div class="post_item_content">
          <!-- 标题 -->
          <h4 class="post_item_title">{{item.title}}</h4>
          <!-- 文章 -->
          <p class="post_item_desc">{{item.summary}}</p>
          <!-- 说明 -->
          <a-row class="post_item_info" type="flex" justify="space-between">
            <a-row class="post_item_info_left" type="flex" justify="space-between" align="middle">
              <span>
                <i>
                  <EnvironmentOutlined />
                </i>
                {{item.cityName}}
              </span>
              <a-row class="post_user" type="flex" align="middle">
                <a href="#">
                  <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt />
                </a>
                <a href="#">{{item.account.nickname}}</a>
              </a-row>
              <span>
                <i>
                  <EyeOutlined />
                </i>
                {{item.watch}}
              </span>
            </a-row>
            <div class="post_item_info_right">73 赞</div>
          </a-row>
        </div>
      </a-row>
    </div>
    <!-- 分页 -->
      <div class="fenye">
      <a-pagination
      :page-size="pageSize"
      >
      
      
      
      </a-pagination>
      </div>
  </div>
</template>

<script lang="ts">
import api from "@/http/api";
import { Centers, Dataitem, Citys, Account } from "@/views/types/types";
import {
  defineComponent,
  reactive,
  toRefs,
  SetupContext,
  onMounted,
} from "vue";
interface Data {
  postList: Dataitem[];
  pageSize: number;
}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({
      postList: [],
       pageSize:3
    });
    onMounted(() => {
      api.getposts().then((res: Centers) => {
        data.postList = res.data;
        console.log(res);
      });
    });
    const postComputed =(): void => {
      if(!data.postList) return[];
                  const start = (this.pageIndex-1)*this.pageSize
            const end = this.pageIndex*this.pageSize
            return this.postList.slice(start,end)
    }
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.rightPost {
  // 搜索框
  .sosuo_kuang {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border: 3px solid orange;
    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 0 20px;
      background: none;
      line-height: 40px;
    }
    i {
      font-size: 24px;
      color: orange;
      font-weight: 700;
      margin-right: 10px;
    }
  }
  // 搜索推荐
  .sosuo_tuijian {
    color: #666;
    padding: 10px 0;
    font-size: 12px;
    span {
      cursor: pointer;
      margin-right: 5px;
      &:hover {
        color: orange;
        text-decoration: underline;
      }
    }
  }
  // 标题
  .title {
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    h4 {
      font-size: 18px;
      color: orange;
      font-weight: 400;
      &::before {
        display: block;
        content: "";
        width: 72px;
        height: 2px;
        background: orange;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  // 内容列表
  .post_item {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    // 标题栏
    .post_item_title {
      cursor: pointer;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        color: orange;
      }
    }
    // 文章栏
    .post_item_desc {
      height: 63px;
      color: #666;
      cursor: pointer;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
    }
    // 图片栏
    .post_item_img {
      margin: 15px 0;
      img {
        width: 220px;
        height: 150px;
        display: block;
        object-fit: cover;
        -o-object-fit: cover;
      }
    }
    // 说明
    .post_item_info {
      .post_item_info_left {
        color: #999;
        font-size: 12px;
        span {
          margin-right: 10px;
        }
        .post_user {
          margin-right: 10px;
          a {
            color: orange;
            img {
              display: block;
              width: 16px;
              margin: 5px;
              height: 16px;
              border-radius: 100px;
            }
          }
        }
      }
      .post_item_info_right {
        color: orange;
      }
    }

    .post_item_cover {
      width: 220px;
      height: 150px;
      flex-shrink: 0;
      overflow: hidden;
      margin-right: 10px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -o-object-fit: cover;
      }
    }
    .post_item_content {
      width: 470px;
    }
  }
  // 分页
  .fenye {
    margin-top: 15px;
  }
}
</style>