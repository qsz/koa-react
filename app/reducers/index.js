import { combineReducers } from 'redux';

import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../config/actionTypes';

const postIssues = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_ISSUES:
            // 请求issues
            return {
                isFetching: true,
                items:[],
            }
        case RECEIVE_ISSUES:
            // 接收issues
            return {
                isFetching: false,
                items: action.posts
            }
        default:
            return state;
    }
}




const rootReducer = combineReducers({
    postIssues,
})
export default rootReducer
