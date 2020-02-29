<template>
<div class='my-footer'>
  <div class="footer-wrapper">
    <div class="top clearfix">
    <ul class="fl footer-service">
      <li v-for='(item, index) in serviceLinkData' :key='index'>
        <a :href="item.href">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </a>
      </li>
    </ul>
    <div class="fr online-service">
      <span>周一至周日 7：30-24：00</span>
      <p>400-788-3333</p>
      <a href="">在线客服</a>
    </div>
  </div>
  <hr class="middle">
  <div class="bottom">
      <ul class="fl external-link">
        <li v-for='(item, index) in extenralLinkData' :key='index'>
          <a href="">{{item.name}}</a>
        </li>
      </ul>
      <div></div>
    <div class="fr">
      <a href=""><i class="icon-font icon-weibo"></i></a>
      <a href=""><i class="icon-font icon-weixin"></i></a>
      <a href=""><i class="icon-font icon-qqzone"></i></a>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data () {
    return {
      serviceLinkData: [],
      extenralLinkData: []
    }
  },
  mounted () {
    this.getserviceData()
    this.getextenralLink()
  },
  methods: {
    async getserviceData () {
      const { data } = await axios.get('/api/serviceLink')
      this.serviceLinkData = data
    },
    async getextenralLink () {
      const { data } = await axios.get('/api/externalLink')
      this.extenralLinkData = data
    }
  }
}
</script>
<style lang='less' scoped>
.my-footer {
  background-color: #fff;
  padding: 48px 100px 40px;
  border: 1px solid #efefef;
  .footer-wrapper{
    margin: 0 auto;
    .top{
      .footer-service{
        width: 1000px;
        li{
          display: inline-block;
          width: 240px;
          height: 57px;
          font-size: 12px;
          color: #999;
          img, span{
            vertical-align: middle;
          }
        }
      }
      .online-service{
        span{
          font-size: 12px;
          color: #999;
        }
        p{
          font-size: 30px;
          color: #00c3f5;
          font-weight: 400;
        }
      }
    }
    .middle{
      margin: 20px 0 28px;
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #999;
    }
    .bottom{
      .external-link{
        li{
          display: inline-block;
          padding-right: 15px;
          margin-right: 15px;
          border-right: 1px solid #e6e6e6;
          color: #999;
          font-size: 12px;
          &:last-child{
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
