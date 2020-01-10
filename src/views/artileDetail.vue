<template>
  <div class="articleDetails">
    <div class="title">{{detail.title}}</div>
    <div class="content" v-html="detail.content">
        
    </div>
  </div>
</template>

<script>
import { getArticleDetail } from "../api/apis";
export default {
  data() {
    return {
        articleId: '',
        detail: ''
    };
  },
  created() {
    this.articleId = this.$route.query.aid;
    this.fetchData();
  },
  methods: {
    fetchData(){
      getArticleDetail(this.articleId).then(res=>{
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
.articleDetails{
    padding: 10px;
    .title{
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-weight: 600;
    }
    .content{

    }
}
</style>
