const getters = {
  isAllChecked (state) {
    let checked = true
    state.shoppingCarData.forEach(item => {
      if (!item.checked) {
        checked = false
      }
    })
    return checked
  },
  checkedGoodsNumberTotal (state) {
    let totalNumber = 0
    state.shoppingCarData.forEach(item => {
      if (item.checked) {
        totalNumber += 1
      }
    })
    return totalNumber
  },
  checkedGoodsPriceTotal (state) {
    let totalPrice = 0
    state.shoppingCarData.forEach(item => {
      if (item.checked) {
        totalPrice = totalPrice + item.goodsPrice * item.count
      }
    })
    return totalPrice
  },
  shopCartTotal (state) {
    let cartTotal = 0
    state.shoppingCarData.forEach(item => {
      cartTotal += item.count
    })
    return cartTotal
  }
}
export default getters
