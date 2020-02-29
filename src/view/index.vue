<template>
<div class='index'>
  <my-header></my-header>
  <div class="swiper-wrapper">
    <my-swiper class="swiper-wrapper" :data="swiperData"></my-swiper>
    <ul class="menus">
      <li v-for="(item, index) in menuData" :key="index">
        <a :href="item.href">{{item.name}}</a>
      </li>
    </ul>
  </div>
  <ul class="post-wrapper clearfix">
    <li v-for='(item, index) in postData' :key='index'>
      <a :href="item.href">
        <img :src="item.imgUrl" alt="">
      </a>
    </li>
  </ul>
  <div class="index-content">
    <div class="sale">
      <h3 class="content-title">热卖商品</h3>
      <my-goods :data="hotSaleData"></my-goods>
    </div>
    <div class="sale">
      <h3 class="content-title">手机</h3>
      <my-adver :data="adverPhoneData"></my-adver>
      <my-goods :data="phoneData"></my-goods>
    </div>
    <div class="sale">
      <h3 class="content-title">智能周边</h3>
      <my-adver :data="adverSmartData"></my-adver>
      <my-goods :data="smartData"></my-goods>
    </div>
  </div>
  <my-footer></my-footer>
</div>
</template>

<script>
import axios from 'axios'
import MyHeader from '../components/header'
import MySwiper from '../components/swiper'
import MyGoods from '../components/goods'
import MyAdver from '../components/adList'
import MyFooter from '../components/footer'

export default {
  components: {
    MyHeader,
    MySwiper,
    MyGoods,
    MyAdver,
    MyFooter
  },
  data () {
    return {
      swiperData: [],
      menuData: [],
      postData: [],
      hotSaleData: [],
      phoneData: [],
      smartData: [],
      adverPhoneData: [],
      adverSmartData: []
    }
  },
  mounted () {
    this.getSwiperData()
    this.getMenuData()
    this.getPostData()
    this.getHotSaleData()
    this.getPhoneData()
    this.getSmartData()
    this.getAdPhoneData()
    this.getAdSmartData()
  },
  methods: {
    async getSwiperData () {
      const {data} = await axios.get('/api/advertise')
      this.swiperData = data
    },
    async getMenuData () {
      const {data} = await axios.get('/api/menu')
      this.menuData = data
    },
    async getPostData () {
      const {data} = await axios.get('/api/post')
      this.postData = data
    },
    async getHotSaleData () {
      const {data} = await axios.get('/api/hotSale')
      this.hotSaleData = data
    },
    async getPhoneData () {
      const {data} = await axios.get('/api/phoneSale')
      this.phoneData = data
    },
    async getSmartData () {
      const {data} = await axios.get('/api/smartSale')
      this.smartData = data
    },
    async getAdPhoneData () {
      const {data} = await axios.get('/api/phoneRecommend')
      this.adverPhoneData = data
    },
    async getAdSmartData () {
      const {data} = await axios.get('/api/smartRecommend')
      this.adverSmartData = data
    }
  }
}
</script>
<style lang='less' scoped>
.swiper-wrapper{
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  .menus{
    width: 303px;
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 17px;
    li{
      height: 57px;
      line-height: 57px;
      padding-left: 40px;
      a{
        color: #fff;
        font-size: 16px;
        transition: color .5s;
        &:hover{
          color: aqua;
        }
      }
    }
  }
}
.post-wrapper{
  width: 1240px;
  margin: 10px auto 50px;
  li{
    width: 303px;
    float: left;
    height: 180px;
    margin-right: 9px;
    a{
      transition: opacity .3s ease;
      &:hover{
        opacity: 0.6;
      }
    }
    &:last-child{
      margin-right: 0px;
    }
  }
}
.index-content{
  width: 1240px;
  margin: 0 auto;
  .sale{
      margin-bottom: 50px;
      .content-title{
        font-size: 25px;
        font-weight: 430;
        margin-bottom: 10px;
      }
  }
}

</style>
