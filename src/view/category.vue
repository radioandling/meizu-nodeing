<template>
<div class='cate'>
  <my-header></my-header>
  <div class="cate-wrapper">
    <div class="bread">
      <span>首页</span>
      <span class="arrow"> > </span>
      <span>全部</span>
      <span class="arrow"> > </span>
      <span class="last">手机</span>
    </div>
    <my-filter :data="filterData" @showResult="handleResult"></my-filter>
    <my-sort @getKey="handleKey" @getStock="handleStock"></my-sort>
    <cate-list :data="cateData" @clickItem="goToDetail"></cate-list>
  </div>
  <my-reco :data="recoData"></my-reco>
  <my-footer></my-footer>
</div>
</template>

<script>
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
import CateList from '../components/cateList'
import MyFilter from '../components/fliter'
import MySort from '../components/sortBox'
import MyReco from '../components/reco'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyFooter,
    CateList,
    MyFilter,
    MySort,
    MyReco
  },
  data () {
    return {
      cateData: [],
      filterData: [],
      cateDataCopy: [],
      recoData: [],
      currentQuery: null,
      currentStock: null,
      currentKey: null
    }
  },
  mounted () {
    this.getCateData()
    this.getFilterData()
    this.getRecoData()
  },
  methods: {
    async getCateData () {
      const {data} = await axios.get('/api/categoryList')
      this.cateData = data
      this.cateDataCopy = [].concat(data)
    },
    async getFilterData () {
      const {data} = await axios.get('/api/queryList')
      this.filterData = data
    },
    async getRecoData () {
      const {data} = await axios.get('/api/smartSale')
      this.recoData = data
    },
    goToDetail (item) {
      this.$router.push(
        {
          name: 'detail',
          params: {id: item.id}
        }
      )
    },
    handleResult: function (query) {
      this.currentQuery = query
      this.sortGoods()
    },
    handleKey: function (key) {
      this.currentKey = key
      this.sortGoods()
    },
    handleStock (value) {
      this.currentStock = value
      this.sortGoods()
    },
    sortGoods: function () {
      // 这是在做上边部分的筛选,根据缓存的选项然后进行筛选
      this.cateData = [].concat(this.cateDataCopy)
      if (this.currentQuery) {
        Object.keys(this.currentQuery).forEach((key) => {
          if (this.currentQuery[key]) {
            this.cateData = this.cateData.filter((item) => {
              return item.features.indexOf(this.currentQuery[key]) >= 0
            })
          }
        })
      }
      // 这是在做下边左边的筛选，根据缓存的选项然后进行筛选
      if (this.currentKey === 'recommend') {
        this.cateData.sort((a, b) => {
          return b.shelvetime - a.shelvetime
        })
      } else if (this.currentKey === 'new') {
        this.cateData.sort((a, b) => {
          return b.publishedTime - a.publishedTime
        })
      } else if (this.currentKey === 'low') {
        this.cateData.sort((a, b) => {
          return b.goodsPrice - a.goodsPrice
        })
      } else if (this.currentKey === 'high') {
        this.cateData.sort((a, b) => {
          return a.goodsPrice - b.goodsPrice
        })
      }
      // 这是在做下边右边的筛选（有无货），根据已经缓存的结果进行筛选
      if (this.currentStock) {
        this.cateData = this.cateData.filter((item) => {
          return item.available
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.cate-wrapper{
  width: 1240px;
  margin: 0 auto;
  padding-bottom: 60px;
}
.bread{
  height: 40px;
  line-height: 40px;
  .arrow, .last{
    color: #999;
  }
}
</style>
