import Vue from 'vue'
const mutations = {
  ADD_SHOPCART (state, obj) {
    var haveData = false
    state.shoppingCarData.forEach(item => {
      if (item.id === obj.data.id) {
        haveData = true
        item.count = item.count + obj.number
      }
    })
    if (haveData === false) {
      Vue.set(obj.data, 'count', obj.number)
      Vue.set(obj.data, 'checked', true)
      state.shoppingCarData.push(obj.data)
    }
    console.log(this.state.shoppingCarData)
  },
  INCREASE_SHOPCART (state, id) {
    state.shoppingCarData.forEach((item) => {
      if (item.id === id) {
        item.count++
      }
    })
  },
  DECREASE_SHOPCART (state, id) {
    state.shoppingCarData.forEach((item) => {
      if (item.id === id && item.count > 1) {
        item.count--
      }
    })
  },
  CHECK_GOODS (state, id) {
    state.shoppingCarData.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked
      }
    })
  },
  CHECK_ALL_GOODS (state, checked) {
    state.shoppingCarData.forEach((item) => {
      item.checked = !checked
    })
  },
  DELETE_GOODS (state, id) {
    console.log('来到了某天', id)
    state.shoppingCarData.forEach((item, index) => {
      if (item.id === id) {
        state.shoppingCarData.splice(index, 1)
      }
    })
  }
}
export default mutations
