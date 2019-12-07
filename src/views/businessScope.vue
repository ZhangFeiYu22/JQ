<template>
  <div class="business">
    <div class="hh">
      <h5>业务范围</h5>
    </div>
    <div class="busBox">
      <div class="busItem" v-for="item in businessList" :key="item.id">
        <img :src="item.url" alt="图片" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessList: [
        {
          id: 1,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        },
        {
          id: 2,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        },
        {
          id: 3,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        },
        {
          id: 4,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        },
        {
          id: 5,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        },
        {
          id: 6,
          url: require("../../static/image/carousel4.jpg"),
          title: "业务一"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.business {
  .busBox {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    .busItem {
      width: 49%;
      height: 140px;
      position: relative;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p {
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        height: 26px;
        width: 100%;
        line-height: 26px;
        text-align: center;
      }
    }
  }
}
</style>
