import * as ActionTypes from '../ActionTypes';
const initialState = {
    errorMesssage: null
}
export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ERROR:
            return { ...state, errorMesssage: action.payload }
    }
    return state;
}