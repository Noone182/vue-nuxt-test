<template>
  <div class="container">
    <Sidebar :categories="categories" />
    <div class="wrapper">
      <div class="sort-btn">
        <div>Сортировка по:</div>
        <select @change="sortByCategory">
          <option :selected="true" :value="sortCategory[0].value">
            {{ sortCategory[0].name }}
          </option>
          <option :value="sortCategory[1].value">
            {{ sortCategory[1].name }}
          </option>
        </select>
      </div>
      <ProductList class="products" :products="sortedProducts" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { Sidebar },
  async asyncData({ $axios, params }) {
    const categories = await $axios.$get(
      'https://frontend-test.idaproject.com/api/product-category'
    )
    const products = await $axios.$get(
      `https://frontend-test.idaproject.com/api/product?category=${params.product}`
    )
    const sortedProducts = products.sort((a, b) => b.price - a.price)

    return { categories, sortedProducts }
  },
  data() {
    return {
      sortCategory: [
        { value: 'price', name: 'По цене' },
        { value: 'rating', name: 'По популярности' }
      ]
    }
  },
  methods: {
    sortByCategory() {
      if (event.target.value === 'rating') {
        this.sortedProducts = this.sortedProducts.sort(
          (a, b) => b.rating - a.rating
        )
      } else {
        this.sortedProducts = this.sortedProducts.sort(
          (a, b) => b.price - a.price
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
.wrapper {
  width: 1100px;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 1250px;
  margin: 0 auto;
  padding: 0 15px;
}

.sort-btn {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  select {
    border: none;
  }
  select:focus {
    outline: none;
  }
}
.products {
  margin: 25px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>
