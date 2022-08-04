import { createStore, action } from 'easy-peasy';

const store = createStore({
  user: {
    likedBooks: []
  },
  updateUser: action((state, payload) => {
    state.user = {
      ...state.user,
      ...payload
    }
  }),
  logout: action((state, payload) => {
    state.user = {
      likedBooks: []
    };
    state.isLogged = false;
  }),
  // userLikedBooks: [],
  updateLikedBooks: action((state, payload) => {
    console.log('PAYLOAD: ', payload)
    state.user.likedBooks = payload;
  }),
  isLogged: false,
  setIsLogged: action((state, payload) => {
    state.isLogged = payload;
  }),
  cart: [],
  addToCart: action((state, payload) => {
    state.cart = [
      ...state.cart,
      payload
    ]
  }),
  removeFromCart: action((state, payload) => {
    const index = state.cart.findIndex((elem) => (elem === payload));
    const cart = state.cart.slice();
    const removed = cart.splice(index - 1, 1);
    console.log("removed: ", removed)
    state.cart = cart;
  })
}, // model
  { devTools: true } //config
);


export default store;