<template>
  <div class="contactUs">
    <div class="hh">
      <h5>联系我们</h5>
    </div>
    <div class="pp">Please contact us if you have any questions， it is easy to contact us</div>
    <div class="lineItem">
      <div>
        <van-icon name="location-o" size="20" />
      </div>
      <div>地址：{{detail.address}}</div>
    </div>
    <div class="lineItem">
      <div>
        <van-icon name="phone-o" size="20" />
      </div>
      <div>电话： {{detail.phone}}</div>
    </div>
    <div class="lineItem">
      <div>
        <van-icon name="clock-o" size="20" />
      </div>
      <div>时间：{{detail.start}}-{{detail.end}}</div>
    </div>

    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" :height="200" indicator-color="white">
        <van-swipe-item v-for="item in detail.file_path" :key="item.id">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { Icon, Swipe, SwipeItem } from "vant";
import { getContacUs } from "../api/apis";
export default {
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      detail: ''
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getContacUs().then(res => {
        if (res.status == 200) {
          this.detail = res.data;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.contactUs {
  .pp {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    color: #999;
  }
  .lineItem {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
  }
  .carousel {
    margin-top: 20px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
