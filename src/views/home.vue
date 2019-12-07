<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" :height="180" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img v-lazy="item.url" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 文字介绍 -->
    <div class="chartBox">
      <h5>品牌成就梦想</h5>
      <div>
        南京苏尚智联科技股份有限公司精心打造的“苏尚小生活”正式开始营业。中国社区商业委员会董利主任、江北新区经发局副局长崔松喜、南京商业地产商会冯宪法、泰山街道办事处副主任杨权勇、柳州社区柳州社区副书记刘华、秦虹街道领导、雄九集团董事长张启明、地产商业联合会兄弟企业等嘉宾受邀出席了此次开业庆典活动
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
        v-for="item in listData"
        :key="item.id"
        @click="listClick(item.id)"
      >
        <div class="leftImg">
          <img :src="item.url" alt="" />
        </div>
        <div class="rightContent">
          <h5 class="title">{{ item.title }}</h5>
          <p class="content ellipsis-2">{{ item.content }}</p>
          <p class="time">{{ item.time }}</p>
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
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      images: [
        { id: 1, url: require("../../static/image/carousel1.jpeg") },
        { id: 2, url: require("../../static/image/carousel2.jpeg") },
        { id: 3, url: require("../../static/image/carousel3.jpeg") },
        { id: 4, url: require("../../static/image/carousel4.jpg") }
      ],
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
      listData: [
        {
          id: 1,
          url: require("../../static/image/carousel3.jpeg"),
          title: "这是一个标题",
          content:
            "社区商业委员会董利主任、南京市地产商会会长冯宪法、苏尚智联科技股份有限公司董事长郁停远先生和社区居民与商户代表共同为苏尚小生活剪彩。这也是有史以来第一场有社区居民参与剪彩的生活广场开业仪式，大家纷纷称赞",
          time: "2019-05-05"
        },
        {
          id: 2,
          url: require("../../static/image/carousel3.jpeg"),
          title: "这是一个标题",
          content:
            "社区商业委员会董利主任、南京市地产商会会长冯宪法、苏尚智联科技股份有限公司董事长郁停远先生和社区居民与商户代表共同为苏尚小生活剪彩。这也是有史以来第一场有社区居民参与剪彩的生活广场开业仪式，大家纷纷称赞",
          time: "2019-12-12"
        },
        {
          id: 3,
          url: require("../../static/image/carousel3.jpeg"),
          title: "这是一个标题",
          content:
            "社区商业委员会董利主任、南京市地产商会会长冯宪法、苏尚智联科技股份有限公司董事长郁停远先生和社区居民与商户代表共同为苏尚小生活剪彩。这也是有史以来第一场有社区居民参与剪彩的生活广场开业仪式，大家纷纷称赞",
          time: "2019-07-20"
        }
      ]
    };
  },
  created() {},
  methods: {
    clickTab(pathName) {
      console.log(pathName);
      this.$router.push(pathName);
    },
    listClick(id) {
      console.log(id);
      this.$router.push('artileDetail');
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
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rightContent {
        width: 100%;
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
