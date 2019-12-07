<template>
  <div class="caseShows">
    <div class="hh">
      <h5>案例展示</h5>
    </div>
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" :height="500" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img v-lazy="item.url" />
        </van-swipe-item>
      </van-swipe>
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
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.caseShows {
  .carousel {
    margin-top: 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
