export const state = () => ({
  cart: [],
});
export const mutations = {
  CHANGE_CART(state, cart) {
    state.cart = cart;
  },
  ADD_PRODUCT(state, product) {
    state.cart.push(product);
  },
  REMOVE_PRODUCT(state, data) {
    state.cart.splice(data, 1);
  },
  CLEAR_CART(state) {
    state.cart = [];
  },
};
export const getters = {
  GET_CART: state => state.cart
};
