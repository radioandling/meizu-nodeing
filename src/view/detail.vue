<template>
<div>
  <my-header></my-header>
  <div class='detail clearfix'>
    <div class="bread">
      <span>首页</span>
      <span class="arrow"> > </span>
      <span>全部</span>
      <span class="arrow"> > </span>
      <span class="last">手机</span>
    </div>
    <div class="fl detail-left">
      <img-list :data="detailData.colorImageUrls" type="big" class="detail-img"></img-list>
    </div>
    <div class="fl detail-right">
      <h1 class="title">{{detailData.goodsName}}</h1>
      <p>{{detailData.goodsDesc}}</p>
      <div class="right-price">
        <span class="right-item-name">价&nbsp;&nbsp;&nbsp;格：</span>
        <span class="price-number">￥{{detailData.goodsPrice}}</span>
      </div>
      <div class="right-service clearfix">
        <span class="right-item-name fl">支&nbsp;&nbsp;&nbsp;持:</span>
        <ul class="fl">
          <li class="service-item"><i class="icon-font icon-check-circle service-item">百城速达</i></li>
          <li class="service-item"><i class="icon-font icon-check-circle">顺丰包邮</i></li>
          <li class="service-item"><i class="icon-font icon-check-circle">七天无理由退货</i></li>
        </ul>
      </div>
      <div>
        <span class="right-item-name">服&nbsp;&nbsp;&nbsp;务:</span>
        <span>本商品由魅族负责提供售后服务</span>
      </div>
      <div class="right-number clearfix">
        <span class="number-name right-item-name">数&nbsp;&nbsp;&nbsp;量:</span>
        <div class="number-change clearfix">
            <div class="fl" @click="increase">+</div>
            <input class="fl enter-number" v-model="quantity" type="number">
            <div class="fl" @click="decrease">-</div>
        </div>
      </div>
      <div class="right-btn">
          <a href="javascript:;" class="btn danger" @click="buyItNow">立即购买</a>
          <a href="javascript:;" class="btn success" @click="addShoppingCar">加入购物车</a>
      </div>
    </div>
  </div>
  <div class="detail-info-wrapper">
    <div class="detail-info">
      <a href="" class="detail-title">商品详情</a>
    </div>
    <img :src="item" v-for='(item, index) in detailData.information' :key='index'>
  </div>
  <my-footer></my-footer>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
import ImgList from '../components/imgList'
export default {
  components: {
    MyHeader,
    MyFooter,
    ImgList
  },
  data () {
    return {
      detailData: {},
      quantity: 1
    }
  },
  mounted () {
    this.getDetailData(this.$route.params.id)
  },
  methods: {
    increase () {
      this.quantity = this.quantity + 1
    },
    decrease () {
      if (this.quantity <= 1) {
        this.quantity = 1
      } else {
        this.quantity = this.quantity - 1
      }
    },
    addShoppingCar () {
      this.$store.commit('ADD_SHOPCART', {
        data: this.detailData,
        number: this.quantity
      })
    },
    buyItNow () {
      this.$store.commit('ADD_SHOPCART', {
        data: this.detailData,
        number: this.quantity
      })
    },
    async getDetailData (id) {
      const {data} = await axios.get(`/api/categoryList/${id}`)
      this.detailData = data
    }
  }
}
</script>
<style lang='less' scoped>
.detail{
  width: 1240px;
  margin: 0 auto;
  background-color: #fff;
  .bread{
    height: 40px;
    line-height: 40px;
    .arrow, .last{
      color: #999;
    }
  }
  .detail-img{
    width: 495px;
  }
  .detail-right{
    width: 675px;
    .title{
      font-size: 24px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
    }
    p{
      font-size: 16px;
      color: #e22841;
      margin-bottom: 15px;
    }
    .right-item-name{
      padding: 0 10px;
      line-height: 34px;
    }
    .right-price{
      line-height: 55px;
      height: 55px;
      background-color: #f5f5f5;
      margin-bottom: 20px;
      .price-number{
        font-size: 24px;
        color: #e02b41;
      }
    }
    .right-service{
      display: inline-block;
      height: 40px;
      line-height: 40px;
      .service-item{
        display: inline-block;
        i{
          margin-right: 5px;
          color: #00c3f5;
        }
      }
    }
    .right-number{
      height: 40px;
      line-height: 40px;
      .number-name{
        vertical-align: middle;
      }
      .number-change{
        vertical-align: middle;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        .enter-number{
          text-align: center;
          font-size: 12px;
          display: inline-block;
          margin: 5px 5px;
          width: 50px;
          height: 30px;
        }
      }
    }
    .right-btn{
      margin-top: 15px;
    }
  }
}
.detail-info-wrapper{
  width: 1240px;
  margin: 0 auto;
  font-size: 0;
  margin-top: 60px;
  margin-bottom: 80px;
  .detail-info{
    height: 62px;
    border-bottom: 1px solid #dcdcdc;
    .detail-title{
      font-size: 16px;
      height: 62px;
      line-height: 62px;
      color: #00c3f5;
      border-bottom: 1px solid #00c3f5;
      padding: 0 20px;
      margin-bottom: -1px;
      box-sizing: border-box;
      display: inline-block;
    }
  }
  img{
      width: 1240px;
    }
}
</style>
