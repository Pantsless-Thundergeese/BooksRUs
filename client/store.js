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
  })
}, // model
  { devTools: true } //config
);


export default store;