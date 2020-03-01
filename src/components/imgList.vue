<template>
<div :class="{'imgage-wrapper': type === 'small', 'imgage-wrapper-big': type === 'big'}">
  <img class="img" :src="data[activeIndex]">
  <ul class="imgs">
    <li class="imgs-item" :class="{'active': activeIndex === index}" v-for='(item, index) in  data' :key='index' @click="changeImg(index)">
      <img :src="item">
    </li>
  </ul>
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
    },
    type: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    changeImg (index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang='less' scoped>
.imgage-wrapper{
  text-align: center;
  .img{
    height: 230px;
    margin-top: 20px;
  }
  .imgs{
    overflow: hidden;
    margin: 13px auto 15px;
    .imgs-item{
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin: 0 4px;
      border: 1px solid #efefef;
      cursor: pointer;
      &.active{
        border-color: #bdbdbd;
      }
      img{
        width: 40px;
        height: 40px;
      }
    }
  }
}
.imgage-wrapper-big{
  text-align: center;
  .img{
    height: 375px;
    margin-top: 20 0 px;
  }
  .imgs{
    overflow: hidden;
    margin-top: 10px;
    .imgs-item{
      display: inline-block;
      width: 75px;
      height: 75px;
      border-radius: 5px;
      margin: 0 5px;
      border: 1px solid transparent;
      cursor: pointer;
      &.active{
        border-color: #e64340;
      }
      img{
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
