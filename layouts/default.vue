<template>
  <div class="container">
    <Header @showCart="showCart" />
    <Nuxt />
    <transition name="slide-fade" mode="out-in">
      <Cart
        :cart="this.$store.getters.GET_CART"
        @closeCart="closeCart"
        :cartVisible="cartShow"
      />
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    showCart() {
      this.cartShow = true
    },
    closeCart() {
      this.cartShow = false
    }
  },
  data() {
    return { cartShow: false }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'PT Sans', sans-serif;
}
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
</style>
