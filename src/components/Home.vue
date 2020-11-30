<template>
  <div class="container" v-if="!loading">
    <div class="filters">
      <div class="category">
        <h2>Categories Filter</h2>
        <a-checkbox-group :options="filters" @change="onChange" />
      </div>
    </div>
    <div class="products" v-for="(item, index) in products" :key="index">
      <Cards
        :brand="item.brand"
        :discount="item.discountDisplayLabel"
        :imageUrl="item.searchImage"
        :info="item.additionalInfo"
        :mrp="item.mrp"
        :price="item.price"
      ></Cards>
    </div>
  </div>
</template>

<script>
import store from "../store";
import Cards from "./Cards.vue";
export default {
  name: "Home",
  components: { Cards },
  computed: {
    products() {
      return store.getters.filteredData;
    },
    loading() {
      return store.getters.loading;
    },
    filters() {
      return store.getters.filters;
    },
  },
  mounted() {
    store.dispatch("fetchProducts");
  },
  data() {
    return {
      categoryFilters: [],
    };
  },
  methods: {
    onChange(value) {
      store.commit("filterData", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.products {
  margin: 10px;
  grid-gap: 20px;
  display: inline-flex;
  justify-content: space-around;
  width: 200px;
  height: auto;
}
</style>
