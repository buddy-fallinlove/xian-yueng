<template>
  <div class="leftPost">
    <!-- 热门城市 -->
    <ul class="leftul">123</ul>
  </div>
</template>

<script lang="ts">
import api from '@/http/api'
// import { Res, typeItem, ChildrenItem, Account, AccountItem } from '@/views/types/types';
import { defineComponent, reactive, toRefs, SetupContext,onMounted } from "vue";
interface Data {

}
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup(props, ctx: SetupContext) {
    const data: Data = reactive<Data>({

    })
    onMounted(()=>{
        api.getpost().then((res: any)=>{
        console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    })
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang='scss'>
.leftPost {
  // 热门城市
  ul.leftul {
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    position: relative;
    z-index: 2;
    li {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.active {
        color: orange;
        border-right-color: #fff;
      }
    }
  }
  .rightbox {
    width: 350px;
    height: 200px;
    padding: 10px 20px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #ddd;
    position: absolute;
    top: 0;
    left: 259px;
    z-index: 1;
    li {
      font-size: 14px;
      line-height: 36px;
      i {
        font-size: 24px;
        color: orange;
        vertical-align: middle;
      }
      strong {
        margin: 0 10px;
        color: orange;
        font-weight: normal;
      }
      span {
        color: #999;
      }
      strong:hover,
      span:hover {
        text-decoration: underline;
      }
    }
  }
  .tuijian {
    margin-top: 20px;
    img {
      width: 100%;
    }
    h4 {
      font-weight: 400;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>