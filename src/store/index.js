import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],

  },
  getters: {
    itemInCart(state) {
      return state.cart
    },

  },
  mutations: {
    itemFromAction(state, items) {
      let found = state.cart.find((item) => item.id == items.id); // item คือ ตัวแปรที่เก็บ cart ใน state ไว้ จะชื่ออะไรก็ได้
      if (found) {
        found.qty = found.qty + 1;
        found.total = found.qty * found.price;
      } else {
        state.cart.push(items)
      }
    },

  },
  actions: {
    itemProduct({ commit }, items) {
      commit("itemFromAction", items)
    },

  },

});
