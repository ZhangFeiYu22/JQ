<template>
  <div class="articleDetails">
    <div class="title">文章的标题放这里</div>
    <div class="content">
        文章的内容放这里
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.articleDetails{
    padding: 10px;
    .title{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
    }
    .content{

    }
}
</style>
