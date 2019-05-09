import { ACTION_SELECT_POST } from '../actions';

export default function selectedid(state='', action={type: ''}) {
    switch(action.type) {
        case ACTION_SELECT_POST:
            return action.payload;
        break;
        default:
            return state;
        break;
    }
}