<template>
<div>
  <my-header></my-header>
  <div class='pay'>
    <div class="top pay-item">
      <h1 class="pay-title">地址信息</h1>
      <hr>
      <ul class="clearfix">
        <li class="address-item fl" v-for='(item, index) in addressData' :key='index'>
          <div class="address-box">
            <div class="address-header clearfix">
              <div class="header-left fl">{{item.name}}</div>
              <div class="header-left fr">{{item.phone}}</div>
            </div>
            <div class="address-content">{{item.province + item.city + item.district + item.street}}</div>
            <div class="checked" v-show="item.checked">
              <i class="icon-font icon-check"></i>
            </div>
          </div>
        </li>
        <li class="add-address fl">
          <div class="add-content">
            <p class="plus">+</p>
            <p>请添加地址</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="body  pay-item">
      <h1 class="pay-title">确认订单信息</h1>
      <table class="body-table">
        <thead class="table-header">
          <tr>
            <td class="tr-name">商品</td>
            <td class="tr-price">单价</td>
            <td class="tr-amount">数量</td>
            <td class="tr-total">小计</td>
            <td class="tr-send">配送方式</td>
          </tr>
        </thead>
        <tr v-for='(item, index) in payData' :key='index' class="body-item">
          <td class="tr-name">
            <img :src="item.imageUrl" class="item-img">
            <div class="item-desc">
              <p>{{item.goodsName}}</p>
              <p>{{item.goodsDesc}}</p>
            </div>
          </td>
          <td class="tr-price">￥{{item.goodsPrice}}</td>
          <td class="tr-amount">{{item.count}}</td>
          <td class="tr-total price">￥{{item.count * item.goodsPrice}}</td>
          <td class="tr-send" :rowspan="payData.length">快递配送，运费 <span>￥0.00</span> 元</td>
        </tr>
        <tfoot class="table-footer">
          <tr>
            <td colspan="3">
              <span >备注</span>
              <textarea cols="30" rows="2"  placeholder="备注..."></textarea>
            </td>
            <td colspan="2" class="footer-total">合计<span class="total-price">￥2499.00</span></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="bottom  pay-item">
      <h1 class="pay-title">选择支付方式</h1>
    </div>
  </div>
  <my-footer></my-footer>
</div>
</template>

<script>
import axios from 'axios'
import MyHeader from '../components/header'
import MyFooter from '../components/footer'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      addressData: []
    }
  },
  computed: {
    payData () {
      const data = this.$store.state.shoppingCarData.filter(item => item.checked)
      return data
    }
  },
  mounted () {
    this.getAddressData()
  },
  methods: {
    async getAddressData () {
      const {data} = await axios.get('api/addressData ')
      this.addressData = data
      console.log('addressdata', this.addressData)
    }
  }
}
</script>
<style lang='less' scoped>
.pay{
  width: 1240px;
  margin: 0 auto;
  background-color: #fff;;
  .address-item{
    margin-right: 40px;
    .address-box{
      width: 275px;
      height: 144px;
      border: 1px solid rgb(197, 195, 195);
      border-radius: 2px;
      position: relative;
      transition: border-color 0.8s;
      &:hover, &.active{
        border-color: #00c3f5;
      }
      .address-header{
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-weight: 500;
        padding: 0 10px;
        border-bottom: 1px solid rgb(197, 195, 195);
      }
      .address-content{
        padding: 10px 10px 0 10px;
        font-size: 12px;
        word-wrap: break-word;
        font-weight: 300;
        color: black;
      }
      .checked{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0px;
        height: 0px;
        border-right: #00c3f5 40px solid;
        border-top: transparent 40px solid;
        i{
          position: absolute;
          right: -40px;
          color: #fff;
          bottom: 4px;
          font-size: 8px;
        }
      }
    }
  }
  .add-address{
    width: 275px;
    height: 144px;
    border: 1px solid rgb(197, 195, 195);
    position: relative;
    border-radius: 2px;
    transition: border-color 1s;
    &:hover{
      border-color: #00c3f5;
    }
    .add-content{
      width: 200px;
      height: 100px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      text-align: center;
      color: #777;
      font-size: 18px;
      .plus{
        font-size: 80px;
        line-height: 0.9;
        color: #ccc;
      }
    }
  }
  .pay-item{
    margin-top: 10px;
    padding: 0 40px 10px;
    .pay-title{
      font-size: 20px;
      padding: 20px 0px;
      font-weight: 600;
      text-indent: 10px;
    }
  }
  .body-table{
    border: 1px solid rgb(197, 195, 195);
    .table-header{
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .body-item{
    border: 1px solid rgb(197, 195, 195);
    .item-img{
      width: 120px;
      height: 120px;
      vertical-align: middle;
    }
    .item-desc{
      display: inline-block;
      vertical-align: middle;
      font-size: 16px;
    }
    .price{
      color: #e02b41;
    }
  }
  .table-footer{
    height: 70px;
    line-height: 70px;
    background-color: #eeeaea;
    span{
      padding-left: 10px;
      vertical-align: middle;
      font-size: 18px;
      color: black;

    }
    textarea{
      margin-left: 10px;
      vertical-align: middle;
      font-size: 18px;
      border: none;
      border-radius: 3px;
    }
    .footer-total{
      text-align: center;
      .total-price{
        font-size: 22px;
        color: #e02b41;
        font-weight: 800;
      }
    }
  }
  .tr-name{
    width: 408px;
    padding-left: 10px;
    text-align: left;
  }
  .tr-price{
    width: 225px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
  .tr-amount{
    width: 139px;
    text-align: center;
  }
  .tr-total{
    width: 173px;
    text-align: right;
    padding-right: 30px;
    font-weight: 800;
    font-size: 18px;
  }
  .tr-send{
    width: 214px;
    text-align: center;
    span{
      color: #e02b41;
      font-weight: 500;
    }
  }
}
</style>
