import {createStore} from 'redux';
import reducer from "./reducers";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();

const store = createStore(reducer, {reducerBeers: persistedState});

// store.subscribe(() => {
//     saveState(store.getState().reducerBeers.beersInCart);
// })

store.subscribe(() => {
    saveState({
        reducerBeers: store.getState().reducerBeers
    });
})

export default store;