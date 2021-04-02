<template>
  <aside class="sidebar">
    <h1>Каталог</h1>
    <ul>
      <li v-for="category of categories" :key="category.id">
        <nuxt-link :to="'/' + category.id">{{ category.name }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
		categories: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 170px;
  ul {
    padding-left: 0px;
    list-style: none;
  }
	li {
		padding-bottom: 15px;
	}
  li a {
    list-style-type: none;
    text-decoration: none;
    color: #959dad;
  }
  li a:hover {
    color: #59606d;
    cursor: pointer;
  }
  a.nuxt-link-active {
    text-decoration: underline;
    color: black;
  }
	h1 {
		font-size: 32px;
		font-weight: 700;
	}
}
</style>
