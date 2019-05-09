import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';
import selectedid from './reducers/selectedid';

import apiReducer from './reducers/apiReducer';
import {getPostsFromAPI} from './actions';

const FREQUENCY = 2000;
const LS_KEY = 'bloggy-mc-redux';


// Pass an object to combineReducers.
// This object should "shaped" like your
// state.
const rootReducer = combineReducers({
    posts,
    selectedid
});

// check localStorage for any previously saved app state
// if it's there, pass as second argument to createStore
// let initialState = {};
// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));
// if (dataFromLocalStorage) {
//     initialState = dataFromLocalStorage;
// }
const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

async function main() {
    const action = await getPostsFromAPI();
    // TODO: compare initialState to data from API (in action.payload)
    // Use a mix of the two
    store.dispatch(action);
}
main();


setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQUENCY);

export default store;


