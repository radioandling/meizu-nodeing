<template>
<div class='goods clearfix'>
  <ul>
    <li
      v-for='(item, index) in data'
      :key='index'
      class="goods-list"
      :class="{'last-child': (index+1)%4 === 0}"
    >
      <a :href="item.href">
        <img class="goods-img" :src="item.goodsUrl">
        <div class="goods-name">{{item.goodsName}}</div>
        <div class="goods-desc">{{item.goodsDesc}}</div>
        <div class="goods-price">
          <i>￥</i>
          {{item.goodsPrice}}
          <span class="lower" v-if="item.lower">起</span>
          <span class="old" v-if="item.oldPrice">{{item.oldPrice}}</span>
        </div>
      </a>
      <div class="new" v-if="item.newProduct">新品</div>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  data () {
    return {}
  },
  nounted: () => {
    console.log(this.data)
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
.goods-list{
  float: left;
  width: 303px;
  height: 400px;
  background-color: #fff;
  cursor: pointer;
  transition: all .3s ease;
  position: relative;
  margin: 10px 9px 0 0;
  overflow: hidden;
  border-radius: 5px;
  text-align: center;
  .goods-img{
    height: 230px;
    margin-top: 30px;
  }
  .goods-name{
    margin-top: 30px;
    margin-bottom: 2px;
    color: #333;
    font-size: 16px;
  }
  .goods-desc{
    font-size: 14px;
    color: #999;
  }
  .goods-price{
    position: relative;
    display: inline-block;
    padding-left: 14px;
    font-size: 22px;
    color: #e64340;
    i{
      font-style:normal;
      font-size: 14px;
      position: absolute;
      top: 5px;
      left: 0;
    }
    .lower{
      font-size: 16px;
    }
    .old{
      text-decoration: line-through;
      color: #999;
      font-size: 16px;
      margin-left: 8px;
    }
  }
  .new{
    position: absolute;
    left: 20px;
    top: 20px;
    width: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(to bottom right,#2e74f6, #56bdf9)
  }
  &:hover{
    box-shadow: 0 15px 30px rgba(0,0,0,0.1)
  }
  &.last-child{
    margin-right: 0;
  }
}
</style>
