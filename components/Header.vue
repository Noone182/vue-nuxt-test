<template>
  <header class="header">
    <div class="container">
      <p>TestList</p>
      <div @click="showCart">
        <img src="/icons/cart-xs.png" alt="" />
        <span>{{ this.$store.state.cart.length }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    showCart() {
      this.$emit('showCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);

  p {
    color: #59606d;
    font-size: 22px;
    font-weight: 700;
    margin-right: auto;
  }
  div img {
    margin: 20px auto auto auto;
    width: 24px;
    height: 26.4px;
  }
}
.container {
  display: flex;
  width: 1250px;
  margin: 0 auto;
  padding: 0 15px;

  div img:hover {
    cursor: pointer;
  }
  span {
    color: white;
    background: #959dad;
    position: absolute;
    border-radius: 12px;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    height: 12px;
    width: 12px;
    text-align: center;
    top: 10px;
    margin-left: -7px;
  }
}
</style>
