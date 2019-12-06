<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="index"
      @click="tab(index, item.name)"
    >
      <span :class="currIndex == index ? active : ''">{{ item.title }}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/button/style";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("../assets/tabs/home.png"),
          active: require("../assets/tabs/home-active.png")
        },
        {
          name: "companyProfile",
          title: "公司简介",
          normal: require("../assets/tabs/home.png"),
          active: require("../assets/tabs/home-active.png")
        },
        {
          name: "businessScope",
          title: "业务范围",
          normal: require("../assets/tabs/home.png"),
          active: require("../assets/tabs/home-active.png")
        },
        {
          name: "caseShows",
          title: "案例展示",
          normal: require("../assets/tabs/home.png"),
          active: require("../assets/tabs/home-active.png")
        },
        {
          name: "contactUs",
          title: "联系我们",
          normal: require("../assets/tabs/home.png"),
          active: require("../assets/tabs/home-active.png")
        }
      ]
    }
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      console.log(val)
      this.$router.push(val)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}
</style>
