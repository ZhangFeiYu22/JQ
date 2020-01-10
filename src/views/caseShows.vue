<template>
  <div class="caseShows">
    <div class="hh">
      <h5>案例展示</h5>
    </div>
    <!-- 轮播 -->
    <div class="carousel">
      <van-swipe :autoplay="3000" :height="500" indicator-color="white">
        <van-swipe-item v-for="item in detail" :key="item.id">
          <img v-lazy="item.file_path" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { getCase } from "../api/apis";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      detail: []
    };
  },
   created() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      getCase().then(res=>{
       if(res.status == 200){
         this.detail = res.data
       }
      })
    }
  }
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
