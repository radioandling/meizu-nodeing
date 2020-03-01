<template>
<div>
  <ul class="filter">
    <li class="filter-item clearfix" v-for='(item, index) in  data' :key='index'>
      <div class="left fl">{{item.name}}:</div>
      <ul class="fl">
        <li
        class="right fl" v-for='(info, ii) in  item.queryList'
        :key='ii'
        :class="{'active': activeFilter[item.key] === info.value}"
        @click="changeFilter(item.key, info.value)"
        >
        {{info.name}}
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      activeFilter: {}
    }
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
    changeFilter (key, val) {
      this.$set(this.activeFilter, key, val)
      this.$emit('showResult', this.activeFilter)
    }
  }
}
</script>
<style lang='less' scoped>
.filter{
  background: white;
  padding: 15px 10px;
  border: 1px solid #efefef;
  .filter-item {
    line-height: 46px;
    .left{
      width: 85px;
      padding: 20px 10px;
      white-space: nowrap;
      color: rgb(51, 42, 42);
      overflow: hidden;
    }
    .right{
      padding: 20px 20px;
      cursor: pointer;
      margin-right: 62px;
    &:hover{
      color: #00c3f5;
    }
    &.active{
      color: #00c3f5;
    }
  }
  }
}
</style>
