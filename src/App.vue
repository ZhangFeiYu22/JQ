<template>
  <div id="app">
    <router-view />
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageFooter from "./components/PageFooter";
export default {
  name: "App",
  components: {
    PageFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 60px;
}

.hh {
  height: 80px;
  background-color: #f1f1f1;
  line-height: 80px;
  text-align: center;
  font-size: 20px;
}
/*一行出现省略号 */

.ellipsis-1 {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*两行出现省略号 */

.ellipsis-2 {
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  height: auto;
}
</style>
