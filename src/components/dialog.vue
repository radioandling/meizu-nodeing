<template>
<div class='dialog' v-show="show">
  <div class="dialog-content">
    <div class="dialog-box" :style="dialogBox">
      <div class="header" :class="{'dialog-header-bottom': title}">
        {{title}}
        <i class="icon-font icon-close" @click="hiddenDialog"></i>
      </div>
      <div class="body" :style="{dialogContent}">
        <slot></slot>
      </div>
      <div class="footer">
        <button v-show="showConfirmButton" class="btn danger" @click="confirm">{{confirmButtonText}}</button>
        <button v-show="showCancelButton" class="btn cancel" @click="cancel">{{CancelButtonText}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 760
    },
    height: {
      type: Number,
      default: 380
    },
    title: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    CancelButtonText: {
      type: String,
      default: '取消'
    }
  },
  computed: {
    dialogBox () {
      return {
        width: `${this.width}px`
      }
    },
    dialogContent () {
      return {
        height: `${this.height}px`
      }
    }
  },
  methods: {
    hiddenDialog () {
      this.$emit('update:show', false)
    },
    confirm () {
      this.$emit('confirm')
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
<style lang='less' scoped>
.dialog{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(153,153,153, 0.6);
  display: table;
  .dialog-content{
    display: table-cell;
    vertical-align: middle;
    .dialog-box{
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      .header{
        height: 50px;
        line-height: 50px;
        font-size: 25px;
        font-weight: 500;
        position: relative;
        i{
          font-size: 18px;
          position: absolute;
          top: 10px;
          right: 20px;
        }
      }
      .body{
        font-size: 20px;
        font-weight: 500;
      }
      .footer{
        padding-bottom: 20px;
        button{
          width: 100px;
          margin-right: 20px;
        }
      }
    }
  }
}
.dialog-header-bottom{
 border-bottom: 1px solid #f8f8f9;
}
</style>
