<template>
  <div class="company">
    <div class="hh">
      <h5>公司简介</h5>
    </div>
    <div class="content">
        这是公司简介
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.company{
  .content{
    padding: 10px;
  }
}
</style>
