<template>
<div class='shoppingcar'>
  <my-header></my-header>

  <div v-if="shopCartData.length > 0">
    <table class="shopping-header">
      <tr class="table-header">
        <td class="first-select">
          <input type="checkbox" :checked="isAllChecked" class="first-check" @click="check_all_goods">
          <span>全选</span>
        </td>
        <td class="first-name">商品</td>
        <td class="first-price">单价(元)</td>
        <td class="first-amount">数量</td>
        <td class="first-miniTotal">小计(元)</td>
        <td class="first-action">操作</td>
      </tr>
    </table>
    <table class="shopping-body">
      <tr v-for='(item, index) in  shopCartData' :key='index' class="shopping-item">
        <td class="first-select">
          <input type="checkbox" :checked="item.checked" class="first-check" @click="check_goods(item.id)">
          <img :src="item.imageUrl" class="select-img">
        </td>
        <td class="first-name">
          <span>{{item.goodsName}}</span>
          <span>{{item.goodsDesc}}</span>
        </td>
        <td class="first-price">
          {{item.goodsPrice}}
        </td>
        <td class="first-amount">
          <div>
            <button @click="decrease(item.id)">-</button>
            <input type="number" v-model="item.count" class="enter-number">
            <button @click="increase(item.id)">+</button>
          </div>
        </td>
        <td class="first-miniTotal">￥{{item.count * item.goodsPrice}}</td>
        <td class="first-action">
          <i class="icont-font icon-close" @click="delCheckedGoods(item.id)"></i>
        </td>
      </tr>
    </table>
    <div class="shopping-bottom clearfix">
      <div class="bottom-left fl">
        <input type="checkbox" class="first-check" :checked="isAllChecked" @click="check_all_goods">
        <span>全选</span>
        <span class="left-delete">删除选中的商品</span>
        <span>共<span>{{shopCartTotal}}</span>件商品，已经选中<span>{{checkedGoodsNumberTotal}}件商品</span></span>
      </div>
      <div class="bottom-right fr">
        <span>已经优惠 <span class="cheaper">￥0.00</span> 元，合计(不含运费)：<span class="pay-total">￥{{checkedGoodsPriceTotal}}</span> 元</span>
        <a
          href="javascript:;"
          class="btn success"
          :class="{'cancel':checkedGoodsNumberTotal <= 0}"
          @click="goToPay"
          >
          结算
          </a>
      </div>
    </div>
  </div>

  <div v-else class="empty">
    <div class="empty-content">
      <div class="empty-left"></div>
      <div class="empty-right">
        <p>购物车内还没有商品，赶紧去选购吧</p>
        <a href="" class="btn success" @click="backToHome">返回商城首页</a>
      </div>
    </div>
  </div>
  <my-footer class="footer"></my-footer>

  <my-dialog :show.sync="dialogShow" :width="500" title="提示" @confirm="confirmDel" @cancel="dialogShow = false">
    <div style="height:150px;line-height:150px;" >你确定要删除此项吗？</div>
  </my-dialog>
</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
import MyDialog from '../components/dialog'
export default {
  components: {
    MyHeader,
    MyFooter,
    MyDialog
  },
  data () {
    return {
      dialogShow: false,
      currentId: null
    }
  },
  computed: {
    shopCartData () {
      return this.$store.state.shoppingCarData
    },
    ...mapGetters([
      'isAllChecked',
      'checkedGoodsNumberTotal',
      'checkedGoodsPriceTotal',
      'shopCartTotal'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapMutations([
      'INCREASE_SHOPCART',
      'DECREASE_SHOPCART',
      'CHECK_GOODS',
      'CHECK_ALL_GOODS',
      'DELETE_GOODS'
    ]),
    increase (id) {
      console.log(id)
      this.INCREASE_SHOPCART(id)
      // 引入mapMutations和使用 this.$store.commit('INCREASE_SHOPCART', id)一致
    },
    decrease (id) {
      this.DECREASE_SHOPCART(id)
    },
    check_goods (id) {
      this.CHECK_GOODS(id)
    },
    check_all_goods (checked) {
      console.log('this.isAllChecked')
      this.CHECK_ALL_GOODS(this.isAllChecked)
    },
    backToHome: function () {
      this.$router.push({
        name: 'index'
      })
    },
    delCheckedGoods (id) {
      this.dialogShow = true
      this.currentId = id
    },
    confirmDel () {
      this.DELETE_GOODS(this.currentId)
      this.dialogShow = false
    },
    goToPay () {
      this.$router.push('pay')
    }
  }
}
</script>
<style lang='less' scoped>
.shopping-header {
  width: 1240px;
  background-color: #fff;
  margin: 10px auto 0px;
  .table-header {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    color: #333;
    font-size: 14px;
  }
}

.shopping-body {
  background-color: #fff;
  width: 1240px;
  margin: 0 auto;
  .shopping-item{
    height: 100px;
  }
  .select-img {
    display: inline-block;
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  .first-amount{
    .enter-number {
    width: 50px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 6px;
    text-align: center;
    }
    button{
      width: 30px;
      height: 30px;
      border-radius: 6px;
      display: inline-block;
    }
  }
  .first-name {
    span {
      display: block;
    }
  }
}

.shopping-bottom{
  width: 1240px;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  background-color: #fff;
  margin: 10px auto 20px;
  color: #666;
  .left-delete{
    color: #999;
    margin: 0 30px 0 20px;
  }
  .success{
    margin-left: 20px;
  }
  .pay-total{
    font-size: 24px;
    color: #e64340;
    font-weight: 500;
  }
  .cheaper{
    color: #e64340;
    font-size: 18px;
    font-weight: 500;
  }
}

.empty{
  width: 1240px;
  height: 500px;
  margin: 100px auto;
  text-align: center;
  background-color: #fff;
  position: relative;
  .empty-content{
    width: 500px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .empty-left{
      display: inline-block;
      vertical-align: middle;
      width: 130px;
      height: 130px;
      margin-right: 20px;
      background: url('../assets/images/shopcart.png') no-repeat;
    }
    .empty-right{
      display: inline-block;
      vertical-align: middle;
    }
  }
}
.footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.first-select {
  padding-left: 45px;
  text-align: left;
  width: 220px;
}
.first-check {
    width: 16px;
    height: 16px;
    border-color: #bdbdbd;
    display: inline-block;
    background: #fff;
    border-radius: 2px;
    font-size: 10px;
    vertical-align: middle;
  }
.first-name {
  width: 270px;
  text-align: left;
}
.first-price {
  width: 220px;
  text-align: center;
}
.first-amount {
  width: 200px;
  text-align: center;
}
.first-miniTotal {
  width: 160px;
  text-align: center;
}
.first-action {
  width: 170px;
  text-align: right;
  padding-right: 40px;
}
</style>
