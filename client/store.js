import { createStore, action } from 'easy-peasy';

function isEqual(obj1, obj2) {
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length != props2.length) {
      return false;
  }
  for (var i = 0; i < props1.length; i++) {
      let val1 = obj1[props1[i]];
      let val2 = obj2[props1[i]];
      let isObjects = isObject(val1) && isObject(val2);
      if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
          return false;
      }
  }
  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

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
    console.log("cart after add: ", state.cart)
  }),
  removeFromCart: action((state, payload) => {
    const cart = state.cart.slice();
    console.log("cart before removal: ", cart)
    console.log("payload to remove: ", payload)
    const index = cart.findIndex((elem) =>
      isEqual(elem, payload)
    );
    console.log(index);
    const removed = cart.splice(index, 1);
    console.log("removed: ", removed)
    console.log("cart after removal: ", cart)
    state.cart = cart;
  })
}, // model
  { devTools: true } //config
);


export default store;