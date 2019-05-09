
const dummy = {payload: {posts: {}, selectedid: ''}}

export default function apiReducer(state={}, action) {
    console.log(action);
    if (action && action.payload) {
        return action.payload;
    } else {        
        return {posts: {}, selectedid: 'hello no action passed in'};
    }
}