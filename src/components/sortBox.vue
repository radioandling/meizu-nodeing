<template>
<div class='sort clearfix'>
  <div class="left fl">
    <ul class="left-box">
      <li><a href="javascript:;" :class="{'active': activeSortKey === 'recommend'}" @click="setSortKey('recommend')">推荐</a></li>
      <li><a href="javascript:;" :class="{'active': activeSortKey === 'new'}" @click="setSortKey('new')">新品</a></li>
      <li>
        <a href="javascript:;" :class="{'active': activeSortKey === 'low' || activeSortKey === 'high'}" @click="changePrice">
          价格
          <span class="icon-font arrow" :class="sortArrow"></span>
        </a>
      </li>
    </ul>
  </div>
  <div class="right fr">
      <input type="checkbox" v-model="haveStock">
      <span>仅显示有货</span>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      activeSortKey: '',
      activePriceKey: 'low',
      haveStock: false
    }
  },
  watch: {
    haveStock (value) {
      console.log('value===>', value)
      this.$emit('getStock', value)
    }
  },
  computed: {
    sortArrow () {
      if (this.activePriceKey === 'low') {
        return 'icon-down'
      } else {
        return 'icon-up'
      }
    }
  },
  mounted: function () {
    this.setSortKey('recommend')
  },
  methods: {
    setSortKey (value) {
      this.activeSortKey = value
      this.$emit('getKey', this.activeSortKey)
    },
    changePrice () {
      if (this.activeSortKey === this.activePriceKey) {
        this.activePriceKey = this.activePriceKey === 'low' ? 'high' : 'low'
      }
      this.setSortKey(this.activePriceKey)
    }
  }
}
</script>
<style lang='less' scoped>
.sort{
  margin: 30px auto 0px;
  width: 1240px;
  .left{
    li{
      display: inline-block;
      height: 20px;
      width: 100px;
      line-height: 20px;
      text-align: start;
      a{
        color: #666;
        font-size: 18px;
        text-decoration: none;
        .arrow{
          display: none;
        }
        &:hover{
          color: #00c3f5;
        }
        &:hover .arrow{
          color: #00c3f5;
          display: inline;
        }
        &.active{
          color: #00c3f5;
        }
      }
    }
  }
  .right{
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    color: #888;
    input{
      display: inline-block;
      border: 1px solid black;
    }
  }
}
</style>
