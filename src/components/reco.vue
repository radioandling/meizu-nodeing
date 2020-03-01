<template>
<div class='reco'>
  <div class="top clearfix">
    <h3 class="top-left fl title">推荐商品</h3>
    <div class="top-right fr">
      <i class="icon-font icon-left pagination-item" :class="{'disable': activeIndex === 0}" @click="prev"></i>
      <i class="icon-font icon-right pagination-item" :class="{'disable': activeIndex === pageSize}" @click="next"></i>
    </div>
  </div>
  <div class="bottom">
    <div v-if="data.length > 0">
      <ul :style="listWrapper" class="clearfix goods">
        <li
          v-for="(item, index) in data"
          :key="index"
          class="goods-list"
          :class="{ 'last-child': (index + 1) % 4 === 0 }"
        >
          <a :href="item.href">
            <img :src="item.goodsUrl" class="goodsImg">
            <div class="goods-name">{{ item.goodsName }}</div>
            <div class="goods-desc">{{ item.goodsDesc }}</div>
            <div class="goods-price">
              <i>￥</i>
              {{ item.goodsPrice }}
              <span class="lower" v-if="item.lower">起</span>
              <span class="old" v-if="item.oldPrice">{{ item.oldPrice }}</span>
            </div>
          </a>
          <div class="new" v-if="item.newProduct">新品</div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    listWrapper () {
      return {
        width: `${(this.data.length) * 250}px`,
        transform: `translateX(-${this.activeIndex * 1240}px)`
      }
    },
    pageSize () {
      return Math.floor(this.data.length / 5)
    }
  },
  methods: {
    prev () {
      if (this.activeIndex === 0) {
        return
      }
      this.activeIndex = this.activeIndex - 1
    },
    next () {
      if (this.activeIndex === this.pageSize) return
      this.activeIndex = this.activeIndex + 1
    }
  }
}
</script>
<style lang='less' scoped>
.reco{
  padding-bottom: 60px;
}
.top{
  width: 1240px;
  margin: 10px auto 10px;
  .title{
    font-size: 30px;
    font-weight: 400;
  }
  .pagination-item{
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    font-size: 12px;
    color: #56bdf9;
    border: 1px solid#56bdf9;
    border-radius: 5px;
    text-align: center;
    &.disable{
      color: #efefef;
      border-color: #dcdcdc;
    }
  }
}
.bottom{
  width: 1240px;
  margin: 0 auto;
  background-color:#fff;
  overflow: hidden;
  .goods{
    .goods-list {
      float: left;
      width: 220px;
      margin: 0 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      border-radius: 5px;
      text-align: center;
    .goodsImg {
      height: 180px;
      margin-top: 30px;
    }
    .goods-name {
      margin-bottom: 2px;
      color: #555757;
      font-size: 14px;
    }
    .goods-desc {
      font-size: 12px;
      color: #999;
    }
  .goods-price {
    position: relative;
    display: inline-block;
    padding-left: 14px;
    font-size: 18px;
    color: #e64340;
    i {
      font-style: normal;
      font-size: 14px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    .lower {
      font-size: 12px;
    }
    .old {
      text-decoration: line-through;
      color: #999;
      font-size: 16px;
      margin-left: 8px;
    }
  }
  .new {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(to bottom right, #2e74f6, #56bdf9);
  }
  &.last-child {
    margin-right: 0;
  }
  }
}
}

</style>
