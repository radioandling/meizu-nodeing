<template>
<div class='ad-list clearfix'>
  <div class="left fl">
    <a :href="data[0].href"><img class="ad-img" :src="data[0].imgUrl"></a>
  </div>
  <div class="right fr">
    <div class="right-top">
      <a :href="data[1].href"><img class="ad-img" :src="data[1].imgUrl"></a>
    </div>
    <div class="right-bottom">
      <a :href="data[2].href"><img class="ad-img" :src="data[2].imgUrl"></a>
      <a :href="data[3].href"><img class="ad-img" :src="data[3].imgUrl"></a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang='less' scoped>
.left{
  width: 615px;
  height: 450px;
}
.right-top{
  width: 616px;
  height: 220px;
  margin-bottom: 10px;
}
.right-bottom>a{
  display: inline-block;
  width: 303px;
  height: 220px;
  margin-right: 5px;
}
.ad-img{
  width: 100%;
  height: 100%;
}

</style>
