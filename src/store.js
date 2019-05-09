import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';

// Pass an object to combineReducers.
// This object should "shaped" like your
// state.
const rootReducer = combineReducers({
    posts
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


