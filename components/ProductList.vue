<template>
  <div>
    <ProductCard
      @cartIconClick="updateCart"
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateCart(product) {
      let isRemove = false
      const cart = this.$store.getters.GET_CART
      for (let productInCart of cart) {
        if (product.id === productInCart.id) {
          const data = cart.findIndex((el) => product.id === el.id)
          this.$store.commit('REMOVE_PRODUCT', data)
          isRemove = true
        }
      }
      if (!isRemove) {
        this.$store.commit('ADD_PRODUCT', product)
      }
    }
  }
}
</script>

<style scoped>
</style>
