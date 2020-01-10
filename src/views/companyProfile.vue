<template>
  <div class="company">
    <div class="hh">
      <h5>公司简介</h5>
    </div>
    <div class="box">
      <div class="content" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
import { getIntroduction } from "../api/apis";
export default {
  data() {
    return {
      detail: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getIntroduction().then(res => {
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
.company {
  .box {
    width: 95%;
    margin: 10px auto;
    .content {
      width: 100%;
      height: 100%;

      overflow: hidden;
    }
  }
}
</style>
