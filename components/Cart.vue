<template>
        <div class="wrapper" v-if="this.cartVisible">
            <div class="cart">
                <div class="cart-header">
                    <h1>Корзина</h1><span @click="closeCart()">&times;</span>
                </div>
                <div v-if="!isSend">
                    <div class="cart-item" v-if="cart.length != 0 ? true : false">
                        <p>Товары в корзине</p>
                        <ItemInCart v-for="product of cart" :key="product.id" :product="product" @deleteItem="deleteItem"/>
                        <p>Оформить заказ</p>
                        <form @submit.prevent="sendData">
                            <input type="text" placeholder="Ваше имя" required></input>
                            <input type="tel" v-mask="'+7 ### ###-##-##'" placeholder="Телефон" required></input>
                            <input type="text" placeholder="Адрес" required></input>
														<button type="submit">Отправить</button>
                        </form>

                    </div>
                    <div class="cart-empty" v-else>
                        <p>Пока вы ничего не добавили в корзину</p>
                        <button @click="closeCart()">Перейти к выбору</button>
                    </div>
                </div>
                <div class="cart-sent" v-else>
                    <img src="/icons/ok-hand.png">
                    <h6>Заявка успешно отправлена</h6>
                    <p>Вскоре наш менеджер свяжется с Вами</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['cartVisible', 'cart'],
  data() {
    return { isSend: false }
  },
  methods: {
    closeCart() {
      this.$emit('closeCart')
    },
    deleteItem(product) {
      const cart = this.$store.getters.GET_CART
      for (let productInCart of cart) {
        if (product.id == productInCart.id) {
          const data = cart.findIndex((el) => product.id == el.id)
          this.$store.commit('REMOVE_PRODUCT', data)
        }
      }
    },
    sendData() {
      this.isSend = true
      setTimeout(() => {
        this.$store.commit('CLEAR_CART')
        this.closeCart()
        this.isSend = false
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.cart {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: #ffffff;
  width: 460px;
  margin-left: auto;
  &-item {
    padding: 0 40px;
  }
  &-item p {
    font-size: 18px;
    font-weight: 400;
    color: #59606d;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  &-item button {
    background-color: #1f1f1f;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
    width: 364px;
    height: 50px;
    outline: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 24px;
  }
  &-item button:hover {
    background: #59606d;
  }
  &-empty {
    padding: 0 47px;
  }
  &-empty p {
    color: black;
    font-size: 22px;
  }
  &-empty button {
    background-color: #1f1f1f;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
    outline: none;
    border: none;
    width: 364px;
    height: 50px;
    cursor: pointer;
    font-size: 16px;
  }
  &-header {
    display: flex;
    padding: 15px 40px;
  }
  &-header h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 32px;
  }
  &-header span {
    align-self: center;
    margin-left: auto;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
  }
  &-sent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-sent img {
    margin-top: 35%;
    height: 80px;
    width: 80px;
    align-self: center;
  }
  &-sent h6 {
    font-size: 24px;
    font-weight: 700;
    align-self: center;
    margin: 10px auto;
  }
  &-sent p {
    font-size: 16px;
    font-weight: 400;
    align-self: center;
    color: #59606d;
    margin: 0px auto;
  }
}

form {
  display: flex;
  flex-direction: column;
}
input {
  height: 50px;
  width: 350px;
  padding-left: 14px;
  margin-top: 16px;
  background: #f8f8f8;
  border-radius: 8px;
  border: none;
}
input:focus {
  outline: none;
}
</style>
