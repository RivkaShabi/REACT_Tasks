import * as ActionTypes from '../ActionTypes';
const initialState = {
    currentUser: null,
    listUser:[]
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER:
            return { ...state, currentUser: action.payload }
        case ActionTypes.GET_USERS:
            return { ...state,listUser:action.payload ,currentUser:action.payload}
        case  ActionTypes.ADD_USER:
            return {
                currentUser:action.payload,
                listUser: [...state.listUser, action.payload]
            }
            
    }
    return state;
}