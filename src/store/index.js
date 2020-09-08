import Vue from "vue";
import Vuex from "vuex";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.use(Vuex);
Vue.use(VueLodash, { lodash: lodash });

export default new Vuex.Store({
  state: {
    items: [
      { id: 1, title: "Title 1", body: "Body 1", isImportant: true },
      { id: 2, title: "Title 2", body: "Body 2", isImportant: false },
      { id: 3, title: "Title 3", body: "Body 3", isImportant: true },
      { id: 4, title: "Title 4", body: "Body 4", isImportant: false },
    ],
    reverseSort: false,
  },
  mutations: {
    addNewItem(state, item) {
      const lastItemsId = state.items.length
        ? state.items[state.items.length - 1].id
        : 0;
      item.id = lastItemsId + 1;
      state.items.push(item);
    },
    updateItem(state, item) {
      const itemIndex = state.items.map((item) => item.id).indexOf(item.id);
      state.items[itemIndex] = item;
      console.log(state.items);
    },
    removeItem(state, id) {
      const itemIndex = state.items.map((item) => item.id).indexOf(id);
      state.items.splice(itemIndex, 1);
    },
    reverseSort(state) {
      state.reverseSort = !state.reverseSort;
    },
  },
  getters: {
    getItems(state) {
      return state.items;
    },
  },
  actions: {},
});
