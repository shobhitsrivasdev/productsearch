import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    products: [],
    loading: true,
    categories: [],
    filteredData: [],
  },
  mutations: {
    saveProducts(state, payload) {
      state.filteredData = state.products = [...payload];
    },
    loading(state, payload) {
      state.loading = payload;
    },
    filters(state, payload) {
      state.categories = [...payload];
    },
    filterData(state, payload) {
      let filtered = [];
      if (payload.length) {
        payload.forEach((filter) => {
          state.products.forEach((data) => {
            if (data.category == filter) {
              filtered.push(data);
            }
          });
        });
        state.filteredData = [...filtered];
      } else {
        state.filteredData = [...state.products];
      }
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    loading(state) {
      return state.loading;
    },
    filteredData(state) {
      return state.filteredData;
    },
    filters(state) {
      return state.categories;
    },
  },
  actions: {
    fetchProducts(context) {
      context.commit("loading", true);
      fetch("https://demo7242716.mockable.io/products")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          context.commit("saveProducts", data.products);
          context.commit("filters", extractFilters(data.products));
          context.commit("loading", false);
        })
        .catch(() => {
          throw new Error("Issue in Fetching Data");
        });
    },
  },
});
function extractFilters(items) {
  let finalData = [];
  items.forEach((val) => {
    if (finalData.indexOf(val.category) == -1) {
      finalData.push(val.category);
    }
  });
  return finalData;
}
