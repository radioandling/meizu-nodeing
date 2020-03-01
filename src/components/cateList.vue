<template>
  <div class="goods">
    <div v-if="data.length > 0" class="clearfix">
      <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          class="goods-list"
          @click="clickItem(item)"
          :class="{ 'last-child': (index + 1) % 4 === 0 }"
        >
          <a :href="item.href">
            <img-list :data="item.colorImageUrls"></img-list>
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
    <div v-else class="clearfix empty">
      <div class="fl empty-img">
        <img src="../assets/images/xiongmao.png">
      </div>
      <div class="fr empty-desc">
        <div class="title">抱歉没有找到相关商品</div>
        <p class="suggest">建议您：<br>
          1.适当减少选择条件 <br>
          2.尝试其他条件
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImgList from './imgList'
export default {
  components: {
    ImgList
  },
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
  },
  methods: {
    clickItem (item) {
      this.$emit('clickItem', item)
    }
  }
}
</script>
<style lang="less" scoped>
.goods{
  width: 1240px;
  margin: 0 auto;
}
.goods-list {
  float: left;
  width: 303px;
  height: 416px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  margin: 10px 9px 0 0;
  overflow: hidden;
  border-radius: 5px;
  text-align: center;
  .goods-img {
    height: 230px;
    margin-top: 30px;
  }
  .goods-name {
    margin-bottom: 2px;
    color: #333;
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
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  &.last-child {
    margin-right: 0;
  }
}
.empty{
  width: 335px;
  margin: 180px auto 350px;
  .empty-img{
    width: 105px;
    height: 135px;
    margin-right: 25px;
  }
  .empty-desc{
    margin-top: 20px;
    width: 200px;
  }
  .title{
    font-size: 20px;
    color: #003cf5;
  }
  .suggest{
    font-size: 14px;
    color: #999;
  }
}
</style>
