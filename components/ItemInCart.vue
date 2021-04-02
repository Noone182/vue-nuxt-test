<template>
  <div class="cart-item">
    <div class="cart-item-photo">
      <img
        :src="'https://frontend-test.idaproject.com' + product.photo"
        alt=""
      />
    </div>
    <div class="cart-item-info">
      <p class="card-name">{{ product.name.toLowerCase() }}</p>
      <p class="card-price">
        {{ product.price | price }}
      </p>
      <div class="card-rating">
        <img src="/icons/star.png" alt="" />
        <p>{{ product.rating }}</p>
      </div>
    </div>
    <div class="cart-item-icon" @click="deleteItem()">&nbsp;</div>
  </div>
</template>

<script>
import price from '@/mixins/price'
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  mixins: [price],
  methods: {
    deleteItem() {
      this.$emit('deleteItem', this.product)
    }
  }
}
</script>

<style lang="scss"  scoped>
.cart-item {
  display: flex;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  width: 280px;
	height: 120px;
	align-items: center;
  margin: 25px auto;
	border-radius: 8px;
  &-photo {
    width: 30%;
  }
  &-photo img {
    width: 70px;
    height: 90px;
  }
  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;
    width: 60%;
  }
  &-icon {
    background: url('../static/icons/cart-remove.png') no-repeat;
    background-position: center;
    width: 20%;
    height: 100%;
    padding: 25px 0px;
    cursor: pointer;
  }
}

.card {
  &-name {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  &-rating {
    display: flex;
		margin-top: 16px;

  }
}
</style>
