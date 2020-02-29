<template>
<div class='swiper' :style="swiperSize">
  <ul :style="listWrapper">
    <li class="swiper-list" v-for="(item, index) in data" :key="index">
      <a :href="item.href">
        <img :style="swiperSize" :src="item.imgUrl" alt="">
      </a>
    </li>
  </ul>
  <ul class="swiper-pagination">
    <li v-for="(item, index) in data" :key="index" @click="changeImg(index)" :class="{'active': activeIndex === index }"></li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'swiper',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 1240
    },
    delay: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      activeIndex: 0,
      timer: null
    }
  },
  computed: {
    swiperSize () {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    },
    listWrapper () {
      return {
        width: `${this.width * this.data.length}px`,
        height: `${this.height}px`,
        transform: `translateX(-${this.activeIndex * this.width}px)`,
        transtionDuration: '0.5s'
      }
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    setTimer: function () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.activeIndex === (this.data.length - 1)) {
          this.activeIndex = 0
        } else {
          this.activeIndex++
        }
      }, this.delay)
    },
    changeImg (index) {
      this.activeIndex = index
    }
  }
}
</script>
<style lang='less' scoped>
.swiper {
  width: 1240px;
  height: 500px;
  overflow: hidden;
  .swiper-list {
    display: inline-block;
  }
  .swiper-pagination {
    position: absolute;
    left: 30%;
    bottom: 40px;
    li {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(15, 5, 5);
      cursor: pointer;
      margin: 0 5px;
      &.active {
        background-color: aqua;
      }
    }
  }
}
</style>
