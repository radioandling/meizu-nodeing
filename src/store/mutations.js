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
      state.shoppingCarData.push(obj.data)
    }
    console.log(this.state.shoppingCarData)
  }
}
export default mutations
