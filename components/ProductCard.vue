<template>
  <div class="card">
    <div class="card-img">
      <div class="card-rating">
        <img src="/icons/star.png" alt="" />
        <p>{{ product.rating }}</p>
      </div>
      <img
        :src="'https://frontend-test.idaproject.com' + product.photo"
        alt=""
      />
      <img
        class="card-icon"
        src="/icons/cart-xm.png"
        alt=""
        @click="cartIconClicked"
      />
    </div>
    <div>
      <p class="card-name">{{ product.name.toLowerCase() }}</p>
      <p class="card-price">
        {{ product.price | price }}
      </p>
    </div>
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
    cartIconClicked() {
      this.$emit('cartIconClick', this.product)
    }
  }
}
</script>

<style lang="scss" scope>
.card {
  background: white;
  width: 20%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0px 10px 20px;

  img {
    width: 142px;
    height: 180px;
  }
  &-price {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 0px;
  }
  &-rating {
    font-size: 12px;
    line-height: 13px;
    font-weight: 700;
    color: #f2c94c;
    p {
      margin-top: 5px;
    }
    img {
      height: 20px;
      width: 20px;
    }
  }
  &-img {
    display: flex;

    justify-content: space-between;
    div {
      display: flex;
    }
  }

  &-name {
    color: #59606d;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 18px;
  }
}
.card .card-icon {
  width: 12px;
  height: 13.2px;
  cursor: pointer;
}
</style>
