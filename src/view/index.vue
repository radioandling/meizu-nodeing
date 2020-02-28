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
  <div class="index-content">index-content</div>
  <div class="footer">footer</div>
</div>
</template>

<script>
import axios from 'axios'
import MyHeader from '../components/header'
import MySwiper from '../components/swiper'
export default {
  components: {
    MyHeader,
    MySwiper
  },
  data () {
    return {
      swiperData: [],
      menuData: [],
      postData: []
    }
  },
  mounted () {
    this.getSwiperData()
    this.getMenuData()
    this.getPostData()
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
</style>
