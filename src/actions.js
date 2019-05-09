
// Action types
export const ACTION_CREATE_POST = 'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';
export const ACTION_SELECT_POST = 'ACTION_SELECT_POST';
// Action creators

export function createPost(payload) {
    // assumes that the `payload` argument looks like this:
    // {
    //  title: 'lorem ipsum',
    //  content: 'dolor oakley set',
    // }
    return {
        type: ACTION_CREATE_POST,
        payload
    };
}
window.createPost = createPost;

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST,
        payload: {
            id
        }
    };
}

window.deletePost = deletePost;

export function updatePost(id, payload) {
    return {
        type: ACTION_UPDATE_POST,
        payload: {
            id,
            ...payload
        }
    };
}
window.updatePost = updatePost;

export function selectPost(id) {
    return {
        type: ACTION_SELECT_POST,
        payload: id
    }
}
window.selectPost = selectPost;
