<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" :height="180" indicator-color="white">
        <van-swipe-item v-for="item in homeData.picture" :key="item.id">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 文字介绍 -->
    <div class="chartBox">
      <h5>{{homeData.title}}</h5>
      <div>
        {{homeData.content}}
      </div>
    </div>
    <!-- 分类栏 -->
    <div class="kindsBox">
      <div
        class="kinds"
        v-for="item in kindsBox"
        :key="item.id"
        @click="clickTab(item.path)"
      >
        <img :src="item.url" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <!-- 列表 -->
    <div class="listBox">
      <div
        class="listItem"
        v-for="(item,index) in articleList"
        :key="item.id"
        @click="listClick(item.id)"
        v-if="index<3"
      >
        <div class="leftImg">
          <img class="img" :src="item.file_path" alt="" />
        </div>
        <div class="rightContent">
          <h5 class="title">{{ item.title }}</h5>
          <p class="content ellipsis-2">{{item.subtitle}}</p>
          <!-- <p class="content ellipsis-2">{{ item.content }}</p> -->
          <p class="time">{{ item.updated_at }}</p>
        </div>
      </div>
    </div>
    <!-- 查看更多 -->
    <div class="more">
      查看更多
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { homeSee ,homeArticle} from "../api/apis";

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      homeData: '',
      kindsBox: [
        {
          id: 1,
          url: require("../../static/image/carousel2.jpeg"),
          name: "企业介绍",
          path: "companyProfile"
        },
        {
          id: 2,
          url: require("../../static/image/carousel2.jpeg"),
          name: "业务范围",
          path: "businessScope"
        },
        {
          id: 3,
          url: require("../../static/image/carousel2.jpeg"),
          name: "案例展示",
          path: "caseShows"
        },
        {
          id: 4,
          url: require("../../static/image/carousel2.jpeg"),
          name: "联系我们",
          path: "contactUs"
        }
      ],
      articleList:[]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      homeSee().then(res=>{
        if(res.status == 200){
          this.homeData = res.data
        }
      });
      homeArticle().then(res=>{
        console.log(res)
        if(res.status == 200){
          this.articleList = res.data
        }
      })
    },
    clickTab(pathName) {
      console.log(pathName);
      this.$router.push(pathName);
    },
    listClick(id) {
      console.log(id);
      this.$router.push({name: 'artileDetail', query: {aid: id}});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  .carousel {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .chartBox {
    padding: 10px;
    h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
    }
  }
  .kindsBox {
    display: flex;
    padding: 20px 10px;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .kinds {
      width: 22%;
      height: 80px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      p {
        width: 100%;
        font-size: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        color: #fff;
      }
    }
  }
  .listBox {
    padding: 10px;
    .listItem {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      .leftImg {
        width: 90px;
        height: 90px;
        margin-right: 10px;
        .img {
          width: 100%;
          height: 100%;
        }
      }
      .rightContent {
        flex: 1;
        .title {
          line-height: 24px;
        }
        .content {
          font-size: 12px;
          color: #999;
        }
        .time {
          color: #999;
          line-height: 24px;
        }
      }
    }
  }
  .more{
    margin: 10px;
    padding: 4px 0;
    text-align: center;
    border: 1px solid #ddd;
  }
}
</style>
